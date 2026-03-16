"use client";
import React, { useState } from 'react';
import { GlowingEffect } from './ui/glowing-effect';

interface ProjectCardProps {
  title: string;
  description: string;
  bullets: string[];
  logo: string;
  logoAlt: string;
  link: string;
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
      <h3 className="newsletter-signup-title">Stay up to date on our projects</h3>
      <p className="newsletter-signup-subtitle">
        Get the latest updates delivered to your inbox.
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

function ProjectCard({ title, description, bullets, logo, logoAlt, link }: ProjectCardProps) {
  return (
    <div className="relative rounded-2xl border border-white/30 bg-black/50 p-8 h-full shadow-[inset_0_0_0_10px_rgba(15,15,15,1)] flex flex-col">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className="relative z-10 flex flex-col flex-1">
        <img src={logo} alt={logoAlt} className="project-card-logo" />
        <h3 className="project-card-title">{title}</h3>
        <ul className="project-card-bullets">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
        <p className="project-card-description">{description}</p>
        <div className="mt-auto pt-6">
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn-gradient">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const projects = [
    {
      title: "LYNX Token",
      bullets: [
        "Diversified token basket",
        "Passive HBAR staking APY",
        "LP yield generation",
        "Auto-compounding rewards"
      ],
      description: "A diversified index token on Hedera with built-in yield. Treasury assets are staked and deployed to liquidity pools, with rewards auto-compounded to increase LYNX value over time.",
      logo: "/lynx-logo-lg.png",
      logoAlt: "LYNX Token",
      link: "https://token.lynxify.xyz/"
    },
    {
      title: "Keyring",
      bullets: [
        "Transparent oversight",
        "Reputation systems",
        "Agentic signers",
        "Team accountability"
      ],
      description: "KeyRing combines transparent oversight, reputation systems, and agentic signers to allow early teams to create real accountability—without sacrificing speed or breaking the bank.",
      logo: "/key_ring_logo_lock_v1.svg",
      logoAlt: "Keyring",
      link: "https://keyring.lynxify.xyz/"
    },
    {
      title: "stETH.h",
      bullets: [
        "Lido stETH wrapper",
        "Hedera compatible",
        "Staking rewards",
        "Value accrual over time"
      ],
      description: "stETH.h is a wrapper on Hedera for Lido stEth. Supply is created by staking stEth to the Eth Contract thus rewards are accumulated in the vault, increasing the value of stEth.h over time.",
      logo: "/stethh_light.png",
      logoAlt: "stETH.h",
      link: "https://steth.lynxify.xyz/"
    }
  ];

  return (
    <section className="featured-projects-section" id="projects">
      <div className="container">
        <h2 className="featured-projects-title">Featured Projects</h2>
        <p className="featured-projects-subtitle">
          Our work speaks louder than words. See how we're building trust through action.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              bullets={project.bullets}
              description={project.description}
              logo={project.logo}
              logoAlt={project.logoAlt}
              link={project.link}
            />
          ))}
        </div>
        <NewsletterSignup />
      </div>
    </section>
  );
}

