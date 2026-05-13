import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import StyledButton from './buttons/StyledButton';

type MenuTogglerProps = {
  className?: string;
  isOpened: boolean;
  onClick: () => void;
};
const MenuToggler = ({ className, isOpened, onClick }: MenuTogglerProps) => {
  return (
    <StyledButton variant="icon" className={className} onClick={onClick}>
      {!isOpened && <FaBars size={32} />}
      {isOpened && <FaXmark size={32} />}
    </StyledButton>
  );
};

export default MenuToggler;
