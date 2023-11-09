function EventTypeCards() {
  const eventTypes = [
    {
      title: "Concerts",
      image: "images/concerts.jpg",
    },
    {
      title: "Color Runs",
      image: "images/color-runs.jpg",
    },
    {
      title: "Libraries",
      image: "images/libraries.jpg",
    },
    {
      title: "Food Festivals",
      image: "images/food-festivals.jpg",
    },
    {
      title: "Hiking",
      image: "images/hiking.jpg",
    },
    {
      title: "Sport Events",
      image: "images/sports.jpg",
    },
  ];
  return (
    <div className="  mt-20 flex flex-wrap p-4">
      {eventTypes.map((event, i) => (
        <div className="mb-4 w-full px-4 sm:w-1/2 md:w-1/3" key={i}>
          <div className="relative">
            {/* Add a div with a semi-transparent background */}
            <div className="absolute inset-0 z-0 bg-black opacity-40"></div>

            <img
              src={event.image}
              alt="hero banner"
              className="z-1 h-[400px] w-full rounded-md object-cover"
            />

            <div className="z-2 absolute inset-0 flex flex-col items-start justify-start gap-1 p-4 text-[#f4f4f4]">
              <h1 className="text-3xl font-medium capitalize tracking-wide">
                {event.title}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventTypeCards;
