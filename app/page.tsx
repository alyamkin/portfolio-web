import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/skills/Skills';
import Contacts from '@/components/sections/Contacts';

export default function Page() {
  return (
    <main className="flex flex-1 flex-col gap-12 tablet:gap-16 laptop:gap-30">
      <Hero />
      <Projects />
      <Skills />
      <Contacts />
    </main>
  );
}
