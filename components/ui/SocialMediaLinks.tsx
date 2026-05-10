import StyledLinkButton from '@/components/ui/buttons/StyledLinkButton';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

const SocialMediaLinks = () => {
  return (
    <ul aria-label="Social media" className="flex gap-2 items-center">
      <li>
        <StyledLinkButton
          variant="icon"
          href="https://www.linkedin.com/in/andreylyamkin/"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </StyledLinkButton>
      </li>
      <li>
        <StyledLinkButton
          variant="icon"
          href="https://github.com/alyamkin"
          aria-label="Github"
        >
          <FaGithubSquare size={24} />
        </StyledLinkButton>
      </li>
    </ul>
  );
};

export default SocialMediaLinks;
