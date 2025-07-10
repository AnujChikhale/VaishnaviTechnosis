import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'How Robotics is Transforming Manufacturing in India',
    date: 'June 10, 2025',
    excerpt: 'Explore how robotic automation is revolutionizing the Indian industrial landscape with improved efficiency and safety.',
    link: 'https://www.manufacturingtodayindia.com/robotics-in-indian-manufacturing-examine-how-robotics-can-boost-productivity-in-indias-manufacturing-sector-while-preserving-jobs#:~:text=India%E2%80%99s%20manufacturing%20landscape%20is%20on%20the%20brink%20of,by%20performing%20tasks%20with%20unmatched%20precision%20and%20speed.'
  },
  {
    title: 'AI Vision Systems in Quality Control',
    date: 'May 25, 2025',
    excerpt: 'Discover how artificial intelligence is enabling flawless inspection in real-time production environments.',
    link: 'https://www.sciencedirect.com/science/article/pii/S187705092302207X'
  },
  {
    title: 'Smart Factories: The Future of Industry 4.0',
    date: 'May 5, 2025',
    excerpt: 'Smart factories combine IoT and robotics to create more intelligent, self-regulating systems.',
    link: '#'
  },
  {
  title: 'PLC Automation: The Brain Behind Modern Industrial Systems',
  date: 'July 10, 2025',
  excerpt: 'Discover how PLCs power robotics automation by ensuring real-time control, reliability, and seamless integration in smart factories.',
  link: '#'
  }
];

const Blog = () => (
  <motion.section
    id="blog"
    className="p-10 bg-gray-200"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
  >
    <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Blog</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-500 text-sm mb-2">{post.date}</p>
          <p className="text-gray-700 mb-4">{post.excerpt}</p>
          <a href={post.link} className="text-cyan-600 hover:underline font-semibold">Read More →</a>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Blog;
