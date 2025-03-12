import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-logo">Lynxify</div>
        
        <div className="social-links">
          <a href="https://x.com/Lynxifyxyz" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://discord.gg/GM5BfpPe2Y" target="_blank" rel="noopener noreferrer">Discord</a>
          <a href='https://warpcast.com/~/channel/lynxify' target='_blank' rel="noopener noreferrer">Warpcast</a>
        </div>
        
        <div className="achievements">
          <span className="achievement">
            <span className="achievement-label">Backdrop Build V6 Finalist</span>
          </span>
          <span className="achievement">
            <a 
              href="https://devfolio.co/projects/hedera-agent-index-token-utilizing-dao-governance-3465" 
              target="_blank" 
              rel="noopener noreferrer"
              className="achievement-link"
            >
              <span className="achievement-label">ETHDenver 2025 Hedera Bounty 2nd Place</span>
            </a>
          </span>
        </div>
        
        <p className="copyright">© 2025 Lynxify. All rights reserved.</p>
      </div>
    </footer>
  );
} 