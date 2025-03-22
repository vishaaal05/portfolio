
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

// Animation variants for the section title
const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Animation for the horizontal scroll
const scrollVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40, // Adjust speed of the scroll
        ease: "linear",
      },
    },
  },
};

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="py-24 relative" ref={ref}>
      {/* Section Title */}
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-14"
      >
        Technologies
      </motion.h2>

      {/* Horizontal Scrolling Container */}
      <div className="overflow-hidden relative">
        {/* Gradient overlays for fade effect on the sides */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>

        {/* Tech Icons with Horizontal Animation */}
        <motion.div
          variants={scrollVariants}
          animate="animate"
          className="flex gap-10 md:gap-16 whitespace-nowrap"
          style={{ display: "inline-flex" }}
        >
          {/* Duplicate the tech stack to create a seamless loop */}
          {[...techStack, ...techStack].map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.3)",
                transition: { duration: 0.3 },
              }}
              className="flex flex-col items-center"
            >
              <div className={`text-6xl md:text-8xl ${tech.color}`}>
                {tech.icon}
              </div>
              <span className="text-gray-300 text-sm md:text-base mt-2">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;