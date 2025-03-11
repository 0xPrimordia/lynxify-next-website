import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllArticles } from '@/lib/articles';
import Link from 'next/link';
import '@/styles/dao-journey.scss';

export default async function DAOJourney() {
  const articles = await getAllArticles();
  
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <div className="dao-journey-header">
          <h1>DAO Journey</h1>
          <p className="intro">Follow our journey as we develop the DAO dashboard for the LYNX token. Here we document our process, challenges, and decisions to provide transparency for our community.</p>
        </div>
        
        <div className="dao-journey-content">
          <aside className="dao-roadmap">
            <h2>DAO Roadmap</h2>
            <div className="roadmap-timeline">
              <div className="roadmap-item completed">
                <div className="roadmap-date">Q3 2024</div>
                <div className="roadmap-milestone">
                  <h3>Research & Planning</h3>
                  <p>Governance model research, community surveys, technical architecture planning</p>
                </div>
              </div>
              
              <div className="roadmap-item completed">
                <div className="roadmap-date">Q4 2024</div>
                <div className="roadmap-milestone">
                  <h3>Design & Prototyping</h3>
                  <p>UI/UX design, smart contract development, community feedback sessions</p>
                </div>
              </div>
              
              <div className="roadmap-item active">
                <div className="roadmap-date">Q1 2025</div>
                <div className="roadmap-milestone">
                  <h3>Development</h3>
                  <p>Frontend implementation, smart contract audits, testnet deployment</p>
                </div>
              </div>
              
              <div className="roadmap-item">
                <div className="roadmap-date">Q2 2025</div>
                <div className="roadmap-milestone">
                  <h3>Testing & Refinement</h3>
                  <p>Community beta testing, security audits, UI/UX improvements</p>
                </div>
              </div>
              
              <div className="roadmap-item">
                <div className="roadmap-date">Q3 2025</div>
                <div className="roadmap-milestone">
                  <h3>Launch</h3>
                  <p>Mainnet deployment, governance activation, community onboarding</p>
                </div>
              </div>
            </div>
          </aside>
          
          <div className="dao-journey-section">
            <div className="articles-container">
              {articles.length > 0 ? (
                articles.map((article) => (
                  <article key={article.slug} className="dao-article">
                    <h2>
                      <Link href={`/dao-journey/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>
                    <div className="article-meta">
                      <span className="article-date">{article.date}</span>
                      {article.author && (
                        <span className="article-author">by {article.author}</span>
                      )}
                    </div>
                    {article.tags && article.tags.length > 0 && (
                      <div className="article-tags">
                        {article.tags.map((tag) => (
                          <span key={tag} className="article-tag">{tag}</span>
                        ))}
                      </div>
                    )}
                    <p className="article-excerpt">{article.excerpt}</p>
                    <Link href={`/dao-journey/${article.slug}`} className="read-more">
                      Read More →
                    </Link>
                  </article>
                ))
              ) : (
                <div className="loading">Loading articles...</div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 