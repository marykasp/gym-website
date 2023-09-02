import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid';
import { SelectedPage } from '../../shared/types';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import { BenefitType } from '../../shared/types';
import BenefitCard from './BenefitCard';

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="w-6 h-6" />,
    title: 'State of the Art Facilities',
    color: 'bg-gray-50',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus hic quidem sint, delectus consequatur repellendus.',
  },
  {
    icon: <UserGroupIcon className="w-6 h-6" />,
    title: 'Diverse Classes',
    color: 'bg-primary-100',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus hic quidem sint, delectus consequatur repellendus.',
  },
  {
    icon: <AcademicCapIcon className="w-6 h-6" />,
    title: 'Expert Trainers',
    color: 'bg-secondary-100',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus hic quidem sint, delectus consequatur repellendus.',
  },
];
type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Section Headers */}
        <div className="md:my-5 flex flex-col items-center">
          <SectionHeader>MORE THAN JUST A GYM.</SectionHeader>
          <p className="my-5 text-lg md:text-normal md:w-3/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            earum, architecto voluptatibus fugiat eos illo! Ratione, accusantium
            enim sed rerum dolore commodi numquam necessitatibus. Cupiditate
            recusandae aut corrupti labore laborum?
          </p>
        </div>
        {/* Benefits Grid */}
        <div className="md:flex items-center justify-between gap-8 mt-5">
          {/* Benefit Cards */}
          {benefits.map((benefit, index) => {
            return (
              <BenefitCard
                benefit={benefit}
                key={`${benefit.title}_${index}`}
                setSelectedPage={setSelectedPage}
              />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
