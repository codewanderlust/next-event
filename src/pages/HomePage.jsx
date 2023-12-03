import { motion as m, useIsPresent } from "framer-motion";
import AppFeatures from "../ui/AppFeatures";
import AppInfo from "../ui/AppInfo";
import EventCard from "../ui/EventCard";
import EventTypeCards from "../ui/EventTypeCards";

import Gallery from "../ui/Gallery";

import HeroSection from "../ui/HeroSection";

function HomePage() {
  const isPresent = useIsPresent();
  return (
    <>
      <div>
        <HeroSection />

        <EventCard />
        <EventTypeCards />
        <AppInfo />
        <div className="mx-auto max-w-7xl p-6">
          <AppFeatures />
          <Gallery />
        </div>
      </div>
      <m.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1.25, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 1.25, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed inset-0 z-[99999] bg-secondary "
      />
    </>
  );
}

export default HomePage;
