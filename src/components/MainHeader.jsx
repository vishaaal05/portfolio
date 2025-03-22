import { motion } from "framer-motion";

// Animation variants for staggered text
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Staggered delay for each text element
      duration: 0.5,
    },
  }),
};

// Animation variants for the profile image
const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Animation variants for the button
const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.3)",
    transition: { duration: 0.3 },
  },
};

export const MainHeader = () => {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row justify-between items-center py-16 md:py-36 ">
      {/* Background decorative element */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent)] pointer-events-none"></div> */}

      {/* Profile Image Section */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="px-5 md:px-20 mb-8 md:mt-0 flex justify-center order-0 md:order-2 relative"
      >
        <div className="relative">
          <img
            src="profile-removebg-preview.jpg"
            alt="Vishal Kumar Gupta - Profile"
            className="rounded-3xl max-w-full md:max-w-80 hover:scale-105 transition-transform duration-300"
          />
          {/* Glow effect around the image */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl -z-10 animate-pulse"></div>
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="px-5 md:px-20 w-full md:w-1/2 text-white order-0 md:order-1 flex flex-col items-center md:items-start text-center md:text-left"
      >
        {/* Name with gradient text */}
        <motion.h1
          custom={0}
          variants={textVariants}
          className="text-4xl md:text-6xl py-2 md:py-1 tracking-tighter bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold"
        >
          Vishal Kumar Gupta
        </motion.h1>

        {/* Job Title */}
        <motion.h3
          custom={1}
          variants={textVariants}
          className="text-xl md:text-3xl py-2 md:py-7 tracking-tight text-gray-300"
        >
          Full Stack Developer
        </motion.h3>

        {/* Description */}
        <motion.p
          custom={2}
          variants={textVariants}
          className="leading-7 text-gray-200 max-w-lg"
        >
          I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
        </motion.p>

        {/* Download CV Button */}
        <motion.div
          custom={3}
          variants={textVariants}
          className="mt-10"
        >
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover="hover"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl p-4 text-sm font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          >
            Download CV
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};