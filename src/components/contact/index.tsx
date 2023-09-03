import { motion } from 'framer-motion';
import { SelectedPage } from '../../shared/types';
import SectionHeader from '../SectionHeader';
import { useForm } from 'react-hook-form';

type Props = {
  setSelectedPage: (page: SelectedPage.ContactUs) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="contactus"
      className="pt-24 pb-32 w-full bg-gray-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
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
          {/* Section Header */}
          <div className="mx-auto md:w-3/5">
            <SectionHeader>
              <span className="text-secondary-500">Join Now</span> to get in
              shape
            </SectionHeader>
            <p className="text-normal py-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              sequi quae possimus aperiam voluptas, rerum, labore facilis hic,
              quibusdam corrupti tempora necessitatibus cupiditate? At fugiat
              reiciendis nihil atque hic voluptatibus.
            </p>
          </div>
        </motion.div>
      </motion.div>
      {/* Contact Form */}
      <form action=""></form>
    </section>
  );
};

export default Contact;
