// Lib
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ResponsiveVideoProps = {
  className?: string;
  poster?: string;
};

const getVideoSrc = (): string => {
  const width = window.innerWidth;
  // if (width <= 480) return "/video/hero/hero-10s-360.mp4";
  if (width <= 540) return "/video/hero-10s-540.mp4";
  if (width <= 760) return "/video/hero-10s-760.mp4";
  if (width <= 1352) return "/video/hero-10s-1352.mp4";
  return "/video/hero-10s-1920.mp4";
};

export default function ResponsiveVideo({
  className = "",
  poster = "",
}: ResponsiveVideoProps) {
  const [src, setSrc] = useState(getVideoSrc());

  useEffect(() => {
    const handleResize = () => {
      const newSrc = getVideoSrc();
      if (newSrc !== src) {
        setSrc(newSrc);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [src]);

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 h-full w-full object-cover">
        <AnimatePresence mode="wait">
          <motion.video
            key={src}
            src={src}
            autoPlay
            muted={true}
            loop
            playsInline
            poster={poster}
            className="h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
