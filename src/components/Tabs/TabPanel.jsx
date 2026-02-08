import { AnimatePresence, motion } from "framer-motion";
import { useTabs } from "./TabContext";

export function TabPanel({ value: panelValue, children }) {
  const { value } = useTabs();

  return (
    <AnimatePresence mode="wait">
      {value === panelValue && (
        <motion.div
          key={panelValue}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="mt-6"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
