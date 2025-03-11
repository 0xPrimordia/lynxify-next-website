import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllArticles, getArticleBySlug } from '@/lib/articles';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import '@/styles/dao-journey.scss';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateStaticParams() {
  const articles = await getAllArticles();
  
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Fetch article data
  const article = await getArticleBySlug(params.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }
  
  // Use article-specific image if available, otherwise fall back to default
  const imageUrl = article.shareImage 
    ? `/articles/${article.slug}/${article.shareImage}` 
    : '/share.jpg';
  
  return {
    title: article.title,
    description: article.excerpt || article.title,
    openGraph: {
      title: article.title,
      description: article.excerpt || article.title,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt || article.title,
      images: [imageUrl],
    },
  };
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);
  
  if (!article) {
    notFound();
  }
  
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <div className="article-container">
          <Link href="/dao-journey" className="back-link">
            ← Back to DAO Journey
          </Link>
          
          <article className="dao-article-full">
            <h1>{article.title}</h1>
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
            
            {article.excerpt && (
              <div className="article-excerpt-block">
                {article.excerpt}
              </div>
            )}
            
            <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 