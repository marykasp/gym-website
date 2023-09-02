import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/evoyoga-logo.png';
import Link from './Link';
import { SelectedPage } from '@/shared/types';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = 'flex items-center justify-between';
  const navigation = ['Home', 'Benefits', 'Classes', 'Contact us'];

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left side */}
            <img
              src={Logo}
              alt="evoyoga logo"
              className="logo"
            />
            {/* Right side */}
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
                <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
