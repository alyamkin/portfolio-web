import Image from 'next/image';
import StyledLinkButton from '@/components/ui/buttons/StyledLinkButton';

const Hero = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-1 items-center gap-4 tablet:gap-6 laptop:grid-cols-2">
        <header>
          <h1 className="text-h4 mb-4 laptop:text-h3">Hello, I’m Andrey</h1>
          <p className="text-body-lg font-medium mb-6">
            Creative web developer. I design and build modern web applications
            with a focus on usability and performance
          </p>
          <div className="flex flex-col gap-4 tablet:flex-row">
            <StyledLinkButton variant="primary" href="#projects">
              View Projects
            </StyledLinkButton>
          </div>
        </header>

        <div className="flex justify-center">
          <Image
            src="/images/hero-image.png"
            alt="Portrait of Andrey"
            width={600}
            height={600}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
