import AppFeatures from "../ui/AppFeatures";
import AppInfo from "../ui/AppInfo";
import EventCard from "../ui/EventCard";
import EventTypeCards from "../ui/EventTypeCards";

import Gallery from "../ui/Gallery";

import HeroSection from "../ui/HeroSection";

function HomePage() {
  return (
    <div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <HeroSection />

      <EventCard />
      <EventTypeCards />
      <AppInfo />
      <div className="mx-auto max-w-7xl p-6">
        <AppFeatures />
        <Gallery />
      </div>
    </div>
  );
}

export default HomePage;
