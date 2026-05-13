import clsx from 'clsx';

import SectionWrapper from '@/components/sections/SectionWrapper';
import Tag from '@/components/ui/tags/Tag';
import skills from './data';

const Skills = () => {
  return (
    <SectionWrapper
      id="skills"
      title="Skills"
      subtitle="Tools and technologies I use"
    >
      <div className="grid grid-cols-1 tablet:grid-cols-2">
        {skills.map((group, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={group.key}
              className={clsx(
                'flex flex-col gap-4 p-4',
                'tablet:border-border-light',
                isEven && 'tablet:border-l',
              )}
            >
              <p className="self-center text-body font-medium text-text-primary">
                {group.label}
              </p>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item.label} variant={item.variant} size="lg">
                    {item.label}
                  </Tag>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
