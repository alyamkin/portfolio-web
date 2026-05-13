import { ProjectCard } from './types';

const projects: ProjectCard[] = [
  {
    key: 'budgetApp',
    image: '/images/project-placeholder.png',
    title: 'Budget App',
    description:
      'Budget management app for tracking income, expenses, and savings with recommendations',
    tags: [
      { label: 'Full Stack', variant: 'accent' },
      { label: 'Next.js', variant: 'general' },
      { label: 'Postgres', variant: 'general' },
      { label: 'Typescript', variant: 'general' },
      { label: 'Claude Code', variant: 'accent' },
      { label: 'React', variant: 'general' },
      { label: 'Tailwind CSS', variant: 'general' },
    ],
    demo: '',
    github: '',
    figma: '',
    year: '2026',
    status: {
      id: 'inProgress',
      label: 'In Progress',
    },
  },
  {
    key: 'portfolioWebsite',
    image: '/images/project-portfolio-web.png',
    title: 'Portfolio Website',
    description:
      'Personal portfolio website showcasing my projects, skills, and experience',
    tags: [
      { label: 'Frontend', variant: 'general' },
      { label: 'Next.js', variant: 'accent' },
      { label: 'Typescript', variant: 'general' },
      { label: 'Claude Code', variant: 'accent' },
      { label: 'React', variant: 'general' },
      { label: 'Tailwind CSS', variant: 'general' },
    ],
    demo: 'https://www.alyamkin.ca',
    github: 'https://github.com/alyamkin/portfolio-web',
    figma:
      'https://www.figma.com/design/b8wNE9hvkq7i6QU8rX9DZ5/Portfolio-website-Andrey-Lyamkin?node-id=5-3&t=NpYnpxEJuVnJGrYz-1',
    year: '2026',
    status: {
      id: 'completed',
      label: 'Completed',
    },
  },
];

export default projects;
