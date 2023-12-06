function AppInfo() {
  return (
    <div className="relative  mx-auto mt-4 cursor-pointer bg-secondary  sm:mt-8 md:mt-12 ">
      <div className="flex flex-col sm:flex-row ">
        {/* Image container mobile */}
        <div className=" z-1 relative block sm:hidden sm:w-2/3 sm:flex-shrink-0">
          <img
            src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/next-event-images/club-image.jpeg?t=2023-11-27T10%3A29%3A23.770Z"
            alt="club banner"
            className="w-full sm:h-[90%] sm:rounded-bl-[240px] sm:rounded-br-[240px]  "
          />
        </div>
        {/* Text container */}
        <div className="flex flex-grow flex-col justify-start gap-2 p-4 text-[#f4f4f4]">
          <div className="flex text-xl font-semibold sm:text-2xl md:text-3xl">
            <span>NEXT</span>
            <span className="text-primary">EVENT</span>
          </div>
          <h2 className="text-lg font-medium uppercase sm:text-xl">
            The Power is Yours
          </h2>
          <p className="text-sm sm:text-lg">
            Are you tired of scrolling through countless event listings, only to
            find that none of them align with your interests and preferences? Do
            you wish there was an easier way to discover events like concerts,
            music festivals, and cultural gatherings that truly resonate with
            your tastes? Our upcoming AI-powered application is designed to
            address these challenges and revolutionize the way you explore and
            attend live events.
          </p>
        </div>

        {/* Image container desktop */}
        <div className=" z-1 relative hidden sm:block sm:w-2/3 sm:flex-shrink-0">
          <img
            src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/next-event-images/club-image.jpeg?t=2023-11-27T10%3A29%3A23.770Z"
            alt="club banner"
            className="w-full sm:h-[90%] sm:rounded-bl-[240px] sm:rounded-br-[240px]  "
          />
        </div>
        <div className="z-2 absolute inset-0 flex  justify-end gap-1 self-end p-4 text-[#f4f4f4]">
          <h1 className="text-xl font-medium capitalize tracking-wide sm:text-2xl md:text-3xl">
            Clubs
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AppInfo;
