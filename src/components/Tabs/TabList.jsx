import { motion } from "framer-motion";
import { useTabs } from "./TabContext";

export function TabList({ children }) {
  const { value } = useTabs();

  return (
    <div
      className="
        relative inline-flex items-center gap-1 p-1 rounded-2xl
        bg-[#F4F4F5] dark:bg-[#27272A]
      "
    >
      {children}

      {/* Animated active background */}
      <motion.div
        layoutId="reline-tab-indicator"
        className="
          absolute top-1 bottom-1 rounded-xl
          bg-[#FFFFFF] dark:bg-[#09090B]
        "
        style={{
          width: "var(--tab-width)",
          left: "var(--tab-left)",
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />
    </div>
  );
}
