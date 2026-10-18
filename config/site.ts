export const siteConfig = {
  name: 'Andrey Lyamkin',
  jobTitle: 'Software Developer',
  url: 'https://www.alyamkin.ca',
  title: 'Andrey Lyamkin | Software Developer',
  description:
    'Andrey Lyamkin is a software developer who builds fast, accessible web applications with React, Next.js and TypeScript, and ships faster with AI-assisted development.',
  keywords: [
    'Andrey Lyamkin',
    'Software Developer',
    'Frontend Developer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'React Native',
    'AI-assisted development',
    'Claude API',
  ],
  locale: 'en_CA',
  links: {
    linkedin: 'https://www.linkedin.com/in/andreylyamkin/',
    github: 'https://github.com/alyamkin',
  },
} as const;

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
] as const;
