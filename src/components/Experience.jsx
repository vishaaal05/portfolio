import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EXPERIENCES } from "../constants";

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

const Experience = () => {
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
        Experience
      </motion.h2>

      {/* Experience Cards */}
      <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto px-5">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            custom={index}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-700/50"
          >
            {/* Role and Company */}
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {experience.role}
            </h3>
            <p className="text-gray-400 text-sm md:text-base mt-1">
              {experience.company}
            </p>

            {/* Year */}
            <p className="text-gray-500 text-sm md:text-base mt-2">
              {experience.year}
            </p>

            {/* Description */}
            <p className="text-gray-300 mt-4">{experience.description}</p>

            {/* Key Responsibilities */}
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-purple-400 flex items-center gap-2">
                <span>&lt; / &gt;</span> Key Responsibilities
              </h4>
              <ul className="mt-2 space-y-2 text-gray-300">
                {experience.responsibilities.map((responsibility, resIndex) => (
                  <li key={resIndex} className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 text-sm font-medium bg-gray-700 text-gray-200 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;