import { SelectedPage } from '../../shared/types';
import useMediaQuery from '../../hooks/useMediaQuery';
import ActionButton from '../ActionButton';
import HomePageGraphic from '@/assets/yoga-hero-lillies.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <section
      id="home"
      className="gap-16 py-36 md:h-full md:pb-0"
    >
      {/* Image and header */}
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* Main Header */}
        <div className="mt-32 z-10 md:basis-2/6">
          {/* Headings */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
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
          </motion.div>
          {/* Actions */}
          <motion.div
            className="mt-8 flex items-center gap-8 md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
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
          </motion.div>
        </div>
        {/* Hero Image */}
        <div className="relative flex justify-center basis-3/5 mt-16 md:z-10 md:mt-40 md:ml-32 md:justify-end">
          <div className="absolute bottom-28 right-96 rounded-full bg-secondary-500 px-4 py-2 text-white text-xs">
            10+ <b>Years In Business</b>
          </div>
          <div className="absolute -top-30 right-28 rounded-full bg-secondary-500 px-4 py-2 text-white text-xs">
            30+ <b>Types of Classes</b>
          </div>
          <img
            src={HomePageGraphic}
            alt="yoga women lillies"
          />
        </div>
      </motion.div>

      {/* Sponsors - only show on desktop */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-gray-20 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
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
