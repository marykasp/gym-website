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
import ActionButton from '../ActionButton';
import BenefitsPageGraphic from '@/assets/yoga-person-standing.png';

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

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="benefits"
      className="relative mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Section Headers */}
        <motion.div
          className="md:my-5 flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SectionHeader>MORE THAN JUST A GYM.</SectionHeader>
          <p className="my-5 text-lg md:text-normal md:w-3/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            earum, architecto voluptatibus fugiat eos illo! Ratione, accusantium
            enim sed rerum dolore commodi numquam necessitatibus. Cupiditate
            recusandae aut corrupti labore laborum?
          </p>
        </motion.div>
        {/* Benefits Grid */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
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
        </motion.div>
        {/* Extra Information */}

        <div className="md:flex items-center justify-between gap-10 mt-16 md:mt-28">
          <div className="md:basis-4/5">
            <img
              className="mx-auto"
              src={BenefitsPageGraphic}
              alt=""
            />
          </div>
          {/* Description */}
          <div className="">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <SectionHeader>
                    Millions of happy members getting{' '}
                    <span className="text-primary-500">fit</span>
                  </SectionHeader>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
                voluptatem magni explicabo iste ab itaque facilis quis cumque
                adipisci quasi porro amet voluptate ex eius repellendus
                consectetur veniam, assumenda, alias, eaque sit ipsam soluta
                deleniti asperiores nostrum. Nam recusandae sint veritatis ex
                consectetur, repellendus beatae rerum delectus corporis
                molestiae, autem facilis quam temporibus, est aspernatur non
                fugiat nobis optio dignissimos. Ea obcaecati alias, ipsum eos
                maiores exercitationem perspiciatis vitae. Et, obcaecati optio
                asperiores libero, temporibus rem, vero corrupti officiis
                aperiam quidem impedit illum mollitia. In doloribus dolores, ab
                reprehenderit itaque amet omnis autem nemo vitae illo, neque
                necessitatibus nostrum tempora suscipit placeat aut incidunt
                consequatur quis, voluptatem assumenda. Rerum molestias
                corporis, soluta, totam eius consectetur odio numquam recusandae
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis obcaecati sit corporis eligendi quaerat possimus
                eveniet suscipit qui ullam explicabo, voluptatibus et porro
                aperiam non, autem totam culpa recusandae placeat id. Aperiam,
                laboriosam? Unde rerum consectetur illo totam eaque obcaecati
                qui sequi cum distinctio voluptates sunt, ducimus facere dolorem
                illum!
              </p>
            </motion.div>
            {/* Action Button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-60 before:right-10  before:content-lotusflower">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* <div className="before:absolute before:-top-30 before:-left-10 md:before:content-lotusflower"></div> */}
    </section>
  );
};

export default Benefits;
