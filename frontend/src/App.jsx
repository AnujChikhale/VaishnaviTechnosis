import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import Blog from './components/Blog';


<Helmet>
  <title>VaishnaviTechnosis | Robotics Automation Company in India</title>
  <meta name="description" content="VaishnaviTechnosis is a leading robotic automation company in India specializing in custom industrial robots, AI vision system integration, and smart factory automation solutions." />
  <meta name="keywords" content="robotic automation company in India, custom industrial robots, AI vision system integration, smart factory automation solutions, industrial robotics India, factory automation services" />
</Helmet>


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
      <a href="#blog" className="hover:text-cyan-400">Blog</a>

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
    <h1 className="text-5xl font-bold mb-12">Empowering Industries with Robotics Automation</h1>
    <p className="text-lg mb-8 mx-auto">
  At <strong>VaishnaviTechnosis</strong>, we specialize in transforming manual industrial operations into smart, automated systems. By integrating <em className="font-bold">advanced robotics and automation</em>, we help industries improve efficiency, product quality, and operational scalability. 

  Our expertise covers both hardware <em className="font-bold">automation and robotics</em> along with intelligent software, providing businesses a competitive edge in today’s rapidly evolving digital landscape. 

  We also offer <em className="font-bold">low cost robotics automation</em> solutions that are reliable, scalable, and tailored to your unique manufacturing needs and also provide <em className="font-bold">SCADA and HMI integration</em>.
</p>


    <h1 className="text-3xl font-bold mb-4">Explore Services</h1>
    <p className="mb-4">We offer a wide range of industrial services focused on <em className="font-bold">automation robotics</em> and smart factory solutions:</p>

    <a href="#services" className="bg-cyan-500 px-6 py-2 rounded-xl text-white hover:bg-cyan-600 transition">Explore Services</a>
  </motion.section>
);

const About = () => (
  <motion.section id="about" className="p-10 bg-white text-gray-900"
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
    <h2 className="text-4xl font-bold mb-6">About <strong>VaishnaviTechnosis</strong></h2>
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <p className="text-lg">We are a next-generation <strong>automation and robotics engineering</strong> company focused on building intelligent, automated solutions for modern industries. From small factories to large enterprises, we help you transition into the age of <strong>robotics automations</strong>.

Our engineers are trained with deep knowledge of the <strong>robotics and automation engineering</strong> syllabus used at top institutions like the University School of <strong>Automation and Robotics</strong>. This strong academic foundation helps us create innovative real-world systems for complex industrial challenges.</p>
      <img src="/assets/robot.png" alt="About Robotics" className="rounded-2xl shadow-md" />
    </div>
    <h2 className="text-4xl font-bold mb-6">What is <strong>Robotics and Automation</strong>?</h2>
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <p className="text-lg"><strong>Robotics and automation</strong> is the integration of mechanical systems, electronics, <strong>AI</strong>, and software to automate tasks that were traditionally performed by humans. These systems:

<strong>Increase speed and accuracy</strong>

<strong>Reduce human error</strong>

<strong>Improve safety in hazardous environments</strong>

<strong>Cut operational costs</strong>

With the rise of <strong>robotics process automation</strong> and intelligent hardware, industries are becoming more productive and future-ready.

For students and professionals, understanding what is <strong>robotics and automation</strong> is crucial to stay ahead in the evolving job market.</p>
    </div>
  </motion.section>
);


const Projects = () => {
  const projects = [
    {
      title: "Smart Assembly Line",
      desc: "We fully automated a vehicle assembly line using collaborative robotics. The result: faster production, better consistency, and reduced labor cost. This project follows principles from modern <strong>robotics and automation engineering</strong> syllabi.",
      images: [
        "/assets/presslayout.jpeg",
        "/assets/pickplace.jpeg",
        "/assets/roboticline.jpeg",
      ],
    },
    {
      title: "AI-Based Quality Inspection",
      desc: "We implemented <strong>AI</strong>-driven <strong>machine vision</strong> systems for real-time defect detection. This solution replaced slow and inaccurate manual checks, improving throughput by 40%.",
      images: ["/assets/ai-quality-checking.webp",
        "/assets/qc.png"
      ],
    },
    {
      title: "Robotic Packaging System",
      desc: "In the food industry, we deployed <strong>automation robotics</strong> for high-speed packaging and sorting. These robots improved hygiene, accuracy, and operational speed.",
      images: ["/assets/robot-cell.png",
        "/assets/robot-cell2.webp"
      ],
    },
    {
      title: "Robotic Welding Station",
      desc: "We designed and integrated <strong>robotic welders</strong> with <strong>motion control</strong> for a metal fabrication facility. The system produced cleaner welds with 95% consistency and improved worker safety.",
      images: ["/assets/welding-robotics-automation.jpg",
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
      <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: project.desc }} />
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
          desc: 'Our <strong>robotics process automation</strong> solutions streamline repetitive business processes like inventory updates, report generation, and order tracking. These software bots operate with unmatched precision and zero fatigue.',
          img: '/assets/rpa.jpg'
        },
        {
          title: 'Industrial Robotics Integration',
          desc: 'We help factories evolve by embedding <strong>automation robotics</strong> into their systems. From <strong>robotic pick-and-place</strong> units to complex multi-axis machines, we integrate high-performance systems with ease and precision.',
          img: '/assets/industrialrobotics.jpg'
        },
        {
          title: 'AI & Machine Vision',
          desc: 'We merge <strong>robotics and automation</strong> with <strong>AI</strong> to create real-time defect detection and sorting systems. Our <strong>machine vision robotics</strong> offer extreme accuracy and improve quality control like never before.',
          img: '/assets/aimachine.webp'
        },
        {
          title: 'PLC Programming',
          desc: 'We provide professional PLC programming services tailored for industrial automation.Our solutions enable seamless control and real-time monitoring of machines and systems.We specialize in integrating PLCs with robotics to enhance productivity and precision.Supporting top platforms like Siemens, Allen-Bradley, and Mitsubishi.Optimize your operations with reliable, scalable automation logic.',
          img: '/assets/plc.jpg'
        },
        {
          title: 'Electric Panel wiring',
          desc: 'We offer expert electric panel wiring services for industrial and automation projects.Our panels are designed for safety, efficiency, and seamless machine integration.We ensure precise wiring and layout to support robotics and automated systems.Using quality components and standards-compliant practices.Enhance reliability and control with professionally wired electric panels.',
          img: '/assets/electricpanelwiring.jpeg'
        },
        {
          title: 'Smart Factory Solutions',
          desc: 'Our <strong>Smart Factory</strong> offering is the future of <strong>automation and robotics</strong>. With real-time dashboards, sensor integration, and predictive analysis, these environments use <strong>robotics automations</strong> to stay ahead of the curve.',
          img: '/assets/sfs.jpg'
        },
        {
          title: 'HMI & SCADA Integration',
          desc: 'Our <strong>HMI & SCADA Integration</strong> services bridge the gap between operators and automation systems. By delivering real-time visualizations, control interfaces, and data monitoring, we enable efficient decision-making and seamless management of complex <strong>robotics automation</strong> environments.',
          img: '/assets/HMI.jpg'
        },
        
        {
          title: 'Maintenance & Support',
          desc: 'We provide dedicated support for all deployed <strong>automation robotics</strong> systems. Preventive maintenance, on-call troubleshooting, and periodic system audits keep your automation running smoothly.',
          img: '/assets/maintainance.jpg'
        },
        {
          title: 'Robotic Spares & Repair',
          desc: 'High-quality <strong>robotic spare parts</strong> and <strong>repair services</strong> to keep your systems running.',
          img: '/assets/robotspare.png'
        }
      ].map((service, i) => (
        <motion.div key={i} className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition"
          whileHover={{ scale: 1.03 }}>
          <img src={service.img} alt={service.title} className="w-full h-40 object-cover rounded-xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: service.desc }} />
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const Highlights = () => (
  <motion.section
    id="blog"
    className="p-10 bg-gray-50 text-gray-800"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
  >
    <h2 className="text-4xl font-bold mb-6 text-center">
      📘 Empowering the Future with <strong>Robotics Intelligence</strong>
    </h2>
    <p className="text-lg mb-6 text-center max-w-4xl mx-auto">
      At <strong>VaishnaviTechnosis</strong>, knowledge drives our <strong>robotics and automations</strong> journey. From cutting-edge <strong>robotics and automation course</strong> material to in-depth understanding of <strong>automation robotics</strong> trends and the latest <strong>robotics process automation</strong> tools — we combine theory with precision engineering.
    </p>

    <h3 className="text-3xl font-semibold mt-10 mb-4">💡 Why <strong>VaishnaviTechnosis</strong>?</h3>
    <ul className="space-y-3 list-disc list-inside">
      <li>
        <strong>✅ Domain Experts:</strong> We bring deep expertise in <strong>robotics and automation engineering</strong> — from design to deployment.
      </li>
      <li>
        <strong>✅ Scalable & Smart:</strong> Our <strong>robotics automations</strong> adapt to your industry needs — whether precision, speed, or <strong>AI vision</strong> integration.
      </li>
      <li>
        <strong>✅ Curriculum-Driven R&D:</strong> We align with the latest <strong>robotics and automation engineering syllabus</strong> to ensure every solution is educationally and industrially relevant.
      </li>
      <li>
        <strong>✅ Turnkey Deployment:</strong> Complete <strong>automation and robotics</strong> solutions — from consultation to cloud-connected machines.
      </li>
      <li>
        <strong>✅ Learning-Backed Engineering:</strong> We mentor careers through the best <strong>robotics and automation courses</strong> and salary insights.
      </li>
    </ul>

    <h3 className="text-3xl font-semibold mt-10 mb-4">👨‍🎓 For Students & Learners</h3>
    <p className="text-lg mb-4">
      Aspiring to join the world of <strong>robotics and automation engineering</strong>? We guide your academic journey with:
    </p>
    <ul className="list-disc list-inside space-y-2">
      <li>Live industrial exposure and internship opportunities</li>
      <li>Hands-on experience with <strong>robotics process automation</strong> software and hardware</li>
      <li>Consultation for selecting the ideal <strong>robotics and automation course</strong> based on your goals</li>
      <li>Insightful data on <strong>robotics and automation engineering salary</strong> in India and abroad</li>
    </ul>

    <p className="text-xl font-bold mt-10 text-center">
      🎯 At <strong>VaishnaviTechnosis</strong>, we don’t just build machines — we build futures.
    </p>
  </motion.section>
);


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false); // New loading state

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true); // Start loading

    try {
      const res = await fetch('https://vaishnavitechnosis.onrender.com/api/contact', {
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
    } finally {
      setIsSending(false); // Stop loading
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
      <p>Have questions about <em className="font-bold">automation and robotics?</em></p>
      <p className="text-lg mb-8 text-gray-700">
        📞 Call us at: <a href="tel:9075849811" className="text-cyan-600 font-semibold hover:underline">9075849811</a>
      </p>
      <p className="mb-4"><strong>📧 Send us a message</strong> — We’re ready to help you explore the future of <em className="font-bold">robotics and automation engineering.</em>

We also offer informational sessions for those seeking insights into:

The best <em className="font-bold">robotics and automation</em> course

Understanding <em className="font-bold">robotics and automation</em> salary trends

Reviewing the <em className="font-bold ">automation and robotics engineering</em> syllabus</p>
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
            disabled={isSending}
            className={`px-6 py-2 rounded-xl transition text-white ${
              isSending ? 'bg-gray-400 cursor-not-allowed' : 'bg-cyan-600 hover:bg-cyan-700'
            }`}
          >
            {isSending ? 'Sending...' : 'Send Message'}
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
      <Highlights/>
      <Contact />
      <Blog />
      <Footer />
    </div>
  </div>
);

export default App;
