import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

const cardVariants = {
  initial: (direction) => {
    switch (direction) {
      case "left":
        return { x: -500, opacity: 0 };
      case "top":
        return { y: -500, opacity: 0 };
      case "right":
        return { x: 500, opacity: 0 };
      case "bottom":
        return { y: 500, opacity: 0 };
      default:
        return { opacity: 0 };
    }
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};
function EventTypeCards() {
  return (
    <div className=" mx-auto mt-4 flex max-w-7xl flex-wrap   p-6 sm:mt-8 md:mt-12 ">
      <m.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
        custom="left" // Direction for the first card
        className=" mb-4 w-full  px-4 sm:w-1/2 md:w-1/3"
      >
        <div className="relative">
          <Link to="/concerts" className="oveflow-hidden block">
            <img
              src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/next-event-images/concerts.jpg"
              alt="hero banner"
            />
            <div className="z-2 absolute inset-0 flex flex-col items-start justify-start gap-1 p-4 text-[#f4f4f4]">
              <h1 className="text-xl font-medium capitalize tracking-wide sm:text-2xl md:text-3xl">
                Concerts
              </h1>
            </div>
          </Link>
        </div>
      </m.div>
      <m.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
        custom="bottom" // Direction for the first card
        className=" mb-4 w-full  px-4 sm:w-1/2 md:w-1/3"
      >
        <div className="relative">
          <Link to="/concerts" className="oveflow-hidden block">
            <img
              src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/next-event-images/color-runs.jpg"
              alt="hero banner"
            />
            <div className="z-2 absolute inset-0 flex flex-col items-start justify-start gap-1 p-4 text-[#f4f4f4]">
              <h1 className="text-xl font-medium capitalize tracking-wide sm:text-2xl md:text-3xl">
                Color Runs
              </h1>
            </div>
          </Link>
        </div>
      </m.div>
      <m.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
        custom="right"
        className=" mb-4 w-full  px-4 sm:w-1/2 md:w-1/3"
      >
        <div className="relative">
          <Link to="/concerts" className="oveflow-hidden block">
            <img
              src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/next-event-images/libraries.jpg"
              alt="hero banner"
            />
            <div className="z-2 absolute inset-0 flex flex-col items-start justify-start gap-1 p-4 text-[#f4f4f4]">
              <h1 className="text-xl font-medium capitalize tracking-wide sm:text-2xl md:text-3xl">
                Libraries
              </h1>
            </div>
          </Link>
        </div>
      </m.div>
      <m.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
        custom="left"
        className=" mb-4 w-full  px-4 sm:w-1/2 md:w-1/3"
      >
        <div className="relative">
          <Link to="/concerts" className="oveflow-hidden block">
            <img
              src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/next-event-images/food-festivals.jpg"
              alt="hero banner"
            />
            <div className="z-2 absolute inset-0 flex flex-col items-start justify-start gap-1 p-4 text-[#f4f4f4]">
              <h1 className="text-xl font-medium capitalize tracking-wide sm:text-2xl md:text-3xl">
                Food Festivals
              </h1>
            </div>
          </Link>
        </div>
      </m.div>
      <m.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
        custom="top"
        className=" mb-4 w-full  px-4 sm:w-1/2 md:w-1/3"
      >
        <div className="relative">
          <Link to="/concerts" className="oveflow-hidden block">
            <img
              src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/next-event-images/hiking.jpg?t=2023-11-27T10%3A28%3A11.250Z"
              alt="hero banner"
            />
            <div className="z-2 absolute inset-0 flex flex-col items-start justify-start gap-1 p-4 text-[#f4f4f4]">
              <h1 className="text-xl font-medium capitalize tracking-wide sm:text-2xl md:text-3xl">
                Hiking
              </h1>
            </div>
          </Link>
        </div>
      </m.div>
      <m.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
        custom="right"
        className=" mb-4 w-full  px-4 sm:w-1/2 md:w-1/3"
      >
        <div className="relative">
          <Link to="/concerts" className="oveflow-hidden block">
            <img
              src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/next-event-images/event-02.png"
              alt="hero banner"
            />
            <div className="z-2 absolute inset-0 flex flex-col items-start justify-start gap-1 p-4 text-[#f4f4f4]">
              <h1 className="text-xl font-medium capitalize tracking-wide sm:text-2xl md:text-3xl">
                Sport Events
              </h1>
            </div>
          </Link>
        </div>
      </m.div>
    </div>
  );
}

export default EventTypeCards;
