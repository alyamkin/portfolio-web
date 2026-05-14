import SectionWrapper from './SectionWrapper';
import StyledLinkButton from '@/components/ui/buttons/StyledLinkButton';
import SocialMediaLinks from '@/components/ui/SocialMediaLinks';

const Contacts = () => {
  return (
    <SectionWrapper
      id="contacts"
      title="Contacts"
      subtitle="Feel free to reach out"
    >
      <div className="flex flex-col items-center justify-center gap-6 py-6">
        <StyledLinkButton
          variant="primary"
          href="mailto:andrew.lyamkin@gmail.com"
          className="w-full tablet:w-auto"
        >
          Send Email
        </StyledLinkButton>
        <SocialMediaLinks />
      </div>
    </SectionWrapper>
  );
};

export default Contacts;
