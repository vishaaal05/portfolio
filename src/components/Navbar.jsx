import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Animation variants for the logo
const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Animation variants for the social icons
const iconVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Staggered animation for each icon
      duration: 0.5,
    },
  }),
  hover: {
    scale: 1.2,
    color: "#ffffff",
    transition: { duration: 0.3 },
  },
};

export const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 flex justify-between px-5 md:px-10 h-16 items-center "
    >
      {/* Logo */}
      <motion.div
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center"
      >
        <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          <img src="fevicon.png" className="size-20" alt="" />
        </span>
      </motion.div>

      {/* Social Icons */}
      <div className="flex gap-5 md:gap-7 items-center">
        <motion.a
          href="https://instagram.com/vishaaal05"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Instagram"
          custom={0}
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <FaInstagram className="text-2xl md:text-3xl" />
        </motion.a>

        <motion.a
          href="https://github.com/vishaaal05"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Github"
          custom={1}
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <FaGithub className="text-2xl md:text-3xl" />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/vishaaal05/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn"
          custom={2}
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <FaLinkedin className="text-2xl md:text-3xl" />
        </motion.a>

        <motion.a
          href="https://x.com/Vishaaal05"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Twitter"
          custom={3}
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <FaXTwitter className="text-2xl md:text-3xl" />
        </motion.a>
      </div>
    </motion.div>
  );
};