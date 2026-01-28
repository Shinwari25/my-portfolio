import AboutMe from '../assets/About.jpg';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section
      className="relative flex justify-center items-center py-16 lg:pb-28"
      id="about"
    >
      {/* Decorative blurred circle */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-pink-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Title with simple line below */}
        <div className="text-center my-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-wider text-white drop-shadow-lg">
            About <span className="text-pink-400">Me</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:space-x-32 items-center">
          {/* Image with subtle hover effects */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex items-center justify-center mb-10 lg:mb-0"
          >
            <div className="relative group">
              {/* Subtle border container */}
              <div className="p-1 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-pink-500/30 group-hover:from-pink-500/40 group-hover:to-indigo-500/40 transition-all duration-300">
                <img
                  src={AboutMe}
                  alt="About"
                  className="rounded-2xl shadow-2xl border-2 border-white/10 group-hover:border-white/20 transition-all duration-300 object-cover md:h-[500px] w-full group-hover:scale-[1.02]"
                  style={{
                    boxShadow:
                      "0 0 40px 0 rgba(139,92,246,0.25), 0 0 80px 0 rgba(236,72,153,0.15)",
                  }}
                />
              </div>
              
              {/* Simple glow on hover */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 pointer-events-none -z-10"></div>
            </div>
          </motion.div>
          
          <div className="w-full lg:w-1/2">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center items-center lg:items-start"
            >
              <div className="w-full md:p-4 text-neutral-200 bg-white/5 rounded-xl shadow-inner">
                <p className="max-w-lg tracking-wide text-base lg:text-lg leading-7 font-light px-6 py-6 lg:py-0 lg:px-0 mt-2">
                  I'm a passionate{" "}
                  <span className="text-indigo-400 font-medium">
                    full stack developer
                  </span>{" "}
                  dedicated to building efficient and user-friendly web
                  solutions. With{" "}
                  <span className="text-pink-400 font-medium">
                    2+ years
                  </span>{" "}
                  of experience, I've worked extensively with{" "}
                  <span className="text-indigo-300">
                    React, Node.js, Express.js, and both MongoDB and MySQL databases
                  </span>
                  .
                  <br />
                  <br />
                  My development journey is driven by a genuine curiosity about
                  how technology works and how it can solve real-world problems.
                  I enjoy collaborative environments where I can contribute to
                  meaningful projects, and when I'm not coding, you can find me{" "}
                  <span className="text-emerald-300">
                    experimenting with new frameworks, contributing to
                    open-source projects, or diving into tech tutorials to
                    expand my skills
                  </span>
                  .
                </p>
              </div>
              
              {/* Optional: Add a CV download button */}
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:from-pink-500 hover:to-indigo-600 transition-colors duration-300"
              >
                Download CV
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;