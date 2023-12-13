import { render } from "@testing-library/react";
import HeroSection from "../ui/HeroSection";
import EventList from "../features/events/EventList"; // Adjust the import based on actual path
import * as geolocationHook from "../hooks/useGeolocation";
import { MemoryRouter } from "react-router";
import React from "react";
// Mock the useGeolocation hook and any other dependencies
jest.mock("../hooks/useGeolocation");
// Mock any API calls if necessary
// Define mock events data
const mockEvents = [
  {
    id: 1,
    title: "Event Title",
    description: "Event Description",
    location: "Event Location",
    date: "Event Date",
    time: "Event Time",
    image: "Event Image",
  },
  {
    id: 2,
    title: "Event Title01",
    description: "Event Description01",
    location: "Event Location01",
    date: "Event Date01",
    time: "Event Time01",
    image: "Event Image01",
  },
];
// Mock global fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockEvents),
  }),
);
describe("EventList Interaction", () => {
  it("displays events when Get Started is clicked with non-null geolocation", async () => {
    // Setup the mock return values
    geolocationHook.useGeolocation.mockReturnValue({
      isLoading: false,
      position: { lat: 123, lng: 456 }, // Non-null geolocation
      getPosition: jest.fn(),
    });
    // Render HeroSection and EventList (adjust based on actual usage)
    render(
      <MemoryRouter>
        <HeroSection />
        <EventList />
      </MemoryRouter>,
    );
  });
});
