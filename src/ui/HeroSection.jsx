import { LuMoveUpRight } from "react-icons/lu";
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
  console.log({ lat, lng });
  const handleGetLocation = () => {
    console.log("Button clicked");
    if (lat !== undefined && lng !== undefined) {
      // Redirect to the concerts page with lat and lng as query parameters
      navigate(`/concerts?lat=${lat}&lng=${lng}`);
    } else {
      console.error("Latitude and/or longitude is undefined.");
      // Handle the error or provide user feedback
    }
  };

  useEffect(() => {
    handleGetLocation();
  }, [lat, lng]);
  return (
    <div className="relative cursor-pointer sm:mx-auto" id="hero-section">
      <div className="relative">
        {/* Add a div with a semi-transparent background */}
        <div className="absolute inset-0 z-0 bg-black opacity-40"></div>

        <img
          src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/next-event-images/hero-image.jpg"
          alt="hero banner"
          className="z-1 h-[700px] w-full  object-cover "
        />

        <div className="z-2 absolute  inset-0 flex flex-col items-start justify-start gap-1 px-12 pt-4 text-[#f4f4f4]">
          {/* Top bar */}
          <div className="h-10 w-1/2 bg-white"></div>

          <h1 className="text-[180px] font-medium uppercase tracking-wide">
            Feed the soul
          </h1>

          {/* Bottom bar */}
          <div className="h-10 w-1/2 self-end bg-white"></div>
        </div>

        <div className="z-2 absolute bottom-20 left-0 right-0 top-0  flex flex-col items-start justify-end gap-6  px-12 text-[#f4f4f4]">
          <p className="text-xl font-semibold text-white sm:text-4xl">
            Discover amazing events <br />
            around you.
          </p>

          {!geolocationPosition && (
            <button
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
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
