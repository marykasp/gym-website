import { SelectedPage } from '../../shared/types';
import useMediaQuery from '../../hooks/useMediaQuery';
import ActionButton from '../ActionButton';
import HomePageText from '@/assets/Headerbackgroundtext.png';
import HomePageGraphic from '@/assets/yoga-hero-lillies.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};
const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <section
      id="home"
      className="gap-16 bg-primary-100 py-12 md:h-full md:pb-0"
    >
      {/* Image and header */}
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/* Main Header */}
        <div className="mt-32 z-10 md:basis-2/6">
          {/* Headings */}
          <div className="md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <h1 className="font-montserrat font-semibold text-8xl text-primary-500">
                  EVOYOGA
                </h1>
                <h3 className="font-montserrat font-extralight text-5xl text-gray-500 opacity-75">
                  evolutionary fitness
                </h3>
              </div>
            </div>
            <p className="mt-8 text-md md:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum
              delectus error similique quo tempora nobis quaerat perferendis
              cumque necessitatibus.
            </p>
          </div>
          {/* Actions */}
          <div className="mt-8 flex items-center gap-8 md:justify-start">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex justify-center basis-3/5 mt-16 md:z-10 md:mt-40 md:ml-32 md:justify-end">
          <img
            src={HomePageGraphic}
            alt="yoga women lillies"
          />
        </div>
      </div>

      {/* Sponsors - only show on desktop */}
      {isAboveMediumScreens && (
        <div>
          <div>
            <div>
              <img
                src={SponsorRedBull}
                alt="redbull-sponsor"
              />
              <img
                src={SponsorFortune}
                alt="redbull-fortune"
              />
              <img
                src={SponsorForbes}
                alt="redbull-forbes"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
