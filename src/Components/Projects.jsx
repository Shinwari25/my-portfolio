

import PROJECTS from '../constants';
import { motion } from 'motion/react';
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden" id="projects">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
           <div className="h-[2px] mt-2 w-24 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto rounded-full"></div>
          {/* <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6 rounded-full"></div> */}
         </motion.div> 

        {/* Projects List - Alternating Layout */}
        <div className="space-y-32">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 50 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col lg:flex-row items-center gap-12 lg:gap-16 group ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Left Side - Image (Alternates) */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -150 : 150, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: isEven ? 0.2 : 0.4,
                    type: "spring",
                    stiffness: 60 
                  }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 relative"
                >
                  {/* Project Number */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="absolute -top-6 -left-6 z-20"
                  >
                    <span className="text-7xl font-bold text-neutral-800/50">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </motion.div>
                  
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-3xl border-2 border-neutral-800/50 group-hover:border-pink-500/50 transition-all duration-500">
                    {/* Main Image with Parallax Effect */}
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent opacity-60"></div>
                    
                    {/* Animated Gradient Overlay on Hover */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-purple-500/0 to-transparent"
                      whileHover={{ 
                        background: "linear-gradient(45deg, rgba(236, 72, 153, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)"
                      }}
                      transition={{ duration: 0.5 }}
                    ></motion.div>
                    
                    {/* Floating Elements */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-2xl hover:shadow-pink-500/30 hover:scale-105 transition-all duration-300"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        <span>Live Preview</span>
                      </a>
                    </motion.div>
                    
                    {/* Corner Accents */}
                    <motion.div 
                      className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-pink-500/50 rounded-tl-2xl"
                      whileHover={{ width: "2rem", height: "2rem" }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                    <motion.div 
                      className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500/50 rounded-br-2xl"
                      whileHover={{ width: "2rem", height: "2rem" }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  </div>
                </motion.div>

                {/* Right Side - Content (Alternates) */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 150 : -150 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: isEven ? 0.4 : 0.2,
                    type: "spring",
                    stiffness: 60 
                  }}
                  viewport={{ once: true }}
                  className="lg:w-1/2"
                >
                  <div className="space-y-6">
                    {/* Project Category with Animation */}
                    {project.category && (
 <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-neutral-800 to-neutral-900 border border-neutral-700/50"
                    >
                      <motion.div 
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      ></motion.div>
                      <span className="text-sm font-medium text-neutral-400">
                        {project.category}
                      </span>
                    </motion.div>
                    )}
                    
                   

                    {/* Project Title with Stagger Animation */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-3xl lg:text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                    >
                      {project.title}
                    </motion.h3>

                    {/* Project Description with Stagger */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-neutral-400 text-lg leading-relaxed"
                    >
                      {project.description}
                    </motion.p>

                    {/* Technologies Used with Stagger */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <h4 className="text-sm font-semibold text-neutral-500 mb-3 uppercase tracking-wider">
                        Built With
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.6 + (idx * 0.1) }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="relative px-4 py-2 rounded-lg bg-gradient-to-r from-neutral-800/80 to-neutral-900/80 border border-neutral-700/50 text-neutral-300 text-sm font-medium hover:border-pink-500/50 hover:text-pink-300 transition-all duration-300 cursor-default"
                          >
                            {tech}
                            <div className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transform -translate-x-1/2 group-hover:w-3/4 transition-all duration-300"></div>
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Action Buttons with Stagger */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="flex flex-wrap items-center gap-4 pt-6"
                    >
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:from-pink-600 hover:to-purple-700 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300 group/btn"
                      >
                        <span>Visit Live Site</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        >
                          <FaArrowRight className="w-4 h-4" />
                        </motion.div>
                      </motion.a>
                      
                      {project.githubLink && (
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-800/50 border border-neutral-700/50 text-neutral-300 font-medium hover:bg-neutral-800 hover:text-white hover:border-neutral-600 transition-all duration-300"
                        >
                          <FaGithub className="w-5 h-5" />
                          <span>Source Code</span>
                        </motion.a>
                      )}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Connecting Line with Animation */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent origin-center"
                ></motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-24"
        >
          <motion.a
            href="https://github.com/Shinwari25"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-neutral-800 to-neutral-900 border-2 border-neutral-700/50 text-neutral-300 font-semibold hover:text-white hover:border-pink-500/50 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-purple-500/10 transition-all duration-300 group/more"
          >
            <div className="relative">
              <FaGithub className="w-6 h-6" />
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-0 group-hover/more:opacity-30 transition-opacity duration-300"></div>
            </div>
            <span>Explore More on GitHub</span>
            <motion.svg
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
