import Section from '@/components/ui/Section';
import { projects } from '@/content/projects';
import ProjectCard from './ProjectCard';

const Projects = () => (
  <Section
    id="work"
    title="Projects"
    description="Personal projects I've designed and built."
  >
    <ul role="list" className="grid gap-7 md:grid-cols-2">
      {projects.map((project) => (
        <li key={project.slug}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  </Section>
);

export default Projects;
