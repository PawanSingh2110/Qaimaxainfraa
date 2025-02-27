import React from "react";
import { motion } from "framer-motion";
import { FaClipboardList, FaShieldAlt, FaHeadset, FaCogs, FaWallet } from "react-icons/fa";

const WhyGaamUP = () => {
  const features = [
    { icon: <FaClipboardList />, text: "Latest and innovative products and solutions" },
    { icon: <FaShieldAlt />, text: "All products are of superior quality and long-lasting" },
    { icon: <FaWallet />, text: "The products at QaiMaxa are cost-effective" },
    { icon: <FaHeadset />, text: "We offer 24 X 7 service and support" },
    { icon: <FaCogs />, text: "Get customized products as per your requirements" },
  ];

  return (
    <div id="whyus"
      className=" whyme relative flex items-center justify-center mt-10  py-16 bg-cover bg-center bg-no-repeat"
      
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/10 bg-opacity-50"></div>

      <div className="relative z-10 max-w-7xl w-full px-6">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl font-medium text-white mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }} // Animation runs every time it appears
        >
          <span className="text-blue-400">Why</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
            QaiMaxa
          </span>
        </motion.h2>

        {/* Features Grid with One-by-One Pop-Up Effect */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }} // Replays animation every time in view
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="group relative p-6 rounded-xl bg-white flex flex-col items-center text-center transition-all duration-300 ease-in-out 
              shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500"
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
              }}
            >
              {/* Icon (Turns White on Hover) */}
              <span className="text-4xl text-pink-400 mb-3 transition-all duration-300 group-hover:text-white">
                {item.icon}
              </span>

              {/* Text (Turns White on Hover) */}
              <p className="text-lg tracking-wider font-medium text-gray-800 transition-all duration-300 group-hover:text-white">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyGaamUP;
