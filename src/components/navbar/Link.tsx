import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '@/shared/types';

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      className={`${
        selectedPage === lowerCasePage ? 'text-secondary-500' : ''
      } transition duration-500 hover:text-secondary-300`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
