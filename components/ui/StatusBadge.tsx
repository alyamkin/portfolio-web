import { cva } from 'class-variance-authority';

import type { ProjectStatus } from '@/content/types';

const statusStyles = cva(
  'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-medium before:size-1.5 before:rounded-full before:bg-current',
  {
    variants: {
      status: {
        completed: 'bg-accent-soft text-accent',
        inProgress: 'bg-amber-soft text-amber',
      },
    },
  },
);

const labels: Record<ProjectStatus, string> = {
  completed: 'Completed',
  inProgress: 'In progress',
};

const StatusBadge = ({ status }: { status: ProjectStatus }) => (
  <span className={statusStyles({ status })}>{labels[status]}</span>
);

export default StatusBadge;
