import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return <div className="pb-4" ref={ref}>
    <motion.h2  
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="text-center text-4xl">
      Projects
    </motion.h2>
    <div className="mt-10">
      {PROJECTS.map((project, index) => (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          key={index} 
          className="mb-8 flex flex-col mx-auto m-5 md:flex-row md:w-3/4">
          <div className="flex px-8 pb-3">
            <img src={project.image} alt="" />
          </div>  
          <div className="px-8">
            <h1 className="font-semibold text-xl mb-3">{project.title}</h1>
            <p className="text-stone-400 mb-4 ">{project.description}</p>
            <p className="mt-3">{project.technologies.map((tech,index)=>(
              <span className="mr-2 p-2 text-sm font-medium bg-stone-900 rounded " key={index}>{tech}</span> 
            ))}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>;
};

export default Projects;

