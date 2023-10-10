import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import SectionHeader from "../SectionHeader";
import { useForm } from "react-hook-form";

type Props = {
  setSelectedPage: (page: SelectedPage.ContactUs) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const inputStyles = `w-full rounded-lg bg-secondary-300/75 px-5 py-3 mt-3 placeholder-white`;

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="pt-24 pb-32 w-full bg-primary-50">
      <motion.div
        className="mx-auto w-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
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
          {/* Section Header */}
          <div className="mx-auto md:w-3/5">
            <SectionHeader>
              <span className="text-secondary-500">Join Now</span> to get in
              shape
            </SectionHeader>
            <p className="text-normal my-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              sequi quae possimus aperiam voluptas, rerum, labore facilis hic,
              quibusdam corrupti tempora necessitatibus cupiditate? At fugiat
              reiciendis nihil atque hic voluptatibus.
            </p>
          </div>
        </motion.div>
        {/* Contact Form */}
        <div className="mt-10 flex flex-col items-center">
          <motion.div
            className="z-20 mt-10 md:mt-0 w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/1e20f4f2ca6026a49c1f5610055c1b10"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-secondary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max Length is 100 characters."}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-secondary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-secondary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-primary-300 text-white px-20 py-3 transition duration-500 hover:bg-primary-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="before:absolute w-full before:-bottom-20 before:left-28 md:before:content-evolvetext"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
