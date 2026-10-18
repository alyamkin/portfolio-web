import type { StaticImageData } from 'next/image';

export type ProjectStatus = 'completed' | 'inProgress';

export type ProjectLinks = {
  demo?: string;
  github?: string;
  figma?: string;
};

export type ProjectImage = {
  src: StaticImageData;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  image?: ProjectImage;
  status: ProjectStatus;
  /** ISO date (`YYYY` or `YYYY-MM`) shown on the card. */
  date: string;
  categories: string[];
  stack: string[];
  links: ProjectLinks;
};

export type Experience = {
  role: string;
  company: string;
  /** ISO month, e.g. `2021-08`. */
  start: string;
  /** ISO month, or `undefined` for a current role. */
  end?: string;
};

export type Skills = {
  core: string[];
  other: string[];
};
