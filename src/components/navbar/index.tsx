import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/evoyoga-logo.png';
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '../../hooks/useMediaQuery';
import ActionButton from '../ActionButton';

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  const flexBetween = 'flex items-center justify-between';
  const navbarBackground = isTopOfPage ? '' : 'bg-white drop-shadow';
  const navigation = ['Home', 'Benefits', 'Classes', 'Contact us'];

  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6 ${navbarBackground}`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left side */}
            <img
              src={Logo}
              alt="evoyoga logo"
              className="logo"
            />
            {/* Right side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {navigation.map((nav, index) => {
                    return (
                      <Link
                        page={nav}
                        key={`nav_${index}`}
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                    );
                  })}
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile menuy modal */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-secondary-100 drop-shadow-xl">
          <div className="flex justify-end p-20">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            {navigation.map((nav, index) => {
              return (
                <Link
                  page={nav}
                  key={`navbar_${index}`}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
