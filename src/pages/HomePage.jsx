import { useEffect } from "react";
import AppFeatures from "../ui/AppFeatures";
import AppInfo from "../ui/AppInfo";
import EventCard from "../ui/EventCard";
import EventTypeCards from "../ui/EventTypeCards";

import Gallery from "../ui/Gallery";

import HeroSection from "../ui/HeroSection";
import { useState } from "react";
import Loader from "../ui/LoadingScreen";

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <>
      {loading && <Loader />}
      <HeroSection />

      <EventCard />
      <EventTypeCards />
      <AppInfo />
      <div className="mx-auto max-w-7xl p-6">
        <AppFeatures />
        <Gallery />
      </div>
    </>
  );
}

export default HomePage;
