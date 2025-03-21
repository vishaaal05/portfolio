import { EXPERIENCES } from "../constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="pb-4" ref={ref}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl">
        Experiences
      </motion.h2>
      <div className="flex flex-col gap-8 w-3/4 mx-auto">
        {EXPERIENCES.map((experience, index) => (
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            key={index} 
            className="flex flex-col gap-4 md:flex-row">
            <div className="w-32">
              <p className="font-semibold">{experience.year}</p>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">
                {experience.role}{" "}
                <span className="text-gray-500 ">@ {experience.company}</span>
              </h3>
              <p className="mt-2 text-stone-400">{experience.description}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-stone-900">
                {experience.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="rounded-full px-3 py-1 text-sm  bg-stone-900 text-stone-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
