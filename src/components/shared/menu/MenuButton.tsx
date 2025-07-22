// Lib
import { useState } from "react";
import { useScrollLock } from "./useScrollLock";
import { motion, AnimatePresence } from "framer-motion";

// Components
import MenuModal from "./MenuModal";
import { FaBars } from "react-icons/fa6";

export default function MenuButton({ className = "" }: { className?: string }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useScrollLock(isOpen);

  return (
    <AnimatePresence mode="wait">
      {isOpen ? (
        <MenuModal setIsOpen={setIsOpen} />
      ) : (
        <motion.div
          initial={{ x: "40px", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          key="menu-button"
        >
          <motion.button
            className={`hover:cursor-pointer ${className}`}
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            aria-label="Open menu"
          >
            <FaBars className="text-secondary size-6" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
