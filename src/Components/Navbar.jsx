// import logo from '../assets/mylogo.png';
// import { useState } from 'react';
// import { IoHomeOutline } from 'react-icons/io5';
// import { GiTechnoHeart } from 'react-icons/gi';
// import { IoCodeWorkingSharp } from 'react-icons/io5';

// const Navbar = () => {
//   const [isToggleOpen, setIsToggleOpen] = useState(false);
//   const toggleClose = () => setIsToggleOpen(false);

//   return (
//     <header
//       className="fixed top-0 left-0 w-full z-30 transition-all duration-300 "
//       id="navbar"
//     >
//       <div className="mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
//         <nav
//           aria-label="main navigation"
//           className="flex h-[4rem] items-stretch justify-between font-medium"
//           role="navigation"
//         >
//           {/* Brand logo */}
//           <a
//             id="WindUI"
//             aria-label="WindUI logo"
//             aria-current="page"
//             className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1 transition-transform hover:scale-105"
//             href="#hero"
//           >
//             <img
//               src={logo}
//               className=" w-12 drop-shadow-lg rounded-xl border-2 border-indigo-400 hover:border-pink-400 transition-all"
//               alt="Logo"
//             />
//           </a>
//           {/* Mobile trigger */}
//           <button
//             className={`relative order-10 block h-10 w-10 self-center lg:hidden`}
//             onClick={() => setIsToggleOpen(!isToggleOpen)}
//             aria-expanded={isToggleOpen ? 'true' : 'false'}
//             aria-label="Toggle navigation"
//           >
//             <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2  -translate-y-1/2 transform">
//               <span
//                 aria-hidden="true"
//                 className={`absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-indigo-400 transition-all duration-300 ${
//                   isToggleOpen ? 'rotate-45 translate-y-0 w-6' : ''
//                 }`}
//               ></span>
//               <span
//                 aria-hidden="true"
//                 className={`absolute block h-0.5 w-6 transform rounded-full bg-indigo-400 transition duration-300 ${
//                   isToggleOpen ? '-rotate-45' : ''
//                 }`}
//               ></span>
//               <span
//                 aria-hidden="true"
//                 className={`absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-indigo-400 transition-all duration-300 ${
//                   isToggleOpen ? 'w-0' : ''
//                 }`}
//               ></span>
//             </div>
//           </button>
//           {/* Navigation links */}
//           <ul
//             role="menubar"
//             aria-label="Select page"
//             className={`fixed top-0 left-0 w-full h-screen bg-neutral-950/80 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-lg font-semibold transition-all duration-300 z-20 lg:static lg:flex-row lg:h-auto lg:w-auto lg:bg-transparent lg:backdrop-blur-none lg:gap-0 lg:justify-end lg:items-center lg:translate-x-0 ${
//               isToggleOpen
//                 ? 'translate-x-0 opacity-100 pointer-events-auto'
//                 : '-translate-x-full opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto'
//             }`}
//           >
//             <li role="none">
//               <a
//                 onClick={toggleClose}
//                 role="menuitem"
//                 aria-haspopup="false"
//                 className="flex items-center gap-2 px-6 py-2 rounded-lg transition-all duration-200 text-neutral-300 hover:text-pink-400 hover:bg-neutral-800/60 focus:outline-none"
//                 href="#hero"
//               >
//                 <IoHomeOutline size={20} />
//                 <span>Home</span>
//               </a>
//             </li>
//             <li role="none">
//               <a
//                 onClick={toggleClose}
//                 role="menuitem"
//                 aria-haspopup="false"
//                 className="flex items-center gap-2 px-6 py-2 rounded-lg transition-all duration-200 text-neutral-300 hover:text-pink-400 hover:bg-neutral-800/60 focus:outline-none"
//                 href="#about"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="h-5 w-5"
//                   aria-label="Menu item icon"
//                   role="graphics-symbol"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
//                   />
//                 </svg>
//                 <span>About</span>
//               </a>
//             </li>
//             <li role="none">
//               <a
//                 onClick={toggleClose}
//                 role="menuitem"
//                 aria-haspopup="false"
//                 className="flex items-center gap-2 px-6 py-2 rounded-lg transition-all duration-200 text-neutral-300 hover:text-pink-400 hover:bg-neutral-800/60 focus:outline-none"
//                 href="#technologies"
//               >
//                 <GiTechnoHeart size={20} />
//                 <span>Skills</span>
//               </a>
//             </li>
//             <li role="none">
//               <a
//                 onClick={toggleClose}
//                 role="menuitem"
//                 aria-haspopup="false"
//                 className="flex items-center gap-2 px-6 py-2 rounded-lg transition-all duration-200 text-neutral-300 hover:text-pink-400 hover:bg-neutral-800/60 focus:outline-none"
//                 href="#projects"
//               >
//                 <IoCodeWorkingSharp size={25} />
//                 <span>Work</span>
//               </a>
//             </li>
//             {/* Contact button for mobile */}
//             <li className="lg:hidden">
//               <a
//                 onClick={toggleClose}
//                 href="#contact"
//                 className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 text-base font-semibold shadow-md transition duration-300 hover:from-pink-500 hover:to-indigo-500 focus-visible:outline-none"
//               >
//                 <span>Contact me</span>
//               </a>
//             </li>
//           </ul>
//           {/* Contact button for desktop */}
//           <div className="ml-auto hidden lg:flex items-center px-6 lg:ml-0 lg:p-0">
//             <a
//               onClick={toggleClose}
//               href="#contact"
//               className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 text-base font-semibold shadow-md transition duration-300 hover:from-pink-500 hover:to-indigo-500 focus-visible:outline-none"
//             >
//               <span>Contact me</span>
//             </a>
//           </div>
//         </nav>
//       </div>
//       {/* Glassmorphism overlay */}
//       <div className="absolute inset-0 -z-10 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg"></div>
//     </header>
//   );
// };

// export default Navbar;
import { useState, useEffect } from "react";
import {
  IoHomeOutline,
  IoCodeWorkingSharp,
  IoPersonOutline,
  IoMailOutline,
  IoMenu,
  IoClose,
  IoChevronForward,
} from "react-icons/io5";
import { GiTechnoHeart } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleClose = () => setIsToggleOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["hero", "about", "technologies", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home", icon: <IoHomeOutline className="w-5 h-5" /> },
    {
      id: "about",
      label: "About",
      icon: <IoPersonOutline className="w-5 h-5" />,
    },
    {
      id: "technologies",
      label: "Skills",
      icon: <GiTechnoHeart className="w-5 h-5" />,
    },
    {
      id: "projects",
      label: "Projects",
      icon: <IoCodeWorkingSharp className="w-5 h-5" />,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-neutral-950/95 backdrop-blur-xl shadow-2xl shadow-purple-500/10 border-b border-purple-500/20 py-2"
          : "bg-transparent py-4"
      }`}
      id="navbar"
    >
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
        <nav className="flex items-center justify-between h-14">
          {/* Brand logo */}
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            id="WindUI"
            aria-label="WindUI logo"
            aria-current="page"
            className="flex items-center gap-3 group cursor-pointer"
            href="#hero"
          >
            {/* <div className="relative">
              <img
                src={logo}
                className="w-12 h-12 rounded-xl border-2 border-indigo-400 group-hover:border-pink-400 transition-all duration-300 shadow-lg group-hover:shadow-pink-500/30"
                alt="Logo"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
            </div> */}
            <div className="">
              <span className="ml-4 text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portfolio
              </span>
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-500"></div>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:flex items-center gap-1"
          >
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-white bg-gradient-to-r from-indigo-500/20 to-pink-500/20"
                      : "text-neutral-300 hover:text-white hover:bg-neutral-800/50"
                  }`}
                  onClick={() => setActiveSection(item.id)}
                >
                  <span
                    className={`transition-transform duration-300 ${
                      activeSection === item.id ? "scale-110" : ""
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </a>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"
                  />
                )}
              </li>
            ))}
          </motion.ul>

          {/* Contact button for desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold overflow-hidden shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              <IoMailOutline className="w-5 h-5" />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-indigo-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <span className="relative z-10">Hire me</span>
            </a>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 hover:border-indigo-500/50 transition-all duration-300 group"
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            aria-expanded={isToggleOpen}
            aria-label="Toggle navigation"
          >
            <div className="relative w-6 h-6">
              <IoMenu
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-indigo-400 transition-all duration-300 ${
                  isToggleOpen ? "opacity-0 rotate-90" : "opacity-100"
                }`}
              />
              <IoClose
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-pink-400 transition-all duration-300 ${
                  isToggleOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                }`}
              />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
          </motion.button>
        </nav>
      </div>

      {/* Mobile Navigation Overlay - FIXED */}
      <AnimatePresence>
        {isToggleOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-neutral-950/95 backdrop-blur-xl z-40 lg:hidden"
            onClick={toggleClose}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
              className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-md px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800/50 p-4 sm:p-6 shadow-2xl overflow-hidden">
                {/* Mobile Header with Close */}
                <div className="flex items-center justify-between mb-6 px-2">
                  <div className="flex items-center gap-3">
                    {/* <img
                      src={logo}
                      className="w-10 h-10 rounded-xl border-2 border-indigo-400"
                      alt="Logo"
                    /> */}
                    <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Portfolio
                    </span>
                  </div>
                  <button
                    onClick={toggleClose}
                    className="p-2 rounded-lg bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors"
                    aria-label="Close menu"
                  >
                    <IoClose className="w-5 h-5 text-neutral-400" />
                  </button>
                </div>

                {/* Mobile Navigation Links - Clean Layout */}
                <div className="space-y-2 mb-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={toggleClose}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group ${
                          activeSection === item.id
                            ? "bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 text-white"
                            : "text-neutral-300 hover:text-white hover:bg-neutral-800/40"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`p-2 rounded-lg transition-all duration-300 ${
                              activeSection === item.id
                                ? "bg-gradient-to-r from-indigo-500/40 to-pink-500/40"
                                : "bg-neutral-800/60 group-hover:bg-neutral-700/60"
                            }`}
                          >
                            {item.icon}
                          </div>
                          <span className="font-medium">{item.label}</span>
                        </div>
                        <IoChevronForward
                          className={`w-4 h-4 transition-all duration-300 ${
                            activeSection === item.id
                              ? "text-pink-400"
                              : "text-neutral-500 group-hover:text-neutral-300"
                          }`}
                        />
                      </a>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Contact Button */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="px-2"
                >
                  <a
                    href="#contact"
                    onClick={toggleClose}
                    className="flex items-center justify-center gap-3 w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 group"
                  >
                    <IoMailOutline className="w-5 h-5" />
                    <span>Contact Me</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <IoChevronForward className="w-4 h-4" />
                    </div>
                  </a>
                </motion.div>

                {/* Footer Note */}
                <div className="mt-6 pt-4 border-t border-neutral-800/50">
                  <p className="text-center text-neutral-500 text-xs px-2">
                    Tap outside or press close to exit menu
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;