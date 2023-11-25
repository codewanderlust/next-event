const getEvents = async (apiKey, genre, latlong) => {
  try {
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?latlong=${latlong}&apikey=${apiKey}&keyword=${genre}`,
    );
    const data = await response.json();
    return data._embedded?.events || [];
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

const getEventDetails = async (apiKey, eventId) => {
  try {
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events/${eventId}.json?apikey=${apiKey}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching event details:", error);
    return [];
  }
};

export { getEvents, getEventDetails };
// https://app.ticketmaster.com/discovery/v2/events.json?latlong=37.7749,-122.4194&apikey=YOUR_API_KEY
