import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    feedback: "Amazing service! The team was professional and efficient.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmF3JTIwcG9ydHJhaXQlMjBmYWNlfGVufDB8fDB8fHww",
  },
  {
    name: "Jane Smith",
    feedback: "Great experience! I highly recommend their services.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmF3JTIwcG9ydHJhaXQlMjBmYWNlfGVufDB8fDB8fHww",
  },
  {
    name: "Michael Brown",
    feedback: "They exceeded my expectations. Will use them again!",
    image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmF3JTIwcG9ydHJhaXQlMjBmYWNlfGVufDB8fDB8fHww",
  },
  {
    name: "Emily Davis",
    feedback: "Fast and reliable service. I’m very satisfied!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Robert Wilson",
    feedback: "Friendly staff and excellent customer support.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdyUyMHBvcnRyYWl0JTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Sophia Martinez",
    feedback: "A wonderful experience from start to finish!",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmF3JTIwcG9ydHJhaXQlMjBmYWNlfGVufDB8fDB8fHww",
  },
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <motion.section  id="testimonials"
      className="py-12 bg-gray-100 flex justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-[80%]">
        <motion.h2 className="text-3xl font-bold"
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
         viewport={{ once: false }} // Animation runs every time it appears
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
            What Our Clients Say
          </span>
        </motion.h2>
        <motion.p className="text-black mt-2"
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
         viewport={{ once: false }} // Animation runs every time it appears
        
        >Real feedback from our satisfied customers.</motion.p>
        <motion.div className="mt-8">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="px-3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white shadow-lg rounded-lg p-6 text-center h-full flex flex-col justify-between">
                  <FaQuoteLeft className="text-orange-500 text-3xl mx-auto mb-2" />
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 mx-auto rounded-full"
                  />
                  <h3 className="mt-4 text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 mt-2">{testimonial.feedback}</p>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TestimonialSection;
