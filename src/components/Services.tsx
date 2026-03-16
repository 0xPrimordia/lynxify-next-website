"use client";
import React, { useState } from 'react';
import { GlowingEffect } from './ui/glowing-effect';
import { HiCode, HiTemplate } from 'react-icons/hi';
import { HiPaintBrush } from 'react-icons/hi2';
import { PiBrainBold } from 'react-icons/pi';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
}

// Wrapper component to apply gradient to icons
function GradientIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="gradient-icon-wrapper">
      {children}
    </span>
  );
}

function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = (await res.json()) as { success?: boolean; error?: string };

      if (res.ok && data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="newsletter-signup">
      <h3 className="newsletter-signup-title">Stay up to date on updates</h3>
      <p className="newsletter-signup-subtitle">
        Get the latest news about our products and services delivered to your inbox.
      </p>
      {status === 'success' ? (
        <p className="newsletter-signup-success">Thanks for subscribing! Check your inbox to confirm.</p>
      ) : (
        <form className="newsletter-signup-form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === 'loading'}
            className="newsletter-signup-input"
          />
          <button
            type="submit"
            className="btn-gradient newsletter-signup-btn"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
          {status === 'error' && message && (
            <p className="newsletter-signup-error">{message}</p>
          )}
        </form>
      )}
    </div>
  );
}

function ServiceCard({ title, icon }: ServiceCardProps) {
  return (
    <div className="relative rounded-2xl border border-white/30 bg-black/50 p-6 h-full shadow-[inset_0_0_0_10px_rgba(15,15,15,1)] flex flex-col">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="service-card-icon">
          <GradientIcon>{icon}</GradientIcon>
        </div>
        <h4 className="service-card-title">{title}</h4>
      </div>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      title: "Web3 / Web2",
      icon: <HiCode />
    },
    {
      title: "Design / UX / Experiential",
      icon: <HiPaintBrush />
    },
    {
      title: "AI & Agents",
      icon: <PiBrainBold />
    },
    {
      title: "Product Design",
      icon: <HiTemplate />
    }
  ];

  return (
    <section className="services-section" id="services">
      {/* Hidden SVG for gradient definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <linearGradient id="service-icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A949F6" />
            <stop offset="100%" stopColor="#5788FB" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">
          Comprehensive solutions for the modern web. We solve specific problems with tailored approaches, not generic solutions.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
            />
          ))}
        </div>
        <p className="services-note">
          Examples available upon request in addition to a free consultation to discuss your project.
        </p>

        <NewsletterSignup />
      </div>
    </section>
  );
}

