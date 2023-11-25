import { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { getEvents } from "../services/apiEvents";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import useInView

function EventCard() {
  const [events, setEvents] = useState([]);
  const apiKey = "L9HuAjIoaLApydg4RShNzSl4kSv6mynE";
  const genre = "nba"; // Replace with the user's preferred genre

  useEffect(() => {
    const fetchData = async () => {
      const eventsData = await getEvents(apiKey, genre);
      setEvents(eventsData.slice(0, 3));
    };

    fetchData();
  }, [genre, apiKey]);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="mt-4 sm:mt-8 md:mt-12">
      <h2 className="neon mb-2 text-center text-5xl font-bold">
        TRENDING EVENTS
      </h2>

      <div className="flex justify-center gap-4 px-4 py-3">
        {events.map((event, i) => (
          <motion.div
            ref={ref} // Attach the ref to the wrapper div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <Link
              className="relative flex h-[auto] max-w-[400px] flex-col rounded-md border border-stone-800"
              to={`/concerts/${event.id}`}
            >
              {i === 1 && (
                <img
                  src="images/hot2x.gif"
                  alt="Trending"
                  className="absolute right-0 top-0 h-auto w-8 pt-1"
                />
              )}
              <img
                src={event.images[2].url}
                alt={event.name}
                className="h-64 w-full"
              />
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 p-2">
                  <span className="inline-block">
                    <FaLocationDot size={16} />
                  </span>
                  <h2 className="text-slate-400">{event.location}</h2>
                </div>

                <h1 className="p-2 font-medium tracking-wide">{event.name}</h1>
                <div className="p-2">
                  <p className="text-sm">
                    {event.info
                      ? event.info.split(" ").slice(0, 15).join(" ") + "..."
                      : "No event description provided"}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default EventCard;
