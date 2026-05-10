import { TagVariant } from '@/components/ui/Tag';

export type ProjectTag = {
  label: string;
  variant: TagVariant;
};

export type ProjectStatus = {
  id: 'inProgress' | 'completed';
  label: string;
};

export type ProjectCard = {
  key: string;
  image: string;
  title: string;
  description: string;
  tags: ProjectTag[];
  demo?: string;
  github?: string;
  figma?: string;
  status: ProjectStatus;
  year: '2026';
};
