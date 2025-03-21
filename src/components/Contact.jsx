import { CONTACT } from '../constants'
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='mt-20 mb-10' ref={ref}>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className='text-4xl text-center'>
        Get in Touch
      </motion.h1>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-center mt-10'>
        <p>{CONTACT.address}</p>
        <p>{CONTACT.phoneNo}</p>
        <a href="">{CONTACT.email}</a>
      </motion.div>
    </div>
  )
}

export default Contact