import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTurnTransition() {
  const controls = useAnimationControls();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // On mount: reveal page by sliding out
    if (!hasMounted) {
      controls.set({ x: "0%" }); // Start fully covering
      controls.start({ x: "100%" }); // Slide off to reveal
      setHasMounted(true);
    }

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target && target.getAttribute("href")) {
        e.preventDefault();
        const href = target.getAttribute("href");

        // Exit: slide in to cover, then navigate
        controls
          .start({ x: "0%" }) // Slide in from the right
          .then(() => (window.location.href = href!));
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [controls, hasMounted]);

  return (
    <motion.div
      className="bg-primary pointer-events-none fixed top-0 left-0 z-[60] flex h-full w-full items-center justify-center"
      initial={false}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <img
        src="/images/jj-logo-circle-600px.png"
        className="w-[300px]"
        alt=""
        loading="eager"
      />
    </motion.div>
  );
}
