import claudeChatbotImage from '@/assets/images/projects/claude-chatbot.webp';
import superSimpleBudgetImage from '@/assets/images/projects/super-simple-budget.webp';
import type { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'super-simple-budget',
    title: 'Super Simple Budget',
    description:
      'Private, bilingual monthly budget planner. Tap what you pay for, enter amounts at any frequency, and compare your plan with usual Canadian spending ranges. No sign-up, and data never leaves the browser.',
    image: {
      src: superSimpleBudgetImage,
      alt: 'Super Simple Budget: the results page showing the money left each month, where the income goes, the biggest expenses, and the plan summary',
    },
    status: 'completed',
    date: '2026-10',
    categories: ['Frontend'],
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'Recharts',
      'Jest',
    ],
    links: {
      demo: 'https://super-simple-budget.vercel.app/',
      github: 'https://github.com/alyamkin/super-simple-budget',
    },
  },
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
    slug: 'battleship',
    title: 'Battleship',
    description:
      'Real-time two-player Battleship. Create a private room, share the link, place your fleet, and play with no account. A server-authoritative game engine keeps every move fair.',
    status: 'inProgress',
    date: '2026',
    categories: ['Full stack'],
    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'Socket.IO',
      'Zustand',
      'Tailwind CSS',
    ],
    links: {},
  },
];
