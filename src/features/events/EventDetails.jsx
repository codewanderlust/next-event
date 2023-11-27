import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { getEventDetails } from "../../services/apiEvents";
import { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiRadio } from "react-icons/bi";
import { formatDate } from "../../utils/helpers";
import { MdOutlineNotificationsNone } from "react-icons/md";

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

  //below we added conditional checks to prevent errors when we are tying to access nested properties that don't exist
  const backgroundImageUrl =
    eventDetails.images && eventDetails.images[2] && eventDetails.images[2].url;
  const venueName =
    eventDetails._embedded &&
    eventDetails._embedded.venues[0] &&
    eventDetails._embedded.venues[0].name;
  const addressLine1 =
    eventDetails._embedded &&
    eventDetails._embedded.venues &&
    eventDetails._embedded.venues[0] &&
    eventDetails._embedded.venues[0].address &&
    eventDetails._embedded.venues[0].address.line1;
  const cityName =
    eventDetails._embedded &&
    eventDetails._embedded.venues &&
    eventDetails._embedded.venues[0] &&
    eventDetails._embedded.venues[0].city &&
    eventDetails._embedded.venues[0].city.name;

  //we used the styles below to add a background image and a blur effect to a container on the page
  const backgroundStyle = {
    position: "relative",
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-60px center",
  };

  const overlayStyle = {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backdropFilter: "blur(10px)", // Adjust the blur intensity as needed
  };

  console.log({ eventDetails });
  return (
    <div className=" mx-auto max-w-[1003px] p-6">
      <div style={backgroundStyle} className=" relative z-0 min-h-[390px] ">
        <div style={overlayStyle}></div>

        <div className="absolute inset-0   md:gap-[20px]">
          <h2 className=" p-4 text-[24px] sm:p-6 sm:text-[28px] md:p-8 md:text-[36px] ">
            {eventDetails.name}
          </h2>
          <div className="flex items-center justify-between px-6">
            <div>
              <div className="flex  gap-4">
                <HiOutlineLocationMarker size={32} />
                <div className="self-start">
                  <p className="text-[24px] font-semibold">{venueName}</p>
                  <p>{addressLine1}</p>
                  <p>{cityName}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="flex items-center gap-4">
                <BiRadio size={32} stroke="200" />
                <p className="text-[24px]">
                  {eventDetails.dates?.start?.localDate &&
                    formatDate(eventDetails.dates.start.localDate)}
                </p>
              </div>
              <div className="ml-12 flex cursor-pointer items-center gap-2  rounded-2xl bg-white px-2 py-1 text-[#000]">
                <MdOutlineNotificationsNone size={32} />
                <p>Get notified</p>
              </div>
            </div>
            <img
              src={eventDetails.images?.[0]?.url}
              alt="concert header"
              className="h-[230px] w-[230px]"
            />
          </div>
        </div>
      </div>
      <div className=" flex items-center gap-2 bg-white p-[28px] text-black">
        <h3>Available tickets from </h3>
        <a
          href={eventDetails.url}
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-md bg-[#0084cf] px-[10px] py-[5px] "
        >
          <img
            src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/next-event-images/ticketmaster.png?t=2023-11-27T10%3A28%3A36.347Z"
            alt="ticketmaster logo"
            className="h-[20px] "
          />
        </a>
      </div>
    </div>
  );
}
