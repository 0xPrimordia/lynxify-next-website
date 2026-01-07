import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-lamp">
        <div className="lamp-light"></div>
      </div>
      <div className="container">
        <div className="footer-logo">Lynxify</div>
        
        <div className="social-links">
          <a href="https://x.com/Lynxifyxyz" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://discord.gg/GM5BfpPe2Y" target="_blank" rel="noopener noreferrer">Discord</a>
          <a href='https://warpcast.com/~/channel/lynxify' target='_blank' rel="noopener noreferrer">Warpcast</a>
        </div>
        
        <p className="copyright">© {new Date().getFullYear()} Lynxify. All rights reserved.</p>
      </div>
    </footer>
  );
} 