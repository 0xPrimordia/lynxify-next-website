"use client";
import React from 'react';
import { GlowingEffect } from './ui/glowing-effect';

interface AchievementCardProps {
  title: string;
  logo: string;
  logoAlt: string;
  placement: string;
}

function AchievementCard({ title, logo, logoAlt, placement }: AchievementCardProps) {
  return (
    <div className="relative rounded-2xl border border-white/30 bg-black/50 p-6 h-full shadow-[inset_0_0_0_10px_rgba(15,15,15,1)] flex flex-col">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className="relative z-10 flex flex-col flex-1">
        <img src={logo} alt={logoAlt} className="achievement-card-logo" />
        <h4 className="achievement-card-title">{title}</h4>
        <span className="achievement-card-placement">{placement}</span>
      </div>
    </div>
  );
}

export default function Achievements() {
  const achievements = [
    
    {
       title: "Hello Future Ascension Hackathon",
       logo: "/hashgraph.png",
       logoAlt: "Hedera Hashgraph",
       placement: "1st Place - AI & Agents"
    },
    {
      title: "Hello Future Origins Hackathon",
      logo: "/hashgraph.png",
      logoAlt: "Hedera Hashgraph",
      placement: "3rd Place - Legacy Builders"
    },
    {
      title: "ETHDenver 2025",
      logo: "/ethdenver.png",
      logoAlt: "ETHDenver",
      placement: "2nd Place - AI & Agents"
    },
    {
      title: "Backdrop Build V6",
      logo: "/backdrop.png",
      logoAlt: "Backdrop Build",
      placement: "Finalist"
    }
  ];

  return (
    <section className="achievements-section">
      <div className="container">
        <h3 className="achievements-title">Proven Excellence</h3>
        <p className="achievements-subtitle">
          Recognized for pushing boundaries and delivering exceptional solutions.
        </p>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              title={achievement.title}
              logo={achievement.logo}
              logoAlt={achievement.logoAlt}
              placement={achievement.placement}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

