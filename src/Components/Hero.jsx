// import ProfilePic from '../assets/profile.jpg';
// import { motion } from 'motion/react';
// import { Typewriter } from 'react-simple-typewriter';
// import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

// const socials = [
//   {
//     icon: <FaLinkedin />,
//     url: '#',
//     label: 'LinkedIn',
//   },
//   {
//     icon: <FaGithub />,
//     url: 'https://github.com/Shinwari25',
//     label: 'GitHub',
//   },
//   {
//     icon: <FaEnvelope />,
//     url: 'mailto:obaidshinwaristudy22@gmail.com',
//     label: 'Email',
//   },
// ];

// const container = (delay) => ({
//   hidden: { x: -40, opacity: 0 }, // smaller offset for mobile
//   visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay } },
// });

// const Hero = () => {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-visible bg-neutral-900"
//     >
//       {/* Subtle animated glow background (kept behind with -z-10) */}
//       <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-br from-indigo-900/40 via-fuchsia-900/20 to-sky-900/40" />

//       <div className="w-full px-4 sm:px-6 lg:px-10 py-20 lg:py-0">
//         <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 items-center lg:items-stretch">
//           {/* Text Column */}
//           <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
//             <motion.h1
//               variants={container(0)}
//               initial="hidden"
//               animate="visible"
//               className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg"
//             >
//               Obaidullah Shinwari
//             </motion.h1>

//             {/* Gradient typed subtitle */}
//             <motion.span
//               variants={container(0.15)}
//               initial="hidden"
//               animate="visible"
//               className="mt-3 inline-block bg-gradient-to-r from-indigo-300 via-slate-200 to-pink-300 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight"
//             >
//               <Typewriter
//                 words={["Full Stack Developer", "MERN Stack Developer"]}
//                 loop={0}
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={90}
//                 deleteSpeed={60}
//                 delaySpeed={1400}
//               />
//             </motion.span>

//             <motion.p
//               variants={container(0.3)}
//               initial="hidden"
//               animate="visible"
//               className="max-w-xl text-neutral-200/90 text-sm sm:text-base lg:text-lg leading-7 font-light py-6"
//             >
//               Experienced MERN Stack Developer with 2+ years of hands-on
//               experience creating responsive, performance-driven web
//               applications. Proficient in frontend technologies including
//               React.js and Tailwind CSS, along with backend development using
//               Node.js, Express.js, and MongoDB. Skilled in designing and
//               implementing RESTful APIs for full-stack solutions, with
//               additional expertise in Flutter for cross-platform mobile
//               development.
//             </motion.p>

//             {/* CTA Button */}
//             <motion.a
//               href="#contact"
//               variants={container(0.45)}
//               initial="hidden"
//               animate="visible"
//               className="inline-block mt-2 px-6 py-3 sm:px-8 bg-indigo-600 hover:bg-pink-500 transition-colors duration-300 text-white font-semibold rounded-lg shadow-lg"
//             >
//               Contact Me
//             </motion.a>

//             {/* Social Icons */}
//             <motion.div
//               variants={container(0.6)}
//               initial="hidden"
//               animate="visible"
//               className="flex gap-5 sm:gap-6 mt-6"
//             >
//               {socials.map((social) => (
//                 <a
//                   key={social.label}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={social.label}
//                   className="text-xl sm:text-2xl text-neutral-300 hover:text-pink-400 transition-colors duration-200"
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </motion.div>
//           </div>

//           {/* Profile Image */}
//           <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end mt-2 lg:mt-0">
//             <motion.div
//               initial={{ x: 40, opacity: 0, rotate: 3 }}
//               animate={{ x: 0, opacity: 1, rotate: 0 }}
//               transition={{ duration: 0.9, delay: 0.4 }}
//               className="relative rounded-2xl shadow-2xl group"
//             >
//               <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-indigo-400/30 via-white/10 to-pink-400/30 blur-xl opacity-60" />
//               <img
//                 src={ProfilePic}
//                 alt="profile"
//                 width="320"
//                 className="rounded-2xl border border-white/20 sm:border-2 shadow-lg group-hover:scale-105 transition-transform duration-300"
//                 style={{
//                   boxShadow:
//                     "0 8px 32px 0 rgba(60,60,90,0.18), 0 0 40px 0 rgba(139,92,246,0.15), 0 0 80px 0 rgba(236,72,153,0.10)",
//                   background: "rgba(255,255,255,0.03)",
//                 }}
//               />
//               <div className="absolute inset-0 rounded-2xl bg-white/5 pointer-events-none" />
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import ProfilePic from '../assets/profile.jpg';
import { motion } from 'motion/react';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const socials = [
  {
    icon: <FaLinkedin />,
    url: '#',
    label: 'LinkedIn',
    color: 'hover:text-blue-400',
  },
  {
    icon: <FaGithub />,
    url: 'https://github.com/Shinwari25',
    label: 'GitHub',
    color: 'hover:text-gray-300',
  },
  {
    icon: <FaWhatsapp />,
    url: 'https://wa.me/93782900218', // Replace with your WhatsApp number
    label: 'WhatsApp',
    color: 'hover:text-green-500',
  },
  {
    icon: <FaEnvelope />,
    url: 'mailto:obaidshinwaristudy22@gmail.com',
    label: 'Email',
    color: 'hover:text-pink-400',
  },
];

const container = (delay) => ({
  hidden: { x: -40, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay } },
});

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-visible bg-neutral-900"
    >
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-900/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-900/20 rounded-full blur-3xl" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-10 py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 items-center lg:items-stretch">
          {/* Text Column */}
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-3xl mt-4 md:mt-6 lg:mt-8 sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg"
            >
              Obaidullah Shinwari
            </motion.h1>

            {/* Gradient typed subtitle */}
            <motion.span
              variants={container(0.15)}
              initial="hidden"
              animate="visible"
              className="mt-2 inline-block bg-gradient-to-r from-indigo-300 via-slate-200 to-pink-300 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight min-h-[60px]"
            >
              <Typewriter
                words={["Full Stack Web Developer", "MERN Stack Developer", "Flutter Developer"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={1400}
              />
            </motion.span>
<motion.div
  initial={{ y: 10, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.8 }}
  className="inline-flex items-center gap-2 mt-1 bg-gradient-to-r from-indigo-600/20 to-pink-500/20 border border-indigo-500/30 text-indigo-200 px-4 py-2 rounded-full text-sm font-medium"
>
  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
  Available for work
</motion.div>
            <motion.p
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="max-w-xl text-neutral-200/90 text-sm sm:text-base lg:text-lg leading-7 font-light py-6"
            >
              Experienced MERN Stack Developer with 2+ years of hands-on
              experience creating responsive, performance-driven web
              applications. Proficient in frontend technologies including
              React.js and Tailwind CSS, along with backend development using
              Node.js, Express.js, and MongoDB. Skilled in designing and
              implementing RESTful APIs for full-stack solutions, with
              additional expertise in Flutter for cross-platform mobile
              development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={container(0.45)}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <a
                href="#contact"
                className="inline-block px-6 py-3 sm:px-8 bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-pink-500 hover:to-indigo-600 transition-all duration-300 text-white font-semibold rounded-lg shadow-lg hover:shadow-indigo-500/25"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="inline-block px-6 py-3 sm:px-8 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                View Projects
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="flex gap-5 sm:gap-6 mt-4"
            >
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -5 }}
                  className={`text-2xl sm:text-3xl text-neutral-300 ${social.color} transition-all duration-200 p-2 rounded-full bg-white/5 hover:bg-white/10`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end mt-2 lg:mt-8">
            <motion.div
              initial={{ x: 40, opacity: 0, rotate: 3 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/30 via-pink-500/20 to-transparent blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              
              {/* Border gradient */}
              <div className="p-1 rounded-2xl bg-gradient-to-br from-indigo-500/40 via-transparent to-pink-500/40">
                <img
                  src={ProfilePic}
                  alt="Obaidullah Shinwari - Full Stack Developer"
                  width="340"
                  height="340"
                  className="rounded-2xl border-2 border-white/20 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300 object-cover"
                  style={{
                    boxShadow:
                      "0 8px 32px 0 rgba(60,60,90,0.18), 0 0 40px 0 rgba(139,92,246,0.15), 0 0 80px 0 rgba(236,72,153,0.10)",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
