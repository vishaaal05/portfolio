import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiJavaFill } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return <div className="pb-24" ref={ref}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="text-center text-4xl">
      Technologies
    </motion.h2>
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="flex flex-wrap justify-center items-center mt-14 gap-10">
        <div className="transform transition-transform duration-300 hover:scale-125">
            <RiReactjsLine className="text-8xl text-cyan-400"/>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-125">
            <BiLogoMongodb className="text-8xl text-green-600" />
        </div>
        <div className="transform transition-transform duration-300 hover:scale-125">
            <SiMysql className="text-8xl text-cyan-500"/>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-125">
            <IoLogoJavascript  className="text-8xl text-yellow-400"/>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-125">
            <TbBrandNextjs className="text-8xl"/>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-125">
            <RiJavaFill   className="text-8xl text-yellow-400"/>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-125">
            <SiSpringboot    className="text-8xl text-green-500"/>
        </div>
    </motion.div>
  </div>;
};

export default Technologies;
