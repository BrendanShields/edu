import { MetadataRoute } from 'next';
import { getAllParams } from '@/lib/lessons';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://education.example.com';

  const lessonEntries = getAllParams().map(({ module, slug }) => ({
    url: `${baseUrl}/${module}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    ...lessonEntries,
  ];
}
