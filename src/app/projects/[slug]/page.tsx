import { notFound } from 'next/navigation'
import { CustomMDX } from '@/app/components/mdx'
import { formatDate, getProjectPosts } from '@/app/projects/utils';
import { baseUrl } from '@/app/sitemap';

import "@/app/styles/pages/Project.scss";

export async function generateStaticParams() {
  let posts = getProjectPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  const post = getProjectPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return
  } else {
    return {
      title: `${post.metadata.title} | Sam Roberts`,
      description: post.metadata.summary,
      openGraph: {
        title: `${post.metadata.title} | Sam Roberts`,
        description: post.metadata.summary,
        type: 'article',
        url: `${baseUrl}/blog/${post.slug}`,
        images: [
          {
            url: `${baseUrl}${post.metadata.image}`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${post.metadata.title} | Sam Roberts`,
        description: post.metadata.summary,
        images: `${baseUrl}${post.metadata.image}`,
      },
    }
  }
}

export default function Blog({ params }) {
  let post = getProjectPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className='Project page'>
      <div className='container'>
        <h1 className="title font-semibold text-2xl tracking-tighter">
          {post.metadata.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </div>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </div>
      {/* <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      /> */}
    </div>
  )
}