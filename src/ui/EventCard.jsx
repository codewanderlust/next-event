import { FaLocationDot } from "react-icons/fa6";

function EventCard() {
  const eventList = [
    {
      image: "images/event-01.jpg",
      location: "1701 Divisadero St, San Francisco, CA 94115",
      title: "The James Energy Experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      trending: false,
    },
    {
      image: "images/event-02.png",
      location: "1701 Divisadero St, San Francisco, CA 94115",
      title: "Redbull Cycling Event",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      trending: true,
    },
    {
      image: "images/event-03.jpg",
      location: "1701 Divisadero St, San Francisco, CA 94115",
      title: "Outdoor Yoga Event",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      trending: false,
    },
  ];

  return (
    <div className="mt-20">
      <h2 className="neon mb-2 text-center text-5xl font-bold">
        TRENDING EVENTS
      </h2>
      <div className="flex justify-center gap-4 px-4 py-3">
        {eventList.map((event, i) => (
          <div
            key={i}
            className="relative flex h-[auto] max-w-[400px] flex-col rounded-md border border-stone-800"
          >
            {event.trending && (
              <img
                src="images/hot2x.gif"
                alt="Trending"
                className="absolute right-0 top-0 h-auto w-8 pt-1"
              />
            )}
            <img src={event.image} alt={event.title} className="h-64 w-full" />
            <div className="flex items-center gap-2 p-2">
              <span className="inline-block">
                <FaLocationDot size={16} />
              </span>
              <h2 className="text-slate-400">{event.location}</h2>
            </div>

            <h1 className="p-2 font-medium tracking-wide">{event.title}</h1>
            <div className="p-2">
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCard;
