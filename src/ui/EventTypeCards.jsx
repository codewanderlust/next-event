import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

const eventTypeCards = [
  {
    id: 1,
    name: "Concerts",
    image:
      "https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/next-event-images/concerts.jpg",
  },

  {
    id: 2,
    name: "Color Runs",
    image:
      "https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/next-event-images/color-runs.jpg",
  },

  {
    id: 3,
    name: "Libraries",
    image:
      "https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/next-event-images/libraries.jpg",
  },
  {
    id: 4,
    name: "Food Festivals",
    image:
      "https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/next-event-images/food-festivals.jpg",
  },

  {
    id: 5,
    name: "Hiking",
    image:
      "https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/next-event-images/hiking.jpg?t=2023-11-27T10%3A28%3A11.250Z",
  },
  {
    id: 6,
    name: "Sport Events",
    image:
      "https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/next-event-images/event-02.png",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
function EventTypeCards() {
  return (
    <m.div
      className=" mx-auto mt-4 flex max-w-7xl flex-wrap   p-6 sm:mt-8 md:mt-12 "
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      {eventTypeCards.map((ev, i) => (
        <m.div
          className=" mb-4 w-full  px-4 sm:w-1/2 md:w-1/3"
          key={i}
          variants={itemVariants}
        >
          <div className="relative">
            <Link to="/concerts" className="oveflow-hidden block">
              <img src={ev.image} alt="hero banner" />
              <div className="z-2 absolute inset-0 flex flex-col items-start justify-start gap-1 p-4 text-[#f4f4f4]">
                <h1 className="text-3xl font-medium capitalize tracking-wide">
                  {ev.name}
                </h1>
              </div>
            </Link>
          </div>
        </m.div>
      ))}
    </m.div>
  );
}

export default EventTypeCards;
