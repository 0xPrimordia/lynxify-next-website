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
    date: "Q1 2025",
    title: "DAO Dashboard Development",
    description: "Frontend implementation and governance contract development",
    completed: false
  },
  {
    date: "Q2 2025",
    title: "HCS Agents & AI Development",
    description: "Governance agents, rebalancing systems, and AI-powered monitoring",
    completed: false
  },
  {
    date: "Q3 2025",
    title: "Testing & Refinement",
    description: "Community beta testing, security audits, UI/UX improvements",
    completed: false
  },
  {
    date: "Q4 2025",
    title: "Full Launch",
    description: "Token governance activation and community onboarding",
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
      </main>
      
      <Footer />
    </div>
  );
}
