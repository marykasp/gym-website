import Navbar from '@/components/navbar';
import { useEffect, useState } from 'react';
import { SelectedPage } from '@/shared/types';

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }

      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-primary-100">
      <Navbar
        isTopOfPage={isTopOfPage}
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
      />
    </div>
  );
};

export default App;
