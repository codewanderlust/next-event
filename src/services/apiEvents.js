const getNearbyEvents = async (apiKey, genre, latlong) => {
  try {
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?latlong=${latlong}&apikey=${apiKey}&keyword=${genre}`,
    );
    const data = await response.json();
    return data._embedded?.events || [];
  } catch (error) {
    console.error("Error fetching nearby events:", error);
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

const getTrendingEvents = async (apiKey, query) => {
  try {
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&keyword=${query}`,
    );
    const data = await response.json();
    return data._embedded?.events || [];
  } catch (error) {
    console.error("Error fetching trending events:", error);
    return [];
  }
};

const getEventsByCity = async (apiKey, city) => {
  try {
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&keyword=${city}`,
    );
    const data = await response.json();
    return data._embedded?.events || [];
  } catch (error) {
    console.error("Error fetching events by city:", error);
    return [];
  }
};

export { getNearbyEvents, getEventDetails, getTrendingEvents, getEventsByCity };
// https://app.ticketmaster.com/discovery/v2/events.json?latlong=37.7749,-122.4194&apikey=YOUR_API_KEY
