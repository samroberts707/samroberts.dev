import { notFound } from 'next/navigation'
import { CustomMDX } from '@/app/components/mdx'
import { formatDate, getProjectPosts } from '@/app/projects/utils';
import { baseUrl } from '@/app/sitemap';
import { Metadata } from 'next';
import Image from 'next/image';

import "@/app/styles/pages/Project.scss";

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  const posts = getProjectPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata( { params }: { params: Params }) {
  const { slug } = await params
  const post = getProjectPosts().find((post) => post.slug === slug);
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
        url: `${baseUrl}/projects/${post.slug}`,
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

export default async function Project( { params }: { params: Params } ) {
  const { slug } = await params
  const post = getProjectPosts().find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className='Project page'>
      <div className='container'>
        <div className='split'>
          <div className='summary'>
            <div className='image-wrapper'>
              <Image className='project-image' src={post.metadata.image} alt={post.metadata.title} width={300} height={300} />
            </div>
            <h1>{post.metadata.title}</h1>
            <h5 className='type'>{post.metadata.type}</h5>
          </div>
          <div className="content">
            <CustomMDX source={post.content} />
          </div>
        </div>
        
      </div>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CaseStudy',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/projects/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Sam Roberts',
            },
          }),
        }}
      />
    </div>
  )
}