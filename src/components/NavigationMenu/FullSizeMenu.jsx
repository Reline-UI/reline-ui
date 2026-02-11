"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Menu() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    {
      title: "Home",
      image:
        "https://images.pexels.com/photos/10839549/pexels-photo-10839549.jpeg",
    },
    {
      title: "About",
      image:
        "https://images.pexels.com/photos/35712028/pexels-photo-35712028.jpeg",
    },
    {
      title: "Products",
      image:
        "https://images.pexels.com/photos/35965247/pexels-photo-35965247.jpeg",
    },
    {
      title: "Blog",
      image:
        "https://images.pexels.com/photos/35647124/pexels-photo-35647124.jpeg",
    },
    {
      title: "Contact",
      image:
        "https://images.pexels.com/photos/28865273/pexels-photo-28865273.jpeg",
    },
  ];

  /* ---------------- Animation Variants ---------------- */

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <>
      {/* Navbar (Hidden When Open) */}
      {!open && (
        <nav
          className="w-full flex justify-between items-center px-6 py-5 border-b z-50
          bg-[#FFFFFF] border-[#E4E4E7]
          dark:bg-[#09090B] dark:border-[#27272A] "
        >
          {/* Brand */}
          <span className="text-2xl tracking-tight text-[#09090B] dark:text-white">
            Reline
          </span>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="relative w-8 h-6 flex flex-col justify-between"
          >
            <div className="h-[2px] w-full bg-[#09090B] dark:bg-[#FFFFFF]" />
            <div className="h-[2px] w-full bg-[#09090B] dark:bg-[#FFFFFF]" />
            <div className="h-[2px] w-full bg-[#09090B] dark:bg-[#FFFFFF]" />
          </button>
        </nav>
      )}

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#FFFFFF] dark:bg-[#09090B] "
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
                className="relative w-6 h-6"
              >
                <span className="absolute top-1/2 left-0 w-full h-[2px] bg-[#09090B] dark:bg-[#FFFFFF] rotate-45" />
                <span className="absolute top-1/2 left-0 w-full h-[2px] bg-[#09090B] dark:bg-[#FFFFFF] -rotate-45" />
              </motion.div>
            </button>

            <div className="w-full h-full flex flex-col md:flex-row ">
              {/* LEFT IMAGE PREVIEW (Desktop Only) */}
              <div
                className="hidden md:flex w-1/2 items-center justify-center relative overflow-hidden border-r
                border-[#E4E4E7] dark:border-[#27272A]"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={menuItems[activeIndex].image}
                    src={menuItems[activeIndex].image}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="absolute w-[70%] rounded-2xl shadow-xl"
                  />
                </AnimatePresence>
              </div>

              {/* RIGHT MENU */}
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex flex-col items-center justify-center  h-full w-full md:w-1/2
                text-center space-y-8"
              >
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    onMouseEnter={() => setActiveIndex(index)}
                    className="text-4xl sm:text-5xl font-medium
                    text-[#09090B]
                    dark:text-[#FFFFFF]
                    cursor-pointer
                    hover:opacity-60 transition"
                  >
                    {item.title}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Divider Line */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-24 h-px bg-[#E4E4E7] dark:bg-[#27272A]" />

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-8 w-full flex justify-center md:justify-end md:pr-16 gap-8 text-sm"
            >
              <a
                href="https://x.com/pauldebajoyti"
                className="text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white transition transform hover:scale-105"
              >
                Twitter
              </a>
              <a
                href="https://github.com/paulNovachrono"
                className="text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white transition transform hover:scale-105"
              >
                GitHub
              </a>
              <a
                href="https://discord.gg/sphcJGHd"
                className="text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white transition transform hover:scale-105"
              >
                Discord
              </a>
              <a
                href="https://www.linkedin.com/in/paul-debajoyti/"
                className="text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white transition transform hover:scale-105"
              >
                LinkedIn
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
