import { SkillGroup } from './types';

const skills: SkillGroup[] = [
  {
    key: 'techStack',
    label: 'Tech Stack',
    items: [
      { label: 'React', variant: 'accent' },
      { label: 'Next.js', variant: 'accent' },
      { label: 'TypeScript', variant: 'general' },
      { label: 'JavaScript', variant: 'general' },
      { label: 'Redux', variant: 'accent' },
      { label: 'AngularJS', variant: 'general' },
      { label: 'HTML', variant: 'general' },
      { label: 'CSS', variant: 'general' },
      { label: 'Tailwind CSS', variant: 'general' },
      { label: 'MUI', variant: 'general' },
      { label: 'MySQL', variant: 'general' },
    ],
  },
  {
    key: 'tooling',
    label: 'Tooling',
    items: [
      { label: 'Git', variant: 'general' },
      { label: 'GitHub', variant: 'general' },
      { label: 'Claude Code', variant: 'accent' },
      { label: 'Codex', variant: 'accent' },
      { label: 'Figma', variant: 'general' },
      { label: 'Docker', variant: 'general' },
      { label: 'Jira', variant: 'general' },
      { label: 'ESLint', variant: 'general' },
      { label: 'Vite', variant: 'general' },
      { label: 'pnpm', variant: 'general' },
    ],
  },
];

export default skills;
