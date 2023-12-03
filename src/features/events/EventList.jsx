import { Skeleton, SimpleGrid, Box } from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";

import { getNearbyEvents } from "../../services/apiEvents";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useUrlPosition } from "../../hooks/useUrlPosition";
import { formatDate } from "../../utils/helpers";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const EventList = () => {
  const apiKey = "L9HuAjIoaLApydg4RShNzSl4kSv6mynE";
  const genre = "dancehall"; // Replace with the user's preferred genre

  const navigate = useNavigate();
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
          setEvents(nearbyEventsData.slice(0, 9));
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


  function handleEventDetails(eventId) {
    navigate(`/event/${eventId}`);
  }
  function handleTicketPurchase(ticketUrl) {
    window.open(ticketUrl, "_blank"); // Open the ticket URL in a new tab
  }

  return (
    <Box className="mx-auto max-w-7xl p-6">
      <h1 className="mb-4 text-[20px] sm:mb-6 sm:text-[30px] md:mb-8 md:text-[40px]">
        Live Events
      </h1>

      {events[0]?._embedded?.venues[0]?.city?.name && (
        <div className="mb-2 inline-block cursor-pointer space-x-2 rounded-3xl border border-slate-200 px-4 py-2 sm:mb-4 md:mb-6">
          <IoLocationOutline className="  inline-block text-[20px] " />

          <p className="inline ">
            {events[0]?._embedded?.venues[0]?.city?.name}
          </p>
        </div>
      )}

      {loading ? (
        <SimpleGrid columns={{ sm: 2, md: 3 }} gap={6}>
          {[...Array(9)].map((_, n) => (
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
        <motion.div
          className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {events.map((event) => (
            <motion.div
              variants={itemVariants}
              key={event.id}
              className="flex h-[400px] w-[350px] flex-col gap-2"
              to={`/concerts/${event.id}`}
            >
              <div className="h-[60%] overflow-hidden">
                <img
                  src={event.images[2].url}
                  alt={event.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex h-[40%] flex-col justify-between">
                <div className="space-y-4 text-center text-xs">
                  <p className="truncate text-[20px] ">{event.name}</p>
                  <p className="text-[16px]">
                    {event._embedded?.venues[0]?.city?.name || "N/A"} ┃{" "}
                    {formatDate(event.dates?.start?.localDate)}
                  </p>

                  <div className="space-x-4 text-[16px] font-semibold ">
                    <button
                      onClick={() => handleEventDetails(event.id)}
                      className="rounded-[50px] border-2 border-primary px-3 py-2 uppercase tracking-wide text-primary transition-all duration-200 hover:bg-pink-200 hover:text-primary active:bg-pink-200 active:text-primary"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => handleTicketPurchase(event.url)}
                      className="rounded-[50px] bg-primary px-3 py-2 uppercase tracking-wide transition-all duration-200 hover:bg-pink-200 hover:text-primary active:bg-pink-200 "
                    >
                      Buy Tickets
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </Box>
  );
};

export default EventList;
