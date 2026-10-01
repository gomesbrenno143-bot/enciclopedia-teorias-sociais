import { MetadataRoute } from 'next'
import { articles, categories, authors } from '@/data/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://teorias-curiosidades.vercel.app'

  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/artigos/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
  }))

  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/categorias/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
  }))

  const authorUrls = authors.map((author) => ({
    url: `${baseUrl}/autores/${author.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/glossario`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
    },
    ...articleUrls,
    ...categoryUrls,
    ...authorUrls,
  ]
}
