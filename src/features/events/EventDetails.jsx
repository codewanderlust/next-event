import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { getEventDetails } from "../../services/apiEvents";
import { useState } from "react";

export default function EventDetails() {
  const [eventDetails, setEventDetails] = useState({});
  const apiKey = "L9HuAjIoaLApydg4RShNzSl4kSv6mynE";
  const { id } = useParams();

  useEffect(() => {
    const fetchEventDetails = async () => {
      const eventDetailsData = await getEventDetails(apiKey, id);
      setEventDetails(eventDetailsData);
    };

    fetchEventDetails();
  }, [id]);

  console.log({ eventDetails });
  return (
    <div className="mx-auto max-w-7xl p-6">
      <h2>{eventDetails?.name}</h2>
      <img
        src={eventDetails?.images && eventDetails.images[2]?.url}
        alt={eventDetails?.name}
        className="h-auto w-[400px]"
      />

      <p>{eventDetails?.pleaseNote}</p>
    </div>
  );
}
