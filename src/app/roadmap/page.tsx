"use client";
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/roadmap.scss';

interface TimelineItem {
  date: string;
  title: string;
  description?: string;
  completed: boolean;
  highlight?: boolean;
}

const pastTimeline: TimelineItem[] = [
  {
    date: "March 2024",
    title: "Product Validation",
    description: "ETH Denver Hackathon 2nd Place Victory (AI Track)",
    completed: true,
    highlight: true
  },
  {
    date: "March – August 2024",
    title: "Built LYNX Infrastructure",
    description: "Developed core infrastructure and treasury systems",
    completed: true
  },
  {
    date: "August 2024",
    title: "LYNX Early Access Launch",
    description: "Launched with the first composition",
    completed: true
  },
  {
    date: "August 2024",
    title: "SaucerSwap LP V1",
    description: "LYNX launches on SaucerSwap LP V1",
    completed: true
  },
  {
    date: "September 2024",
    title: "Hedera Hello Future: Origins Hackathon",
    description: "3rd Place - Legacy Builders Track. Started building DAO dashboard (McDuck)",
    completed: true,
    highlight: true
  },
  {
    date: "September 2024",
    title: "HBAR Staking Integration",
    description: "LYNX adds its first staking access with HBAR",
    completed: true
  },
  {
    date: "September 2024",
    title: "Rewards System",
    description: "LYNX Rewards now feed back into LYNX's value",
    completed: true
  },
  {
    date: "October 2024",
    title: "KYRNG Launch",
    description: "Users can register as auth signers for LYNX and other projects",
    completed: true
  },
  {
    date: "October – November 2024",
    title: "KYRNG Dashboard",
    description: "Dashboard allows projects to post contracts to lists for review",
    completed: true
  },
  {
    date: "November 2024",
    title: "LP Infrastructure",
    description: "Added LP infrastructure capabilities",
    completed: true
  },
  {
    date: "December 2024",
    title: "SaucerSwap LP Expansion",
    description: "Added wBTC, USDC, HBAR to SaucerSwap LP's",
    completed: true
  },
  {
    date: "December 2024",
    title: "stETH.H Bridge",
    description: "Bridged Lido liquid staked ETH to Hedera for composition",
    completed: true
  },
  {
    date: "December 2024",
    title: "Community Bridge",
    description: "Deployed bridge for community to create their own stETH.h",
    completed: true
  },
  {
    date: "January 2025",
    title: "Agentic Signers",
    description: "Built infrastructure - 1st Prize in AI & Agents Track (Hello Future Ascension)",
    completed: true,
    highlight: true
  }
];

const futureTimeline: TimelineItem[] = [
  {
    date: "January 2025",
    title: "HBAR Agentic LYNX Minting",
    description: "Users swap HBAR for LYNX at the current mint cost, then the agent mints in the backend in daily batches replenishing the buffer account.",
    completed: false
  },
  {
    date: "February 2025",
    title: "LYNX List on KYRNG",
    description: "LYNX payment integration (USDC or HBAR) instead of KYRNG token",
    completed: false
  },
  {
    date: "February 2025",
    title: "LYNX APY Tracking",
    description: "Graph the APY of LYNX over time",
    completed: false
  },
  {
    date: "February 2025",
    title: "Performance Analytics",
    description: "Compare LYNX performance vs individual composition assets, with future outlook based on historical data",
    completed: false
  },
  {
    date: "March 2025",
    title: "DAO Controls",
    description: "Implement governance controls for the LYNX ecosystem",
    completed: false
  },
  {
    date: "March 2025",
    title: "DOVU Integration",
    description: "Add DOVU to composition with staking enabled",
    completed: false
  },
  {
    date: "April 2025",
    title: "HTC & Default LP Assets",
    description: "Support for HTC and default LP assets",
    completed: false
  },
  {
    date: "April 2025",
    title: "USDC Staking",
    description: "Add USDC staking (may require bridging another liquid token). All tokens will have staking when complete",
    completed: false
  },
  {
    date: "May 2025",
    title: "DAO Composition Controls",
    description: "Finalize DAO controls for composition between staking and LP's",
    completed: false
  },
  {
    date: "May 2025",
    title: "KYRNG Hackathon",
    description: "Host a hackathon through KYRNG platform",
    completed: false
  },
  {
    date: "June 2025",
    title: "Treasury Loans",
    description: "Enable loans through LYNX treasury",
    completed: false
  },
  {
    date: "June 2025",
    title: "Security Audits",
    description: "Complete audits on LYNX, KYRNG, and stETH.h",
    completed: false
  }
];

const stretchGoals: TimelineItem[] = [
  {
    date: "Future",
    title: "KYRNG Audit Process",
    description: "Audit contracts and run auth signer process to update contracts based on findings",
    completed: false
  },
  {
    date: "Future",
    title: "KYRNG Open Source Agents",
    description: "User-updatable agents that review contracts alongside users",
    completed: false
  },
  {
    date: "Future",
    title: "MINX/MYNX/MANX",
    description: "Meme coin versions of LYNX - faster deployment using existing LYNX contracts",
    completed: false
  },
  {
    date: "Future",
    title: "SLYNX",
    description: "Stable coin version of LYNX using existing contract infrastructure",
    completed: false
  },
  {
    date: "Future",
    title: "Liquidity-Based Rebalancing",
    description: "Advanced rebalancing based on liquidity metrics",
    completed: false
  }
];

function TimelineItem({ item, index }: { item: TimelineItem; index: number }) {
  return (
    <div 
      className={`timeline-item ${item.completed ? 'completed' : 'upcoming'} ${item.highlight ? 'highlight' : ''}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="timeline-marker">
        <div className={`marker-dot ${item.completed ? 'filled' : 'outlined'}`} />
        <div className="marker-line"></div>
      </div>
      
      <div className="timeline-content">
        <span className="timeline-date">{item.date}</span>
        <h3 className="timeline-title">
          {item.title}
          {item.highlight && <span className="timeline-badge">🏆</span>}
        </h3>
        {item.description && (
          <p className="timeline-description">{item.description}</p>
        )}
      </div>
    </div>
  );
}

export default function Roadmap() {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <section className="roadmap-hero">
          <div className="hero-bg">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
          </div>
          <div className="container">
            <h1 className="roadmap-headline">
              <span className="headline-white">Our Journey &</span>
              <span className="headline-purple">Roadmap</span>
            </h1>
            <p className="roadmap-description">
              From hackathon victory to production-ready DeFi infrastructure. 
              See how we've grown and where we're headed.
            </p>
          </div>
        </section>

        <section className="timeline-section">
          <div className="container">
            <div className="timeline-header">
              <h2 className="section-title">Completed Milestones</h2>
              <p className="section-subtitle">
                A track record of consistent delivery and recognized innovation
              </p>
            </div>
            
            <div className="timeline-container">
              {pastTimeline.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="timeline-section future">
          <div className="container">
            <div className="timeline-header">
              <h2 className="section-title">What's Next</h2>
              <p className="section-subtitle">
                Our roadmap for continued growth and ecosystem expansion
              </p>
            </div>
            
            <div className="timeline-container">
              {futureTimeline.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="timeline-section stretch">
          <div className="container">
            <div className="timeline-header">
              <h2 className="section-title">Stretch Goals</h2>
              <p className="section-subtitle">
                Long-term vision and experimental initiatives
              </p>
            </div>
            
            <div className="timeline-container">
              {stretchGoals.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
