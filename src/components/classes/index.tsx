import { SelectedPage } from '../../shared/types';
import { ClassType } from '../../shared/types';

import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import ClassCard from './ClassCard';

const classes: Array<ClassType> = [
  {
    name: 'Beginner Yoga',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti possimus corrupti, nemo nihil architecto rem error doloribus perferendis minima tempora.',
    image: image1,
  },
  {
    name: 'Pilates',
    image: image2,
  },
  {
    name: 'Vinyasa',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti possimus corrupti, nemo nihil architecto rem error doloribus perferendis minima tempora.',
    image: image3,
  },
  {
    name: 'Hot Yoga',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti possimus corrupti, nemo nihil architecto rem error doloribus perferendis minima tempora.',
    image: image4,
  },
  {
    name: 'Ashtanga Yoga',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti possimus corrupti, nemo nihil architecto rem error doloribus perferendis minima tempora.',
    image: image5,
  },
  {
    name: 'Restorative Yoga',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti possimus corrupti, nemo nihil architecto rem error doloribus perferendis minima tempora.',
    image: image6,
  },
];

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const Classes = ({ setSelectedPage }: Props) => {
  return (
    <section
      className="w-full bg-primary-100 py-40"
      id="classes"
    >
      {/* div with the set width of 5/6 */}
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Classes)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5 mx-auto">
            <SectionHeader>Our Classes</SectionHeader>
            <p className="py-5 text-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              explicabo molestias eveniet corporis. Sit enim doloribus
              distinctio odit, cumque nulla. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quibusdam recusandae laboriosam
              exercitationem molestiae eum impedit reiciendis esse officiis
              adipisci cumque!
            </p>
          </div>
        </motion.div>
        {/* Side Scrolling - Swiper JS? */}
        <div className="mt-10 h-[353px] w-full overflow-y-hidden overflow-x-auto">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <ClassCard
                type={item}
                key={`${item.name}_${index}`}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Classes;
