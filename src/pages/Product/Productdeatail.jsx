import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import banner from "../../assets/bgbanner.jpg"
import Steel from "../../assets/steel.jpg"
import Blocks from "../../assets/blocks2.jpg"
import RMC2 from "../../assets/RMC2.jpg"
import Ash from "../../assets/ash.jpg"
import Agri from "../../assets/agri.jpg"
import Pond from "../../assets/pond.jpg"



const products = [
  {
    id: 1,
    name: "Steel",
    description:
      "Steel is one of the most versatile and durable materials used in construction and manufacturing. It is known for its exceptional strength, resistance to corrosion, and ability to withstand extreme environmental conditions. Steel is commonly used in skyscrapers, bridges, industrial machinery, and automobiles. It is recyclable and can be molded into various forms, making it an eco-friendly and cost-effective choice for builders and engineers. Modern steel manufacturing incorporates advanced techniques to enhance its properties, ensuring longevity and structural stability in all applications. Additionally, steel’s ability to blend with other materials allows architects and designers to create innovative and aesthetically pleasing structures. In recent years, advancements in metallurgy have led to the development of high-strength, lightweight steel alloys that further expand its applications. The construction industry continues to rely heavily on steel for its load-bearing capacity, seismic resistance, and adaptability to modern architectural trends.",
    image:Pond
  },
  {
    id: 2,
    name: "Concrete",
    description:
      "Concrete is the backbone of modern construction, providing unparalleled strength and longevity. It consists of cement, water, and aggregates such as sand, gravel, or crushed stone, which together create a solid and durable mixture. Concrete is widely used in building foundations, roads, bridges, and large-scale infrastructure projects. Its ability to resist weathering, fire, and moisture makes it a reliable choice for various environments. Moreover, advancements in concrete technology have led to the development of self-healing concrete, which can repair cracks over time, increasing its lifespan and reducing maintenance costs. Sustainable concrete options are also emerging, incorporating recycled materials to minimize environmental impact. Innovations such as lightweight concrete, ultra-high-performance concrete, and geopolymer concrete are revolutionizing the industry by providing enhanced strength, insulation, and eco-friendliness.",
    image: "product2.jpg",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <h2 className="text-center text-3xl font-bold text-red-500 mt-10">
        Product Not Found
      </h2>
    );
  }

  return (
    <div>
      <div className="relative w-full h-72">
        <motion.img
          src={banner}
          alt="Product Background"
          className="w-full h-full object-cover brightness-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1 
          className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {product.name}
        </motion.h1>
      </div>
      <div className=" p-2 md:w-[70%] mx-auto mt-20 mb-20">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full  lg:w-3/5 h-96 object-cover rounded-xl mb-6 md:mb-0 md:mr-6 float-none md:float-left"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}

          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mt-10 lg:mt-0">{product.name}</h2>
          <p className="text-lg mt-4 ">{product.description}</p>
        </motion.div>
      </div>
     
    </div>
  );
};

export default ProductDetail;
