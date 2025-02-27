import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Banner1 from "../../assets/banner1.jpg";
import Banner2 from "../../assets/banner2.jpg";
import Banner3 from "../../assets/banner3.jpg";
import Banner4 from "../../assets/banner4.jpg";
const slides = [
  {
    image: Banner1,
    title: "Ready-Mix Concrete for Reliable Construction",
description: "High-quality Ready-Mix Concrete (RMC) for durable and efficient construction, delivered on-site for all project needs."
  },
  {
    image: Banner3,
    title: "Premium Blocks for Strong Foundations",
    description: "Our blocks are made from high-quality materials, ensuring durability and strength for all your construction needs."
  },
  {
    image: Banner2,
    title: "Fly Ash for Sustainable Construction",
    description: "A versatile industrial byproduct used to enhance strength, durability, and eco-friendliness in construction projects."
  },
  {
    image: Banner4,
    title: "Iron and Accessories for Complete Solutions",
    description: "From iron bars to essential accessories, we offer comprehensive solutions for your construction projects."
  }
  
];
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <motion.img
          key={index}
          src={slide.image}
          alt={slide.title}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/30 bg-opacity-50 flex flex-col justify-center items-center text-center px-6">
        {slides.map((slide, index) => (
          <div key={index} className={`transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0 hidden"}`}>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white text-4xl md:text-6xl font-bold tracking-tight"
            >
              {slide.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-white text-lg md:text-2xl mt-4 tracking-tighter"
            >
              {slide.description}
            </motion.p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default HeroSection;
