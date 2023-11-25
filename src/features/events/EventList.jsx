import { getNearbyEvents } from "../../services/apiEvents";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useState } from "react";
import { useUrlPosition } from "../../hooks/useUrlPosition";

const EventList = () => {
  const apiKey = "L9HuAjIoaLApydg4RShNzSl4kSv6mynE";
  const genre = "pop"; // Replace with the user's preferred genre

  //get the lat and lng from the url
  const [mapLat, mapLng] = useUrlPosition();
  console.log({ mapLat, mapLng });

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Pass the apiKey, genre, and coordinates to the getNearbyEvents function
        const nearbyEventsData = await getNearbyEvents(
          apiKey,
          genre,
          `${mapLat},${mapLng}`,
        );
        setEvents(nearbyEventsData.slice(0, 8));
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents([]);
      }
    };

    fetchEvents();
  }, [genre, apiKey, mapLat, mapLng]);

  console.log({ events });

  return (
    <div className="mx-auto max-w-7xl p-6">
      <h1 className="text-[20px] sm:text-[30px] md:text-[40px]">Live Events</h1>
      <ul className="grid grid-cols-1 items-center sm:md:grid-cols-2 md:grid-cols-4">
        {events.map((event) => (
          <Link
            key={event.id}
            className="flex cursor-pointer flex-col"
            to={`/concerts/${event.id}`}
          >
            <img
              src={event.images[2].url}
              alt={event.name}
              className="h-auto w-[200px]"
            />
            <div className="text-xs">
              <p className="truncate font-semibold">{event.name}</p>
              <p>Venue: {event._embedded?.venues[0]?.name}</p>
              <p>Date: {event.dates?.start?.localDate}</p>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
