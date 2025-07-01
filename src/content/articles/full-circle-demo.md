---
title: "Full Circle Demo of HTS Minting with HCS DAO Voting with Agent"
date: "2025-01-28"
author: "Kevin Compton"
excerpt: "A comprehensive demonstration of the complete workflow from HTS token minting through HCS DAO voting to governance agent execution."
tags: ["HTS", "HCS", "DAO", "Agent", "Minting", "Governance", "Demo"]
---

# Full Circle Demo of HTS Minting with HCS DAO Voting with Agent

This comprehensive demo showcases the complete workflow of our governance system, from initial token minting using Hedera Token Service (HTS) through decentralized voting with Hedera Consensus Service (HCS) to final execution by our governance agent.

## Lynx Minting with HTS

The first step in our governance ecosystem involves minting LYNX tokens using Hedera Token Service. This process establishes the foundational assets that power our DAO governance system.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/57hv88iUdFc" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

*Video demonstration of LYNX token minting process using Hedera Token Service.*

The minting process demonstrates how we leverage HTS's native capabilities to mint tokens by depositing the required composition tokens in the cntract's treasury. The appropriate amount of Lynx is then sent to the minting user based on the ratio calculation.

## Lynx DAO Voting with HCS

Once tokens are minted and distributed, community members can participate in governance through our HCS-powered voting system. This section demonstrates how consensus is achieved through our decentralized voting mechanism.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/H431A8m7sWk" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

*Interactive demonstration of the DAO voting process using Hedera Consensus Service.*

Our voting system utilizes HCS's immutable consensus mechanism to ensure transparent and verifiable decision-making. The demo shows how community members can submit votes to the governance agent's topic leveraging the Standards SDK.

## Governance Agent Execution

The final piece of our governance workflow demonstrated how the agent determines quorum and given the threshold is hit will execute the contracts adjust ratio function to change the minting requirements.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/KQjfwGKwcyY" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

*Live demonstration of governance agent executing community-approved decisions.*

The governance agent serves as the bridge between democratic consensus and practical execution, automatically implementing approved proposals while maintaining full transparency and auditability throughout the process.

## The Complete Workflow

This full circle demonstration illustrates how our integrated approach creates a seamless governance experience:

1. **Token Foundation**: HTS minting establishes the economic basis for governance participation
2. **Democratic Process**: HCS voting ensures transparent and immutable consensus formation
3. **Automated Execution**: Governance agents transform decisions into actions without human intervention

This end-to-end workflow represents a new paradigm in decentralized governance, where community decisions are not just recorded but automatically implemented, creating a truly autonomous organization powered by Hedera's robust infrastructure.

## Resources

### Live Demo
- **LYNX DAO Dashboard (Staging)**: [https://lynx-khaki-eight.vercel.app/](https://lynx-khaki-eight.vercel.app/)  
  *Interactive staging environment for minting and burning LYNX tokens on the Hedera network*

### Source Code
- **DAO Dashboard Repository**: [https://github.com/0xPrimordia/lynx](https://github.com/0xPrimordia/lynx)  
  *Frontend interface for the LYNX DAO governance and token management system*

- **Agents Container Repository**: [https://github.com/0xPrimordia/LynxAgent](https://github.com/0xPrimordia/LynxAgent)  
  *Backend agents handling governance, rebalancing, and sentinel operations for the LYNX ecosystem* 