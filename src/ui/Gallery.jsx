import { useState } from "react";
import { motion } from "framer-motion";

function Gallery() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

  return (
    <motion.div
      className="mt-4 grid grid-cols-1 sm:mt-8 sm:grid-cols-2  md:mt-12  "
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
        src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/next-event-images/gallery-image-01.jpg?t=2023-11-27T10%3A30%3A41.988Z"
        alt="people seated in a concert"
        className="h-[200px] w-full rounded-bl-lg rounded-tl-[50px] object-cover sm:h-[300px] sm:rounded-bl-xl sm:rounded-tl-[80px] md:h-[400px] md:rounded-bl-2xl md:rounded-tl-[100px] "
        onLoad={() => setIsLoaded(true)}
      />
      <img
        src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/next-event-images/gallery-image-02.jpg"
        alt="people seated in a concert"
        className="sm h-[200px] w-full rounded-br-[50px] rounded-tr-lg object-cover sm:h-[300px] sm:rounded-br-[80px] sm:rounded-tr-xl md:h-[400px] md:rounded-br-[100px] md:rounded-tr-2xl"
        onLoad={() => setIsLoaded(true)}
      />
    </motion.div>
  );
}

export default Gallery;
