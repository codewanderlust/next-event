import { LuMoveUpRight } from "react-icons/lu";
function HeroSection() {
  return (
    <>
     
      <div className="relative cursor-pointer sm:mx-auto" id="hero-section">
        <div className="relative">
          {/* Add a div with a semi-transparent background */}
          <div className="absolute inset-0 z-0 bg-black opacity-40"></div>

          <img
            src="images/hero-image.jpg"
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

            <button className="rounded-md bg-secondary px-4 py-2 text-xl font-semibold tracking-wide">
              Get Started <LuMoveUpRight className="inline-block" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
