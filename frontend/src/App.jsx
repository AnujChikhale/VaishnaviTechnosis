import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useRef, useEffect, useState } from "react";

const Navbar = () => (
  <nav className="bg-gray-900 text-white p-4 flex flex-wrap justify-between items-center shadow-md fixed w-full top-0 z-50">
    <div className="flex items-center space-x-2">
      <img src="/assets/logo.png" className='h-10 rounded-[50%]' alt="logo" />
      <span className="text-xl font-bold">VaishnaviTechnosis</span>
    </div>
    <div className="space-x-0 sm:space-x-4 flex flex-col sm:flex-row gap-2 sm:gap-0 text-center">
      <a href="#home" className="hover:text-cyan-400">Home</a>
      <a href="#about" className="hover:text-cyan-400">About</a>
      <a href="#projects" className="hover:text-cyan-400">Projects</a>
      <a href="#services" className="hover:text-cyan-400">Services</a>
      <a href="#contact" className="hover:text-cyan-400">Contact</a>
    </div>
  </nav>
);

const Home = () => (
  <motion.section
    id="home"
    className="text-center py-32 px-6 bg-gradient-to-r from-slate-900 to-slate-700 text-white"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <img src="/assets/logo.png" alt="Robotics Banner" className="rounded-[40%] mx-auto mb-8 shadow-lg h-40 sm:h-55" />
    <h1 className="text-5xl font-bold mb-12">Empowering Industries with Robotic Automation</h1>
    <p className="text-lg mb-8 max-w-3xl mx-auto">VaishnaviTechnosis transforms manual processes into intelligent automation solutions using state-of-the-art robotics technology.</p>
    <a href="#services" className="bg-cyan-500 px-6 py-2 rounded-xl text-white hover:bg-cyan-600 transition">Explore Services</a>
  </motion.section>
);

const About = () => (
  <motion.section id="about" className="p-10 bg-white text-gray-900"
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
    <h2 className="text-4xl font-bold mb-6">About Us</h2>
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <p className="text-lg">VaishnaviTechnosis is dedicated to revolutionizing the industrial sector by integrating cutting-edge robotic systems...</p>
      <img src="/assets/robot.png" alt="About Robotics" className="rounded-2xl shadow-md" />
    </div>
  </motion.section>
);


const Projects = () => {
  const projects = [
    {
      title: "Smart Assembly Line",
      desc: "Automated an entire vehicle assembly line using collaborative robots.",
      images: [
        "/assets/presslayout.jpeg",
        "/assets/pickplace.jpeg",
        "/assets/roboticline.jpeg",
      ],
    },
    {
      title: "AI-Based Quality Inspection",
      desc: "Developed AI vision systems for defect detection in manufacturing.",
      images: ["/assets/ai-quality-checking.webp",
        "/assets/qc.png"
      ],
    },
    {
      title: "Robotic Packaging System",
      desc: "Implemented high-speed robotic arms for packaging in food industry.",
      images: ["/assets/robot-cell.png",
        "/assets/robot-cell2.webp"
      ],
    },
    {
      title: "Robotic Welding Station",
      desc: "Integrated robotic welders with precision controls in metal fabrication.",
      images: ["/assets/robotic-welding.jpg",
        "/assets/robotic-welding.jpg"
      ],
      
      
    },
  ];

  return (
    <motion.section
      id="projects"
      className="p-10 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Projects Completed</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </motion.section>
  );
};

const ProjectCard = ({ project }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
  });

  const containerRef = useRef();
  const timerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Autoplay only while hovering
  useEffect(() => {
    if (isHovered) {
      timerRef.current = setInterval(() => {
        instanceRef.current?.next();
      }, 2000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isHovered, instanceRef]);

  return (
    <motion.div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-6 bg-white rounded-2xl shadow hover:shadow-xl transition"
      whileHover={{ scale: 1.03 }}
    >
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider rounded-xl mb-4">
        {project.images.map((image, idx) => (
          <div className="keen-slider__slide" key={idx}>
            <img
              src={image}
              alt={`${project.title} ${idx + 1}`}
              className="w-full h-40 object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/80 p-1 rounded-full shadow hover:bg-white"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/80 p-1 rounded-full shadow hover:bg-white"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>

      <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-700">{project.desc}</p>
    </motion.div>
  );
};

const Services = () => (
  <motion.section id="services" className="p-10 bg-gray-100"
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
    <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: 'Robotic Process Automation',
          desc: 'Automate repetitive tasks with intelligent software bots.',
          img: '/assets/rpa.jpg'
        },
        {
          title: 'Industrial Robotics Integration',
          desc: 'Deploy advanced robotics into your production line.',
          img: '/assets/industrialrobotics.jpg'
        },
        {
          title: 'AI & Machine Vision',
          desc: 'Use AI to enhance quality control and process optimization.',
          img: '/assets/aimachine.webp'
        },
        {
          title: 'Custom Robotics Development',
          desc: 'Tailor-built robotic systems for unique industrial needs.',
          img: '/assets/customrobotics.webp'
        },
        {
          title: 'Smart Factory Solutions',
          desc: 'IoT-enabled robotics for real-time smart manufacturing.',
          img: '/assets/sfs.jpg'
        },
        {
          title: 'Maintenance & Support',
          desc: '24/7 support and preventive maintenance for robotics systems.',
          img: '/assets/maintainance.jpg'
        },
        {
          title: 'Robotic Spares & Repair',
          desc: 'High-quality robotic spare parts and repair services to keep your systems running.',
          img: '/assets/maintainance.jpg'
        }
      ].map((service, i) => (
        <motion.div key={i} className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition"
          whileHover={{ scale: 1.03 }}>
          <img src={service.img} alt={service.title} className="w-full h-40 object-cover rounded-xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-700">{service.desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        alert('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(`❌ Error: ${data.error || 'Failed to send message.'}`);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('❌ Something went wrong. Please try again.');
    }
  };

  return (
    <motion.section
      id="contact"
      className="p-10 bg-white mb-53"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
      <p className="text-lg mb-8 text-gray-700">
        📞 Call us at: <a href="tel:9075849811" className="text-cyan-600 font-semibold hover:underline">9075849811</a>
      </p>
      <div className="flex flex-col md:flex-row items-start gap-10">
        <form className="w-full max-w-xl space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-600 text-white px-6 py-2 rounded-xl hover:bg-cyan-700 transition"
          >
            Send Message
          </button>
        </form>

        <video className="rounded-xl shadow-lg w-full md:w-[600px]" controls>
          <source src="/assets/video11.mp4" type="video/mp4" />
        </video>
      </div>
    </motion.section>
  );
};


const Footer = () => (
  <motion.footer
    className="bg-gray-900 text-white flex flex-col sm:flex-row justify-between items-center text-center p-4 gap-4 sm:gap-0"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.6 }}
  >
    <div>&copy; {new Date().getFullYear()} VaishnaviTechnosis. All rights reserved.</div>
    <a href="https://www.youtube.com/@VaishnaviTechnosis" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
      Visit our YouTube Channel
    </a>
  </motion.footer>
);

const App = () => (
  <div className="scroll-smooth">
    <Navbar />
    <div className="pt-24"> {/* Padding to prevent overlap with fixed navbar */}
      <Home />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  </div>
);

export default App;
