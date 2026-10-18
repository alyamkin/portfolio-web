import claudeChatbotImage from '@/assets/images/projects/claude-chatbot.webp';
import type { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'play-with-claude-chatbot',
    title: 'Play with Claude Chatbot',
    description:
      'Multi-turn chat app built on the Claude API, with image input, per-message model settings, and a history panel showing token usage and raw API responses.',
    image: {
      src: claudeChatbotImage,
      alt: 'Play with Claude Chatbot: the message settings sidebar next to a conversation with Claude, including an image question, and the message input',
    },
    status: 'completed',
    date: '2026-10',
    categories: ['Full stack', 'AI'],
    stack: ['React', 'TypeScript', 'Express', 'Claude API', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/alyamkin/play-with-claude-chatbot',
    },
  },
  {
    slug: 'budget-app',
    title: 'Budget App',
    description:
      'Budget manager for tracking income, expenses, and savings. It reviews your spending and suggests where to adjust.',
    status: 'inProgress',
    date: '2026',
    categories: ['Full stack'],
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Postgres',
      'Tailwind CSS',
      'Claude Code',
    ],
    links: {},
  },
];
