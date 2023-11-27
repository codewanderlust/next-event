import { Skeleton, SimpleGrid, Box } from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";

import { getNearbyEvents } from "../../services/apiEvents";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUrlPosition } from "../../hooks/useUrlPosition";
import { formatDate } from "../../utils/helpers";

const EventList = () => {
  const apiKey = "L9HuAjIoaLApydg4RShNzSl4kSv6mynE";
  const genre = "pop"; // Replace with the user's preferred genre

  //get the lat and lng from the url
  const [mapLat, mapLng] = useUrlPosition();

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Simulate loading with a delay
        setTimeout(async () => {
          // Pass the apiKey, genre, and coordinates to the getNearbyEvents function
          const nearbyEventsData = await getNearbyEvents(
            apiKey,
            genre,
            `${mapLat},${mapLng}`,
          );
          setEvents(nearbyEventsData.slice(0, 8));
          setLoading(false); // Set loading to false after fetching data
        }, 3000); // Simulate a 3-second delay
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents([]);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchEvents();
  }, [genre, apiKey, mapLat, mapLng]);

  return (
    <Box className="mx-auto max-w-7xl p-6">
      <h1 className="mb-4 text-[20px] sm:mb-6 sm:text-[30px] md:mb-8 md:text-[40px]">
        Live Events
      </h1>

      <div className="mb-2 flex gap-1 sm:mb-4 md:mb-6 ">
        <IoLocationOutline className="  inline-block text-[20px] " />

        <p className="inline-block">
          {events[0]?._embedded?.venues[0]?.city?.name}
        </p>
      </div>

      {loading ? (
        <SimpleGrid columns={{ sm: 2, md: 4 }} gap={6}>
          {[...Array(8)].map((_, n) => (
            <Box key={n}>
              <Skeleton
                height="200px"
                startColor="gray.900" // Darker start color
                endColor="gray.800" // Darker end color
              />
              <Skeleton
                height="1rem"
                mt="2"
                width="50%"
                startColor="gray.900" // Darker start color
                endColor="gray.800"
              />
              <Skeleton
                height="1rem"
                mt="1"
                width="70%"
                startColor="gray.900" // Darker start color
                endColor="gray.800"
              />
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <SimpleGrid columns={{ sm: 2, md: 4 }} gap={6}>
          {events.map((event) => (
            <Link
              key={event.id}
              className="flex cursor-pointer flex-col"
              to={`/concerts/${event.id}`}
            >
              <img
                src={event.images[2].url}
                alt={event.name}
                className="h-auto w-full"
              />
              <div className="text-xs">
                <p className="truncate font-semibold">{event.name}</p>
                <p>{event._embedded?.venues[0]?.name}</p>
                <p>{formatDate(event.dates?.start?.localDate)}</p>
              </div>
            </Link>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default EventList;
