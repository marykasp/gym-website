import Navbar from '@/components/navbar';
import Home from '@/components/home';
import Benefits from '@/components/benefits';
import { useEffect, useState } from 'react';
import { SelectedPage } from '@/shared/types';
import Footer from './components/footer';
import Classes from './components/classes';
import ContactUs from './components/contact';
import Contact from './components/contact';

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
    <div className="app bg-primary-50">
      <Navbar
        isTopOfPage={isTopOfPage}
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <Classes setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
};

export default App;
