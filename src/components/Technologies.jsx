import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RiReactjsLine, RiJavaFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMysql, SiSpringboot, SiTailwindcss, SiRedux, SiTypescript, SiPrisma } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaServer } from "react-icons/fa";

// Tech stack data with icons, labels, and colors
const techStack = [
  { name: "React", icon: <RiReactjsLine />, color: "text-cyan-400" },
  { name: "Next.js", icon: <TbBrandNextjs />, color: "text-white" },
  { name: "MongoDB", icon: <BiLogoMongodb />, color: "text-green-600" },
  { name: "MySQL", icon: <SiMysql />, color: "text-cyan-500" },
  { name: "JavaScript", icon: <IoLogoJavascript />, color: "text-yellow-400" },
  { name: "Java", icon: <RiJavaFill />, color: "text-yellow-400" },
  { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-500" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-400" },
  { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
  { name: "Prisma", icon: <SiPrisma />, color: "text-blue-800" },
  { name: "Serverless", icon: <FaServer />, color: "text-orange-500" },
];

// Section animations
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Icon animations
const iconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="text-center py-16"
    >
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-14">
        Skills
      </h2>

      {/* Tech Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-center px-14">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={iconVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.3)",
              transition: { duration: 0.3 },
            }}
            className="flex flex-col items-center"
          >
            <div className={`text-6xl md:text-7xl ${tech.color}`}>
              {tech.icon}
            </div>
            <span className="text-gray-300 text-sm md:text-base mt-2">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Technologies;
