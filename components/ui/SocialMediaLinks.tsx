import clsx from 'clsx';
import StyledLinkButton from '@/components/ui/buttons/StyledLinkButton';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

const SocialMediaLinks = ({ className }: { className?: string }) => {
  return (
    <ul
      aria-label="Social media"
      className={clsx('flex gap-2 items-center', className)}
    >
      <li>
        <StyledLinkButton
          variant="icon"
          href="https://www.linkedin.com/in/andreylyamkin/"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={32} />
        </StyledLinkButton>
      </li>
      <li>
        <StyledLinkButton
          variant="icon"
          href="https://github.com/alyamkin"
          aria-label="Github"
        >
          <FaGithubSquare size={32} />
        </StyledLinkButton>
      </li>
    </ul>
  );
};

export default SocialMediaLinks;
