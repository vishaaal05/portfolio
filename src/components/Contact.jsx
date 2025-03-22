import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CONTACT } from "../constants";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

// Animation variants for the section title
const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Animation variants for the form and contact details
const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

// Animation variants for the social icons
const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.2 },
  }),
  hover: {
    scale: 1.2,
    color: "#ffffff",
    transition: { duration: 0.3 },
  },
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (placeholder for now)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here (e.g., send data to an API)
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="py-24" ref={ref}>
      {/* Section Title */}
      <motion.h1
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-14"
      >
        Get in Touch
      </motion.h1>

      {/* Contact Section */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto px-5"
      >
        {/* Left: Contact Form (Send a Signal) */}
        <div className="flex-1 bg-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-cyan-400 flex items-center gap-2 mb-6">
            <MdEmail /> Send a Signal
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Your Alias
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-cyan-400"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Galactic Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@cosmos.com"
                className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-cyan-400"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Cosmic Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Speak your mind..."
                rows="4"
                className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-cyan-400 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              Transmit
            </button>
          </form>
        </div>

        {/* Right: Contact Details (Interstellar Links) */}
        <div className="flex-1 bg-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-6">
            Interstellar Links
          </h2>
          <div className="space-y-6 text-gray-300">
            {/* Email */}
            <div className="flex items-center gap-3">
              <MdEmail className="text-cyan-400 text-2xl" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p>{CONTACT.email}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <MdPhone className="text-cyan-400 text-2xl" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p>{CONTACT.phoneNo}</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-3">
              <MdLocationOn className="text-cyan-400 text-2xl" />
              <div>
                <p className="text-sm text-gray-400">Coordinates</p>
                <p>{CONTACT.address}</p>
              </div>
            </div>

            {/* Social Links (Orbit Me) */}
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-4">
                Orbit Me
              </h3>
              <div className="flex gap-4">
                <motion.a
                  href={CONTACT.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={0}
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="text-gray-400"
                >
                  <FaLinkedin className="text-2xl" />
                </motion.a>
                <motion.a
                  href={CONTACT.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={1}
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="text-gray-400"
                >
                  <FaGithub className="text-2xl" />
                </motion.a>
                <motion.a
                  href={CONTACT.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={2}
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="text-gray-400"
                >
                  <FaInstagram className="text-2xl" />
                </motion.a>
                <motion.a
                  href={CONTACT.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={3}
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="text-gray-400"
                >
                  <FaXTwitter className="text-2xl" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;