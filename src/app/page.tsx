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
              <h2>Smart Trading for Everyone</h2>
              <p>Unlock the power of automated trading with Lynxify's advanced DEX. Set your strategies, trade effortlessly, and maximize your crypto potential.</p>
              
              <div className="features-grid">
                <div className="feature-column">
                  <h3>Smart Trading Tools</h3>
                  <ul>
                    <li>In-Dapp Wallet</li>
                    <li>Automated Stop-Loss & Take-Profit</li>
                    <li>Limit Orders at Your Price</li>
                    <li>Real-Time Price Alerts</li>
                  </ul>
                </div>
                
                <div className="feature-column">
                  <h3>Coming Soon</h3>
                  <ul>
                    <li>LYNX Tokenized Index</li>
                    <li>LYNX DAO Governance Staking</li>
                    <li>Multi-Hop Swaps</li>
                    <li>Cross-Chain Porting</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="hero-video">
              <video autoPlay loop muted playsInline>
                <source src="/demo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
        
        <div className="section-separator"></div>
        
        <section id="early-access" className="early-access-section">
          <div className="container">
            <h2>Join the LYNX DAO</h2>
            <p>Connect or Create your wallet and opt-in to become a member of the LYNX DAO. Participate in governance, earn rewards, and help shape the future of decentralized trading.</p>
            
            <div className="cta-button-container">
              <div className="button-group">
                <a 
                  href="https://app.lynxify.xyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="primary-btn"
                >
                  Launch App
                </a>
                <a 
                  href="/dao-journey" 
                  className="secondary-btn"
                >
                  More Info
                </a>
              </div>
              <p className="cta-note">No wallet? No problem. Create a free wallet when you sign up.</p>
            </div>
          </div>
        </section>
        
        <div className="section-separator"></div>
        
        <section id="token" className="token-section">
          <div className="container">
            <h2>Coming Soon: LYNX Token</h2>
            <p className="section-intro">The index token powering the Lynxify ecosystem</p>
            
            <div className="token-details">
              <div className="token-detail">
                <h3>Staking Governance</h3>
                <p>Vote on composition, treasury allocations and earn rewards</p>
              </div>
              <div className="token-detail">
                <h3>Divirsified Exposure</h3>
                <p>Cover Hedera with one token in your portfolio</p>
              </div>
              <div className="token-detail">
                <h3>Fee Discounts</h3>
                <p>Reduced trading fees for LYNX DAO Members</p>
              </div>
              <div className="token-detail">
                <h3>Early Access</h3>
                <p>Be first in line for minting and future updates</p>
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
                <div className="roadmap-date">Q3 2024</div>
                <div className="roadmap-content">
                  <h3>Platform Launch</h3>
                  <p>Initial DEX release with core trading features</p>
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-date">Q4 2024</div>
                <div className="roadmap-content">
                  <h3>Advanced Features</h3>
                  <p>Stop-loss, take-profit, and limit orders</p>
                </div>
              </div>
              <div className="roadmap-item incomplete">
                <div className="roadmap-date">Q1 2025</div>
                <div className="roadmap-content">
                  <h3>DAO Formation</h3>
                  <p>Onboarding for community governance</p>
                </div>
              </div>
              <div className="roadmap-item incomplete">
                <div className="roadmap-date">Q2 2025</div>
                <div className="roadmap-content">
                  <h3>Testing and Refinement</h3>
                  <p>Community beta testing, security audits, UI/UX improvements</p>
                </div>
              </div>
              <div className="roadmap-item incomplete">
                <div className="roadmap-date">Q3 2025</div>
                <div className="roadmap-content">
                  <h3>Token Launch</h3>
                  <p>LYNX token release and staking program</p>
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