import { ReactNode } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '../shared/types';

type Props = {
  children: ReactNode;
  setSelectedPage: (page: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
      className="rounded-md bg-primary-500 px-10 py-2 text-white hover:bg-secondary-500 hover:text-white cursor-pointer transition-all"
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
