import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedProjects from '@/components/FeaturedProjects';
import Achievements from '@/components/Achievements';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import '@/styles/home.scss';

export default function Home() {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <section className="hero-section" id="hero">
          <div className="hero-bg">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>
            <div className="blob blob-4"></div>
          </div>
          <div className="container">
            <h1 className="hero-headline">
              <span className="hero-headline-white">Intuitive Innovation</span>
              <span className="hero-headline-purple">You Can Trust</span>
            </h1>
            <p className="hero-description">
              We're building the decentralized future with verifiable solutions. No more permission loop holes or black boxes. Just delivery.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-gradient">Contact Us</a>
              <a href="#work" className="btn-outline">View Our Work</a>
            </div>
          </div>
        </section>
        
        <FeaturedProjects />
        
        <Achievements />
        
        <Services />
        
        <Team />
        
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
} 