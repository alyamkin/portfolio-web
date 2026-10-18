import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/projects/Projects';
import Skills from '@/components/sections/Skills';
import { getStructuredData, serializeJsonLd } from '@/lib/structured-data';

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(getStructuredData()),
        }}
      />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
