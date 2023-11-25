import { useState } from "react";
import { motion } from "framer-motion";

function Gallery() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

  return (
    <motion.div
      className="mt-4 grid grid-cols-2 sm:mt-8  md:mt-12 "
      initial={false}
      animate={
        isLoaded && isInView
          ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
          : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
      }
      transition={{ duration: 1, delay: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
    >
      <img
        src="images/gallery-image-01.jpg"
        alt="people seated in a concert"
        className="h-[400px] w-full rounded-bl-2xl rounded-tl-[100px] object-cover"
        onLoad={() => setIsLoaded(true)}
      />
      <img
        src="images/gallery-image-02.jpg"
        alt="people seated in a concert"
        className="h-[400px] w-full rounded-br-[100px] rounded-tr-2xl object-cover"
        onLoad={() => setIsLoaded(true)}
      />
    </motion.div>
  );
}

export default Gallery;
