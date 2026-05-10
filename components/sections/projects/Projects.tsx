import SectionWrapper from '@/components/sections/SectionWrapper';
import ProjectCard from './ProjectCard';
import projects from './data';

const Projects = () => {
  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="A selection of projects I've built recently"
    >
      <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2 tablet:gap-6 laptop:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.key} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
