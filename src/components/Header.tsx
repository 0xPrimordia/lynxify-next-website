"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <header>
      <div className="header-left">
        <Link href="/" className="logo-link">
          <div className="txt hero">Lynxify</div>
          <span className="slogan">Smart Trading, Smarter Gains</span>
        </Link>
      </div>
      
      <div className="mobile-menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <div className="nav-center">
          <a href="/#early-access" onClick={() => setMenuOpen(false)}>Early Access</a>
          <a href="/#roadmap" onClick={() => setMenuOpen(false)}>Roadmap</a>
          <a href="/#team" onClick={() => setMenuOpen(false)}>Team</a>
          <a href="/dao-journey" onClick={() => setMenuOpen(false)}>DAO Journey</a>
        </div>
        <a 
          href="https://token.lynxify.xyz/" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="token-link"
        >
          <img src="/favicon-32x32.png" alt="LYNX Token" width="23" height="23" />
          Token App
        </a>
      </nav>
    </header>
  );
} 