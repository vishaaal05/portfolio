import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EDUCATION } from "../constants";

// Animation variants for the section title
const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Animation variants for the experience cards
const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.2 },
  }),
};

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="" ref={ref}>
      {/* Section Title */}
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="my-20 text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        Education
      </motion.h2>

      <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto px-5">
        {EDUCATION.map((education, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            custom={index}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-700/50"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {education.course}
            </h3>
            <p className="text-gray-400 text-sm md:text-base mt-1">
              {education.college}
            </p>

            {/* Year */}
            <p className="text-gray-500 text-sm md:text-base mt-2">
              {education.year}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;