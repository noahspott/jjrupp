// Components
import { FaXmark } from "react-icons/fa6";
import { motion } from "motion/react";

// Data
import { links } from "@/data/links";

export default function MenuModal({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <motion.section
      key="menu-modal"
      initial={{ x: "100%", opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ type: "tween", duration: 0.1, stiffness: 50, damping: 10 }}
      className="bg-primary/70 fixed inset-0 z-50 flex h-screen w-screen items-center justify-center backdrop-blur-lg"
    >
      <div className="relative h-full w-full">
        <button className="absolute top-9 right-4">
          <FaXmark
            className="text-lunar-white size-6 hover:cursor-pointer"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          />
        </button>
        <nav className="me-8 mt-48 flex flex-col items-center gap-8">
          {links.map((link) => {
            return (
              <li className="button-animation list-none hover:opacity-80">
                <a
                  className="font-heading font-2 text-secondary hover:text-lunar-accent text-right text-4xl uppercase duration-150 hover:cursor-pointer"
                  href={link.href}
                >
                  {link.display}
                </a>
              </li>
            );
          })}
        </nav>
      </div>
    </motion.section>
  );
}
