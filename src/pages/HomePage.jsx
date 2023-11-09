import AppFeatures from "../ui/AppFeatures";
import AppInfo from "../ui/AppInfo";
import EventCard from "../ui/EventCard";
import EventTypeCards from "../ui/EventTypeCards";
import Footer from "../ui/Footer";
import Gallery from "../ui/Gallery";
import Header from "../ui/Header";
import HeroSection from "../ui/HeroSection";

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />

      <div className="mx-auto max-w-7xl">
        <EventCard />
        <EventTypeCards />
      </div>
      <AppInfo />
      <div className="mx-auto max-w-7xl">
        <AppFeatures />
        <Gallery />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
