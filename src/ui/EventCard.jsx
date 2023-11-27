import { useState, useEffect } from "react";
import { Tooltip } from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { getTrendingEvents } from "../services/apiEvents";
import { Link } from "react-router-dom";

function EventCard() {
  const [events, setEvents] = useState([]);
  const apiKey = "L9HuAjIoaLApydg4RShNzSl4kSv6mynE";
  const genre = "nba"; // Replace with the user's preferred genre

  useEffect(() => {
    const fetchData = async () => {
      const eventsData = await getTrendingEvents(apiKey, genre);
      setEvents(eventsData.slice(3, 6));
    };

    fetchData();
  }, [genre, apiKey]);

  console.log({ events });

  return (
    <div className="mt-4 sm:mt-8 md:mt-12">
      <h2 className="neon mb-2 text-center text-5xl font-bold">
        TRENDING EVENTS
      </h2>

      <div className="flex justify-center gap-4 px-4 py-3">
        {events.map((event, i) => (
          <div key={i}>
            <Link
              className="relative flex h-auto max-w-[400px] flex-col rounded-md border border-stone-800"
              to={`/concerts/${event.id}`}
            >
              {i === 1 && (
                <Tooltip label="Trending Worldwide 🌍" aria-label="A tooltip">
                  <img
                    src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/next-event-images/hot2x.gif"
                    alt="Trending"
                    className="absolute right-0 top-0 h-auto w-8 pt-1"
                  />
                </Tooltip>
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
                  <h2 className="text-slate-400">
                    {event._embedded.venues[0].address.line1},{" "}
                    {event._embedded.venues[0].city.name}
                  </h2>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCard;
