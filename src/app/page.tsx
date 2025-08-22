import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/home.scss';

export default function Home() {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <section className="hero-section" id="features">
          <div className="container">
            <div className="hero-section-copy">
              <h2>LYNX Token is Now Live</h2>
              <p>Mint LYNX tokens by depositing a diversified basket of premium Hedera assets. Gain exposure to HBAR, WBTC, SAUCE, USDC, HBARX, WETH, and XSAUCE with a single token.</p>
              
              <div className="features-grid">
                <div className="feature-column">
                  <h3>Diversified Portfolio</h3>
                  <ul>
                    <li>7 Premium Hedera Assets</li>
                    <li>Algorithmic Balanced Ratios</li>
                    <li>Instant Mint & Burn</li>
                    <li>Transparent On-Chain</li>
                  </ul>
                </div>
                
                <div className="feature-column">
                  <h3>DAO Features</h3>
                  <ul>
                    <li>Governance Voting Rights</li>
                    <li>Staking Rewards</li>
                    <li>Treasury Management</li>
                    <li>Community Driven</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="hero-video">
              <video autoPlay loop muted playsInline>
                <source src="/minting-demo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
        
        <div className="section-separator"></div>
        
        <section id="early-access" className="early-access-section">
          <div className="container">
            <h2>Join the DAO Waitlist</h2>
            <p>Connect or Create your wallet and opt-in to become a member of the LYNX DAO. Participate in governance, earn rewards, and help shape the future of decentralized trading.</p>
            
            <div className="cta-button-container">
              <div className="button-group">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdQvHpKSZ_2wMrDBKtUtJ-uAVIuuazE5Pu_r0SinmvasWXbng/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="primary-btn"
                >
                  Join Waitlist
                </a>
                <a 
                  href="/dao-journey" 
                  className="secondary-btn"
                >
                  More Info
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <div className="section-separator"></div>
        
        <section id="roadmap" className="roadmap-section">
          <div className="container">
            <h2>Roadmap</h2>
            <div className="roadmap-timeline">
              <div className="roadmap-item">
                <div className="roadmap-date">Q3 2025</div>
                <div className="roadmap-content">
                  <h3>Token Launch</h3>
                  <p>LYNX token release and minting platform</p>
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-date">Q4 2025</div>
                <div className="roadmap-content">
                  <h3>Enhanced Features</h3>
                  <ul>
                    <li>Minting Agent - mint lynx with only HBAR</li>
                    <li>DAO staking and voting</li>
                    <li>DAO Ready Contract</li>
                  </ul>
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-date">Q1 2026</div>
                <div className="roadmap-content">
                  <h3>Yield & Staking</h3>
                  <p>Index treasury Yield Farm rewards and LP staking</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="section-separator"></div>
        
        <section id="team" className="team-section">
          <div className="container">
            <h2>Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="team-member-photo" style={{ backgroundImage: 'url(/jason.png)' }}></div>
                <h3>Jason Cox</h3>
                <p>Founder & CEO</p>
              </div>
              <div className="team-member">
                <div className="team-member-photo" style={{ 
                  backgroundImage: 'url(/kevin.jpg)',
                  backgroundPosition: 'center 0',
                  backgroundSize: '160%' 
                }}></div>
                <h3>Kevin Compton</h3>
                <p>Founder & CTO</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 