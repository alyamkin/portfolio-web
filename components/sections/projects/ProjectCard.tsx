import Image from 'next/image';
import { FaFigma, FaGithubSquare } from 'react-icons/fa';

import Tag from '@/components/ui/tags/Tag';
import StyledLinkButton from '@/components/ui/buttons/StyledLinkButton';
import { type ProjectCard } from './types';

type Props = {
  project: ProjectCard;
};

const ProjectCard = ({ project }: Props) => {
  const { title, description, image, tags, demo, github, figma, status } =
    project;

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border-light bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover">
      <div className="relative">
        <Image src={image} alt={`${title} image`} width={640} height={360} />
        <div className="absolute top-3 right-3">
          <Tag variant={status.id}>{status.label}</Tag>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="space-y-2">
          <h3 className="text-body font-medium text-text-primary">{title}</h3>

          <p className="text-body-sm text-text-secondary">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag.label} variant={tag.variant}>
                {tag.label}
              </Tag>
            ))}
          </div>
        </div>

        <div className="mt-auto flex items-center pt-6">
          {demo && <StyledLinkButton href={demo}>Live Demo</StyledLinkButton>}

          <ul className="ml-auto flex items-center gap-2">
            {github && (
              <li>
                <StyledLinkButton
                  variant="icon"
                  href={github}
                  aria-label="Github"
                >
                  <FaGithubSquare size={24} />
                </StyledLinkButton>
              </li>
            )}

            {figma && (
              <li>
                <StyledLinkButton
                  variant="icon"
                  href={figma}
                  aria-label="Figma"
                >
                  <FaFigma size={24} />
                </StyledLinkButton>
              </li>
            )}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
