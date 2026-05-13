import { TagVariant } from '@/components/ui/tags/variants';

export type SkillTag = {
  label: string;
  variant: TagVariant;
};

export type SkillGroup = {
  key: string;
  label: string;
  items: SkillTag[];
};
