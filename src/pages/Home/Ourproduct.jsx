import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import ProductCard from "../Product/ProductCard";
import RMC from "../../assets/rmc.jpg"
import Steel from "../../assets/steel.jpg"
import Blocks from "../../assets/blocks1.jpg"
import Ash from "../../assets/ash.jpg"
import Agri from "../../assets/agri.jpg"
import Pond from "../../assets/pond.jpg"



const OurProduct = () => {
  const products = [
    {
      id: 1,
      name: "High-Quality Ready-Mix Concrete (RMC) for Reliable Construction",
      description: "Our premium Ready-Mix Concrete (RMC) ensures strength, durability, and efficiency for all construction projects. Designed for residential, commercial, and industrial use, it offers consistent quality and faster project completion. Contact us today!......",
      image:RMC
    },
    {
      id: 2,
      name: "Durable Concrete Blocks for Strong Foundations",
      description: "Our high-quality concrete blocks offer superior strength, durability, and thermal insulation. Ideal for residential, commercial, and industrial construction, they ensure stability and long-lasting performance. Contact us for more details!.......",
      image: Blocks,
    },
    {
      id: 3,
      name: "High-Quality Fly Ash for Sustainable Construction",
      description: "Enhance your construction projects with premium fly ash – a fine, eco-friendly material ideal for concrete, bricks, and road construction Improve strength, durability, and sustainability while reducing environmental impact. Contact us for more details!.......",
      image: Ash,
    },
    {
      id: 4,
      name: "Eco-Friendly Pond Ash for Sustainable Construction",
      description: "Pond ash is a fine-grained byproduct of coal combustion, ideal for road construction, brick manufacturing, and soil stabilization. It offers a cost-effective, eco-friendly alternative to traditional materials, reducing environmental impact while enhancing durability.....",
      image: Pond,
    },
    {
      id: 5,
      // icons: ,
      name: "Superior Metal Solutions for Every Industry",
      description: "We provide high-quality metal materials, including aluminum, copper, and stainless steel, for construction, fabrication, and industrial needs. Get durable, versatile, and cost-effective metal solutions. Reach out for more details!.....",
      image:Steel
    },
    {
      id: 6,
      name: "High-Quality Aggregate for Strong & Durable Construction ",
      description: "Our premium aggregates, including crushed stone, gravel, and sand, provide excellent strength and stability for concrete, road construction, and landscaping. Sourced for durability and consistency, they ensure a solid foundation for any project. Contact us today!.....",
      image: Agri,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(products.length / slidesPerView));
    }, 6000);
    return () => clearInterval(interval);
  }, [slidesPerView]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(products.length / slidesPerView));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(products.length / slidesPerView)) % Math.ceil(products.length / slidesPerView));
  };

  return (
    <div id="products" className="w-[90%] lg:w-[80%] mx-auto mt-14 relative">
      {/* Animated Heading */}
      <motion.span
        className="text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Products
      </motion.span>

      {/* Product Slider */}
      <div className="overflow-hidden relative mt-6">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {products.map((item) => (
            <motion.div
              key={item.id}
              className="w-full sm:w-1/2 lg:w-1/3 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ProductCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-all"
      >
        <MdKeyboardArrowLeft size={30} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-all"
      >
        <MdKeyboardArrowRight size={30} />
      </button>
    </div>
  );
};

export default OurProduct;
