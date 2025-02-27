import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CounterSection from "../../components/Counter"; // Import CounterSection

const AboutSection = () => {
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <div className="mt-20 w-[80%] mx-auto">
      {/* Who We Are Section */}
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, x: -50 }}
        animate={headingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
      >
         <span className=" text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
           Who We Are
          </span>
      </motion.div>

      {/* Paragraph Animation */}
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, x: 50 }}
        animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p className="text-xl mt-5 tracking-widest ">
        QAIMAXA - Your Trusted Construction Partner.

We supply quality construction materials at the best prices, ensuring reliability and timely delivery across Mumbai. From fly ash and RMC concrete to steel and ACC blocks, we provide everything you need for a strong and lasting build.
        </p>
      </motion.div>

      {/* Counter Section Component */}
      <CounterSection />
    </div>
  );
};

export default AboutSection;
