import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PROJECTS } from "../constants";

// Animation variants for the section title
const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Animation variants for the cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.2 },
  }),
};

// Animation variants for the modal
const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to open the modal
  const openModal = (project) => {
    setSelectedProject(project);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="pt-20" ref={ref}>
      {/* Section Title */}
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-14"
      >
        Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="mt-10 flex flex-wrap justify-center gap-8 px-5 md:px-10">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            custom={index}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.1)",
              transition: { duration: 0.3 },
            }}
            onClick={() => openModal(project)}
            className="relative w-full md:w-96 bg-gray-800 rounded-2xl overflow-hidden cursor-pointer"
          >
            {/* Project Image */}
            <div className="h-48 md:h-56">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium bg-gray-700 text-gray-200 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <motion.div
            className="bg-gray-900 rounded-2xl p-6 md:p-8 max-w-2xl w-full mx-auto relative max-h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Content */}
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">
              {selectedProject.title}
            </h3>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 md:h-56 object-cover rounded-lg mb-4"
            />

            {/* Render details with preserved line breaks */}
            <p className="text-gray-300 mb-4 whitespace-pre-wrap leading-relaxed">
              {selectedProject.details}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 text-xs font-medium bg-gray-700 text-gray-200 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub and Live Links */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 text-center bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all"
              >
                GitHub
              </a>
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all"
              >
                Live Demo
              </a>
            </div>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="w-full py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-all"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
