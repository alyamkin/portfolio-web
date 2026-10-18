import Image from 'next/image';
import { FiArrowUpRight, FiClock } from 'react-icons/fi';

import placeholderImage from '@/assets/images/project-placeholder.webp';
import ButtonLink from '@/components/ui/ButtonLink';
import StatusBadge from '@/components/ui/StatusBadge';
import type { Project, ProjectImage } from '@/content/types';
import { formatIsoDate } from '@/lib/date';

const ProjectLinks = ({ title, links }: Pick<Project, 'title' | 'links'>) => {
  const { demo, github, figma } = links;

  if (!demo && !github && !figma) {
    return (
      <p className="flex items-center gap-2 text-[0.9rem] text-muted">
        <FiClock aria-hidden="true" className="size-4" />
        Demo and source coming soon
      </p>
    );
  }

  const items = [
    demo && { href: demo, label: 'Live demo' },
    github && { href: github, label: 'View code' },
    figma && { href: figma, label: 'Figma' },
  ].filter((item) => !!item);

  return (
    <div className="flex flex-wrap gap-2">
      {items.map(({ href, label }, index) => (
        <ButtonLink
          key={href}
          href={href}
          size="sm"
          variant={index === 0 ? 'primary' : 'secondary'}
        >
          {label}
          <span className="sr-only"> for {title}</span>
          {index === 0 && (
            <FiArrowUpRight aria-hidden="true" className="size-4" />
          )}
        </ButtonLink>
      ))}
    </div>
  );
};

const placeholder: ProjectImage = {
  src: placeholderImage,
  alt: 'Illustration of a developer at a desk. Screenshot coming soon.',
};

const ProjectCard = ({ project }: { project: Project }) => {
  const {
    title,
    description,
    image = placeholder,
    status,
    date,
    categories,
    stack,
    links,
  } = project;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
      <Image
        src={image.src}
        alt={image.alt}
        sizes="(min-width: 1216px) 422px, (min-width: 1024px) calc((100vw - 372px) / 2), (min-width: 768px) calc((100vw - 76px) / 2), 100vw"
        quality={95}
        placeholder="blur"
        className="aspect-7/5 w-full border-b border-line object-cover"
      />

      <div className="flex flex-1 flex-col gap-3.5 p-5 md:p-6">
        <dl className="flex flex-wrap items-center gap-2.5 font-mono text-[0.8rem] text-muted tabular-nums">
          <dt className="sr-only">Status</dt>
          <dd>
            <StatusBadge status={status} />
          </dd>
          <dt className="sr-only">Date</dt>
          <dd>
            <time dateTime={date}>{formatIsoDate(date)}</time>
          </dd>
          <dt className="sr-only">Type</dt>
          <dd className="flex flex-wrap gap-2.5">
            {categories.map((category, index) => (
              <span key={category}>
                {index > 0 && <span className="sr-only">, </span>}
                {category}
              </span>
            ))}
          </dd>
        </dl>

        <h3 className="text-h3">{title}</h3>

        <p className="text-muted">{description}</p>

        <div className="mt-auto flex flex-col gap-4 pt-1">
          <ul
            role="list"
            aria-label="Built with"
            className="flex flex-wrap gap-1.5"
          >
            {stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md bg-bg px-2.5 py-1 text-[0.82rem] font-medium text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
          <ProjectLinks title={title} links={links} />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
