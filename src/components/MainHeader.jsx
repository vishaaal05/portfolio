import { motion } from "framer-motion";

export const MainHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-16 md:py-36">
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="px-5 md:px-20 mb-8 md:mt-0 flex justify-center order-0 md:order-2">
        <div>
          <img
            src="profile-removebg-preview.jpg"
            alt="Vishal Kumar Gupta - Profile"
            className="rounded-3xl max-w-full md:max-w-80 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-5 md:px-20 w-full md:w-1/2 text-white order-0 md:order-1">
        <h1 className='text-3xl md:text-5xl py-2 md:py-1 text-center md:text-left tracking-tighter text-white'>Vishal Kumar Gupta</h1>
        <h3 className='text-xl md:text-2xl py-2 md:py-7 text-center md:text-left bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text tracking-tight text-transparent'>Full Stack Developer</h3>
        <p className='leading-7'>I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.</p>
        <div className="mt-10 text-center md:text-left">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl p-4 text-sm text-stone-800"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </div>
  );
};
