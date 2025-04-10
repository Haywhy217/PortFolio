import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Homepage = () => {
  useEffect(() => {
    document.title = "My Portfolio";
  }, []);

  const projects = [
    {
      id: 1,
      title: "Pula Agricultural Insurance and Technology Solutions",
      description: "A fully responsive 6-page website by translated from a Figma design into code using React and Tailwind CSS. Ensured pixel-perfect accuracy with smooth navigation, clean layout structure, and consistent styling across all pages. Focused on building reusable components, optimized performance, and a seamless user experience across different screen sizes.",
      siteLink: "https://pula-solutions.vercel.app/",
      githubLink: "https://github.com/Haywhy217/pula-solutions",
      image: '/pula sc.png',
    },
    {
      id: 2,
      title: "Testimonial Slider",
      description: "A clean, responsive testimonial slider built with HTML, CSS, and JavaScript. It uses DOM manipulation and smooth transitions to switch between cards. Perfect for showcasing user reviews and easily integrating interactive feedback sections into modern web applications.",
      siteLink: "https://testimonial-slider-rouge.vercel.app/",
      githubLink: "https://github.com/Haywhy217/Testimonial_Slider",
      image: "/test.png",
    },
    {
      id: 3,
      title: "Expense Tracking APP",
      description: "A responsive full-stack expense tracker built with React(Frontend) and Django (Backend), offering secure JWT authentication, full CRUD operations, and real-time filtering for income and expenses. It leverages React state management for dynamic UI updates and Django ORM for robust, user-specific data handling. Includes intuitive features like entry editing, deletion, and validation. Optimized for all devices, making personal finance management seamless and efficient.",
      siteLink: "https://trackly-ten.vercel.app/",
      githubLink: "https://github.com/Haywhy217/Personal-ExpenseTracker",
      image: "/TrackingApp.png",
    },
    {
      id: 4,
      title: "CarryGo Logistics Website",
      description: "A collaborative logistics website built using HTML, CSS, TailwindCSS, JavaScript, and React.js. This project emphasized responsive UI development, component-based architecture, and real-time team collaboration. My contributions included building and styling key frontend components, managing Git version control, and resolving merge conflicts. It was a hands-on introduction to React and agile teamwork in a multi-developer environment.",
      siteLink: "https://carrygologistics-ayomides-projects-0731d5b7.vercel.app/",
      githubLink: "https://github.com/Haywhy217/project",
      image: "/Carrygosite.png",
    },
  ];
  


  return (
    <div className="font-sans text-gray-800 ovrflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-3">
        <div className="max-w-6xl mx-auto px-2 py-3 flex justify-between items-center">
          <h1 className="text-sm md:text-xl font-bold">Ayomide Olanipekun</h1>
          <div className="space-x-5">

            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white to-gray-100 p-10">
          <motion.img
            src="/image.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mb-6 object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm Ayo
          </motion.h1>
          <motion.p
            className="text-xl text-center max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A frontend developer passionate about creating beautiful and functional web experiences.
          </motion.p>
        </section>

        {/* About Section */}
        <section className="py-20 px-10 bg-white" id="about">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, x: -100}}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
            <p className="text-lg leading-relaxed">
            I’m a full-stack developer with a strong emphasis on frontend technologies such as HTML, CSS, JavaScript, TypeScript, React, and Next.js. While I have solid experience working with Django and Python on the backend, my primary focus and passion lie in building clean, responsive, and user-friendly interfaces. I also have experience with no-code tools like WordPress and Wix. I enjoy creating scalable and efficient applications that deliver smooth user experiences. I'm committed to staying up-to-date with emerging technologies and continuously growing my skill set to craft modern, innovative solutions.
            </p>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-10 bg-gray-100" id="projects">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map(({ id, title, description, siteLink, githubLink, image }) => (
                <motion.div
                  key={id}
                  className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between"
                  whileHover={{ scale: 1.02 }}
                >
                  <img src={image} alt={title} className="rounded-md mb-4 w-full h-48 object-cover" />
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{description}</p>
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={siteLink}
                      className="text-blue-600 hover:underline text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Site
                    </a>
                    <a
                      href={githubLink}
                      className="text-blue-600 hover:underline text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Code
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-10 bg-white text-center" id="contact">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-4">Contact</h2>
            <p className="text-lg mb-4">
              Contact me:{" "}
              <a href="mailto:yourname@example.com" className="text-blue-600 underline">
               olanipekunayomide217@gmail.com
              </a>
            </p>
            <div className="flex justify-center gap-6 text-2xl mt-6">
      <a href="https://github.com/Haywhy217" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/ayomide-olanipekun-83274b22b/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600">
        <FaLinkedin />
      </a>
      <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600">
        <FaTwitter />
      </a>

         
    </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
