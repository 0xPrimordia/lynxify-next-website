"use client";
import React from 'react';
import { GlowingEffect } from './ui/glowing-effect';

interface TeamMemberCardProps {
  name: string;
  title: string;
  bio: string;
  image: string;
  imageStyle?: React.CSSProperties;
}

function TeamMemberCard({ name, title, bio, image, imageStyle }: TeamMemberCardProps) {
  return (
    <div className="relative rounded-2xl border border-white/30 bg-black/50 p-8 h-full shadow-[inset_0_0_0_10px_rgba(15,15,15,1)] flex flex-col">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className="relative z-10 flex flex-col items-center text-center">
        <div 
          className="team-member-image" 
          style={{ 
            backgroundImage: `url(${image})`,
            ...imageStyle
          }}
        ></div>
        <h3 className="team-member-name">{name}</h3>
        <span className="team-member-title">{title}</span>
        <p className="team-member-bio">{bio}</p>
      </div>
    </div>
  );
}

export default function Team() {
  const teamMembers = [
    {
      name: "Jason Cox",
      title: "Founder & CEO",
      bio: "Visionary leader with deep expertise in blockchain technology and decentralized systems. Passionate about building trustworthy solutions that empower users.",
      image: "/jason.png"
    },
    {
      name: "Kevin Compton",
      title: "Founder & CTO",
      bio: "Full-stack engineer and architect with 15+ years of experience. Specializes in building scalable, secure applications across Web2 and Web3.",
      image: "/kevin.jpg",
      imageStyle: {
        backgroundPosition: 'center 15%',
        backgroundSize: '160%'
      }
    }
  ];

  return (
    <section className="team-section" id="team">
      <div className="container">
        <h2 className="team-title">Meet the Team</h2>
        <p className="team-subtitle">
          Experienced builders with a passion for creating trustworthy, innovative solutions.
        </p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              title={member.title}
              bio={member.bio}
              image={member.image}
              imageStyle={member.imageStyle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

