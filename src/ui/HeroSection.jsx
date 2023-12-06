import { LuMoveUpRight } from "react-icons/lu";
import { motion as m } from "framer-motion";
import { useGeolocation } from "../hooks/useGeolocation";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function HeroSection() {
  const navigate = useNavigate();
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  const { lat, lng } = geolocationPosition || {};

  const handleGetLocation = () => {
    if (lat !== undefined && lng !== undefined) {
      // Redirect to the concerts page with lat and lng as query parameters
      navigate(`/events?lat=${lat}&lng=${lng}`);
    } else {
      console.error("Latitude and/or longitude is undefined.");
      // Handle the error or provide user feedback
    }
  };

  useEffect(() => {
    handleGetLocation();
    //eslint-disable-next-line
  }, [lat, lng]);
  return (
    <div className="relative cursor-pointer sm:mx-auto" id="hero-section">
      <div className="relative">
        {/* Add a div with a semi-transparent background */}
        <div className="absolute inset-0 z-0 bg-black opacity-40"></div>

        <img
          src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/next-event-images/hero-image.jpg"
          alt="hero banner"
          className="z-1  h-[400px] w-full object-cover sm:h-[500px]  md:h-[700px] "
        />

        <div className="z-2 absolute  inset-0 flex flex-col items-start justify-start gap-1 px-12 pt-4 text-[#f4f4f4]">
          {/* Top bar */}
          <div className="h-4 w-1/2 bg-white sm:h-6 md:h-8 lg:h-10"></div>

          <m.h1
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "100%", opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-3xl  font-medium uppercase tracking-wide sm:text-5xl md:text-7xl lg:text-9xl"
          >
            Feed the soul
          </m.h1>

          {/* Bottom bar */}
          <div className="h-4 w-1/2 self-end bg-white sm:h-6 md:h-8 lg:h-10"></div>
        </div>

        <div className="z-2 absolute bottom-20 left-0 right-0 top-0  flex flex-col items-start justify-end gap-6  px-12 text-[#f4f4f4]">
          <m.p
            initial={{ x: "25%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl font-semibold text-white  sm:text-4xl"
          >
            Discover amazing events <br />
            around you.
          </m.p>

          {!geolocationPosition && (
            <m.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-xl font-semibold tracking-wide"
              onClick={() => {
                getPosition();
                handleGetLocation();
              }}
            >
              {isLoadingPosition ? (
                "Loading..."
              ) : (
                <>
                  Get Started <LuMoveUpRight className="inline-block" />
                </>
              )}
            </m.button>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
