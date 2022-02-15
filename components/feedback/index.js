import { motion } from "framer-motion";
import { useIntl } from "react-intl";

const TestimonialCard = ({ content, img, title, description }) => {
  return (
    <motion.div
      className="px-8 py-8 transition duration-300 ease-in-out bg-yellow-200 sm:px-6 md:px-8 lg:px-5 2xl:px-8 rounded-3xl"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <img
        src={img}
        className="object-cover w-20 h-20 border-2 border-yellow-300 rounded-full filter drop-shadow-2xl"
        alt="Testimonial 01"
      />
      <p className="mt-3 text-lg font-bold text-purple-900">{title}</p>
      <p className="mt-1 text-lg text-gray-800 italic">{description}</p>

      {/* <div className="mt-1 flex justify-start w-full space-x-0.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-yellow-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-yellow-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-yellow-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-yellow-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-yellow-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div> */}

      <p className="mt-5 text-lg text-purple-800">{content}</p>
    </motion.div>
  );
};

const Feedback = ({ id, testimonials }) => {
  const { formatMessage: f } = useIntl();
  return (
    <section id={id} className="md:mt-12 bg-primary-100">
      <div
        style={{
          backgroundImage: "url(/images/mask.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative"
      >
        <div className="px-4 mx-auto lg:max-w-screen-2xl sm:px-6 py-20 sm:py-20 lg:py-20">
          <motion.div
            className="flex flex-col items-center justify-center "
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
          >
            <h2 className="max-w-4xl text-center text-white text-5xl sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
              {f({
                id: "Home.OurStories",
                defaultMessage: "Our Stories",
              })}
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl leading-relaxed text-center text-purple-50">
              {f({
                id: "Home.ParentFeedbackSummary",
                defaultMessage:
                  "Providing the best possible start to your children's education. Our goal is to ensure your little one's success in life. So We provide an environment that enables students to thrive.",
              })}
            </p>
          </motion.div>
          <div className="grid gap-8 mt-12 md:gap-8 sm:gap-6 md:mt-14 lg:mt-16 xl:mt-20 2xl:mt-24 xl:grid-cols-3 sm:grid-cols-2 2xl:gap-12 lg:gap-6 lg:max-w-screen-xl mx-auto">
            {testimonials.map((item, idx) => (
              <TestimonialCard
                key={`testimonial-${idx}`}
                content={item?.content}
                img={item?.photo?.url}
                title={item?.parent}
                description={item?.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
