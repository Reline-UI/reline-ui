import { motion } from "framer-motion";
import { cn } from "../../../utils/cn.js";

export default function Button({
  variant = "primary",
  children = "Button",
  onClick,
  className,
}) {
  const baseStyle =
    "px-4 py-2 rounded-lg font-medium transition-colors duration-200 ease-in";

  const variants = {
    primary:
      "bg-[#18181B] text-[#FAFAFA] \
     hover:bg-[#18181B]/90 \
     dark:bg-[#FAFAFA] dark:text-[#18181B] \
     dark:hover:bg-[#FAFAFA]/90",

    secondary:
      "bg-[#F4F4F5] text-[#18181B] \
     hover:bg-[#E4E4E7] \
     dark:bg-[#27272A] dark:text-[#F7F8F8] \
     dark:hover:bg-[#3F3F46]",

    outline:
      "bg-white text-[#09090B] border border-[#E4E4E7] \
     hover:bg-[#F4F4F5] \
     dark:bg-[#09090B] dark:text-[#F7F8F8] dark:border-[#27272A] \
     dark:hover:bg-[#18181B]",

    danger:
      "bg-[#FFF0F0] text-[#E60000] \
     hover:bg-[#FFE4E6] \
     dark:bg-[#2D0607] dark:text-[#FF9EA1] \
     dark:hover:bg-[#3F0A0C]",

    success:
      "bg-[#ECFDF3] text-[#067647] \
     hover:bg-[#DFF7EA] \
     dark:bg-[#02140A] dark:text-[#6EE7B7] \
     dark:hover:bg-[#052815]",

    warning:
      "bg-[#FFFCF0] text-[#DC7609] \
     hover:bg-[#FEF3C7] \
     dark:bg-[#1D1F00] dark:text-[#F3CF58] \
     dark:hover:bg-[#2A2E00]",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={cn(baseStyle, variants[variant], className)}
    >
      {children}
    </motion.button>
  );
}
