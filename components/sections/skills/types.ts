import { TagVariant } from '@/components/ui/Tag';

export type SkillTag = {
  label: string;
  variant: TagVariant;
};

export type SkillGroup = {
  key: string;
  label: string;
  items: SkillTag[];
};
