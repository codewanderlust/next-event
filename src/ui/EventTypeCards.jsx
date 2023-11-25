import { Link } from "react-router-dom";

function EventTypeCards() {
  return (
    <div className="event-cards mx-auto mt-4 flex max-w-7xl  flex-wrap p-6 sm:mt-8 md:mt-12 ">
      <div className="card-one mb-4 w-full px-4 sm:w-1/2 md:w-1/3">
        <div className="relative">
          <Link to="/concerts" className="oveflow-hidden block">
            <img
              src="images/concerts.jpg"
              alt="hero banner"
              className="transform transition-transform hover:scale-110"
            />
            <div className="z-2 absolute inset-0 flex flex-col items-start justify-start gap-1 p-4 text-[#f4f4f4]">
              <h1 className="text-3xl font-medium capitalize tracking-wide">
                Concerts
              </h1>
            </div>
          </Link>
        </div>
      </div>

      <div className="card-two  mb-4 w-full px-4  sm:w-1/2 md:w-1/3">
        <div className="relative">
          {/* Add a div with a semi-transparent background */}

          <Link to="/concerts">
            <img
              src="images/color-runs.jpg"
              alt="hero banner"
              className="transform transition-transform hover:scale-110"
            />

            <div className="z-2 absolute inset-0 flex flex-col items-start justify-start gap-1 p-4 text-[#f4f4f4]">
              <h1 className="text-3xl font-medium capitalize tracking-wide">
                Color Runs
              </h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="card-three mb-4 w-full px-4  sm:w-1/2 md:w-1/3">
        <div className="relative">
          {/* Add a div with a semi-transparent background */}

          <Link to="/concerts">
            <img
              src="images/libraries.jpg"
              alt="hero banner"
              className="transform transition-transform hover:scale-110"
            />

            <div className="z-2 absolute inset-0 flex flex-col items-start justify-start gap-1 p-4 text-[#f4f4f4]">
              <h1 className="text-3xl font-medium capitalize tracking-wide">
                Libraries
              </h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="card-four  mb-4 w-full px-4  sm:w-1/2 md:w-1/3">
        <div className="relative">
          {/* Add a div with a semi-transparent background */}

          <Link to="/concerts">
            <img
              src="images/food-festivals.jpg"
              alt="hero banner"
              className="transform transition-transform hover:scale-110"
            />

            <div className="z-2 absolute inset-0 flex flex-col items-start justify-start gap-1 p-4 text-[#f4f4f4]">
              <h1 className="text-3xl font-medium capitalize tracking-wide">
                Food Festivals
              </h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="card-five  mb-4 w-full px-4  sm:w-1/2 md:w-1/3">
        <div className="relative">
          {/* Add a div with a semi-transparent background */}

          <Link to="/concerts">
            <img
              src="images/hiking.jpg"
              alt="hero banner"
              className="transform transition-transform hover:scale-110"
            />

            <div className="z-2 absolute inset-0 flex flex-col items-start justify-start gap-1 p-4 text-[#f4f4f4]">
              <h1 className="text-3xl font-medium capitalize tracking-wide">
                Hiking
              </h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="card-six mb-4 w-full px-4 sm:w-1/2 md:w-1/3">
        <div className="relative">
          {/* Add a div with a semi-transparent background */}

          <Link to="/concerts">
            <img
              src="images/sports.jpg"
              alt="hero banner"
              className="transform transition-transform hover:scale-110"
            />

            <div className="z-2 absolute inset-0 flex flex-col items-start justify-start gap-1 p-4 text-[#f4f4f4]">
              <h1 className="text-3xl font-medium capitalize tracking-wide">
                Sport Events
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventTypeCards;
