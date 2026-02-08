import { motion } from "framer-motion";
import { cn } from "../../../utils/cn.js";

export default function GlassButton({
  children = "Button",
  onClick,
  className = "",
}) {
  // Create your base style
  const baseStyle =
    "px-4 py-2 rounded-lg relative flex items-center justify-between hover:scale-105 transition-all ease-in-out duration-300 dark:text-white text-zinc-800 cursor-pointer";

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={cn(`${baseStyle} ${className}`)}
    >
      {/* Texture/Blur Layer */}
      <div className="absolute backdrop-blur-[1.5px] bg-[rgba(255,255,255,0.01)] h-fit  w-fit" />
      {/* Inner Shadow Effect */}
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_10px_0px_rgba(0,0,0,0.25),inset_-1px_-1px_2px_0px_rgba(255,255,255,0.1),inset_1px_1px_2px_0px_rgba(255,255,255,0.35)]" />
      {children}
    </motion.button>
  );
}
