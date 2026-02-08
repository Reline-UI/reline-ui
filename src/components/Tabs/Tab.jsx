import { motion } from "framer-motion";
import { useTabs } from "./TabContext";

export function Tab({ value: tabValue, children }) {
  const { value, setValue } = useTabs();
  const isActive = value === tabValue;

  return (
    <button
      onClick={() => setValue(tabValue)}
      className="
        relative px-4 py-2 rounded-xl text-sm font-medium
        transition-colors duration-300
        z-10
      "
    >
      {isActive && (
        <motion.div
          layoutId="reline-tab-indicator"
          className="
            absolute inset-0 rounded-xl
            bg-[#FFFFFF] dark:bg-[#09090B]
            z-[-1]
          "
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 0.35,
          }}
        />
      )}

      <span
        className={
          isActive
            ? "text-[#09090B] dark:text-[#F7F8F8]"
            : "text-[#71717A] dark:text-[#A1A1AA]"
        }
      >
        {children}
      </span>
    </button>
  );
}
