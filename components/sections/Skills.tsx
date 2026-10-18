import Section from '@/components/ui/Section';
import { skills } from '@/content/skills';

const Skills = () => (
  <Section
    id="skills"
    title="Skills"
    description="The languages, frameworks, and tools I use day to day."
  >
    <div className="grid gap-6">
      <ul role="list" aria-label="Core skills" className="flex flex-wrap gap-3">
        {skills.core.map((skill) => (
          <li
            key={skill}
            className="rounded-xl border border-line bg-surface px-4.5 py-3.5 font-display text-[1.08rem] font-semibold tracking-tight"
          >
            {skill}
          </li>
        ))}
      </ul>
      <div className="max-w-[70ch] leading-[1.8] text-muted">
        <h3 className="mb-1 font-sans text-base font-semibold text-ink">
          Also work with
        </h3>
        <ul role="list">
          {skills.other.map((skill, index) => (
            <li key={skill} className="inline">
              {skill}
              {index < skills.other.length - 1 && (
                <span aria-hidden="true"> · </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

export default Skills;
