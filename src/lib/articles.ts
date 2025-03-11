import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import rehypeRaw from 'rehype-raw';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

const articlesDirectory = path.join(process.cwd(), 'src/content/articles');

export type Article = {
  slug: string;
  title: string;
  date: string;
  author?: string;
  excerpt: string;
  content: string;
  tags?: string[];
  shareImage?: string;
};

export async function getAllArticles(): Promise<Article[]> {
  // Check if directory exists
  if (!fs.existsSync(articlesDirectory)) {
    console.warn(`Articles directory not found: ${articlesDirectory}`);
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = await Promise.all(
    fileNames.map(async (fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');
      
      // Read markdown file as string
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);
      
      // Use remark to convert markdown into HTML string
      // Use rehype-raw to preserve HTML elements like video tags
      const processedContent = await remark()
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeStringify)
        .process(matterResult.content);
      
      const content = processedContent.toString();
      
      // Combine the data with the slug
      return {
        slug,
        content,
        title: matterResult.data.title,
        date: matterResult.data.date,
        author: matterResult.data.author,
        excerpt: matterResult.data.excerpt,
        tags: matterResult.data.tags || [],
        shareImage: matterResult.data.shareImage,
      };
    })
  );
  
  // Sort articles by date
  return allArticlesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    
    // Use remark to convert markdown into HTML string
    // Use rehype-raw to preserve HTML elements like video tags
    const processedContent = await remark()
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeStringify)
      .process(matterResult.content);
    
    const content = processedContent.toString();
    
    // Combine the data with the slug
    return {
      slug,
      content,
      title: matterResult.data.title,
      date: matterResult.data.date,
      author: matterResult.data.author,
      excerpt: matterResult.data.excerpt,
      tags: matterResult.data.tags || [],
      shareImage: matterResult.data.shareImage,
    };
  } catch (error) {
    return null;
  }
} 