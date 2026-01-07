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
        </Link>
      </div>
      
      <div className="mobile-menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <div className="nav-center">
          <a href="/#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="/#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="/#team" onClick={() => setMenuOpen(false)}>Team</a>
        </div>
        <a 
          href="/#contact"
          onClick={() => setMenuOpen(false)}
          className="btn-gradient contact-btn"
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
} 