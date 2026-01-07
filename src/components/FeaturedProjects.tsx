"use client";
import React from 'react';
import { GlowingEffect } from './ui/glowing-effect';

interface ProjectCardProps {
  title: string;
  description: string;
  bullets: string[];
  logo: string;
  logoAlt: string;
  link: string;
}

function ProjectCard({ title, description, bullets, logo, logoAlt, link }: ProjectCardProps) {
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
      <div className="relative z-10 flex flex-col flex-1">
        <img src={logo} alt={logoAlt} className="project-card-logo" />
        <h3 className="project-card-title">{title}</h3>
        <ul className="project-card-bullets">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
        <p className="project-card-description">{description}</p>
        <div className="mt-auto pt-6">
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn-gradient">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const projects = [
    {
      title: "LYNX Token",
      bullets: [
        "Diversified token basket",
        "Hedera mainnet native",
        "ETF-like exposure",
        "Multiple underlying assets"
      ],
      description: "A diversified token basket on Hedera mainnet that provides you exposure to multiple underlying assets, like an ETF for Hedera-compatible tokens.",
      logo: "/lynx-logo-lg.png",
      logoAlt: "LYNX Token",
      link: "https://token.lynxify.xyz/"
    },
    {
      title: "Keyring",
      bullets: [
        "Transparent oversight",
        "Reputation systems",
        "Agentic signers",
        "Team accountability"
      ],
      description: "KeyRing combines transparent oversight, reputation systems, and agentic signers to allow early teams to create real accountability—without sacrificing speed or breaking the bank.",
      logo: "/key_ring_logo_lock_v1.svg",
      logoAlt: "Keyring",
      link: "https://keyring.lynxify.xyz/"
    },
    {
      title: "stETH.h",
      bullets: [
        "Lido stETH wrapper",
        "Hedera compatible",
        "Staking rewards",
        "Value accrual over time"
      ],
      description: "stETH.h is a wrapper on Hedera for Lido stEth. Supply is created by staking stEth to the Eth Contract thus rewards are accumulated in the vault, increasing the value of stEth.h over time.",
      logo: "/stethh_light.png",
      logoAlt: "stETH.h",
      link: "https://steth.lynxify.xyz/"
    }
  ];

  return (
    <section className="featured-projects-section" id="projects">
      <div className="container">
        <h2 className="featured-projects-title">Featured Projects</h2>
        <p className="featured-projects-subtitle">
          Our work speaks louder than words. See how we're building trust through action.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              bullets={project.bullets}
              description={project.description}
              logo={project.logo}
              logoAlt={project.logoAlt}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

