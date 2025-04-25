import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    position: 'CEO, Company XYZ',
    image: '/assets/customer.png', // Replace with actual image path
    testimonial: 'This is an amazing service! I highly recommend it to everyone.',
  },
  {
    name: 'Jane Smith',
    position: 'Marketing Manager, ABC Corp',
    image: '/assets/customer.png', // Replace with actual image path
    testimonial: 'Fantastic experience! The support team was extremely helpful.',
  },
  {
    name: 'Robert Brown',
    position: 'Product Designer, DesignHub',
    image: '/assets/customer.png', // Replace with actual image path
    testimonial: 'I love how easy it is to use the platform. Highly intuitive!',
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mx-4 my-4 flex flex-col items-center text-center">
    <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mb-4" />
    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
    <p className="text-sm text-gray-500 mb-4">{testimonial.position}</p>
    <p className="text-gray-700">{testimonial.testimonial}</p>
  </div>
);

const TestimonialSection = () => (
  <section className="bg-gray-100 py-12">
    <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
    <div className="flex flex-wrap justify-center">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </div>
  </section>
);

export default TestimonialSection;
