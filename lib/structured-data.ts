import { siteConfig } from '@/config/site';
import { experience } from '@/content/experience';
import { skills } from '@/content/skills';

export function getStructuredData() {
  const current = experience.find((job) => !job.end);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        jobTitle: siteConfig.jobTitle,
        description: siteConfig.description,
        ...(current && {
          worksFor: { '@type': 'Organization', name: current.company },
        }),
        knowsAbout: skills.core,
        sameAs: Object.values(siteConfig.links),
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: 'en',
        publisher: { '@id': `${siteConfig.url}/#person` },
      },
    ],
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
