import { getProjectPosts } from '@/app/projects/utils';

export const baseUrl = 'https://samroberts.dev'

export default async function sitemap() {
  let blogs = getProjectPosts().map((post) => ({
    url: `${baseUrl}/projects/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/projects'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
