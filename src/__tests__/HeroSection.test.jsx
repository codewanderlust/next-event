import { render, screen } from "@testing-library/react";
import HeroSection from "../ui/HeroSection";
import * as geolocationHook from "../hooks/useGeolocation";
import { MemoryRouter } from "react-router";
import React from "react";
// Mock the useGeolocation hook
jest.mock("../hooks/useGeolocation");
describe("HeroSection", () => {
  it("renders correctly", () => {
    // Provide mock return values for useGeolocation
    geolocationHook.useGeolocation.mockReturnValue({
      isLoading: false,
      position: { lat: 123, lng: 456 },
      getPosition: jest.fn(),
    });
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>,
    );
    // Query for the h1 element
    const headingElement = screen.getByText(/Feed the soul/i);
    // Assert that the heading is in the document
    expect(headingElement).toBeInTheDocument();
  });
  it("renders the Hero Header", () => {
    // Provide mock return values for useGeolocation
    geolocationHook.useGeolocation.mockReturnValue({
      isLoading: false,
      position: { lat: 123, lng: 456 },
      getPosition: jest.fn(),
    });
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>,
    );
    // Query for the button element by its text content
    const heroHeader = screen.getByText(/Discover amazing events around you/i);
    // Assert that the button is in the document
    expect(heroHeader).toBeInTheDocument();
  });
  it("renders the get started button", () => {
    // Provide mock return values for useGeolocation
    geolocationHook.useGeolocation.mockReturnValue({
      isLoading: false,
      position: null, // Ensure this is falsy to render the button
      getPosition: jest.fn(),
    });
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>,
    );
    // Query for the button element by its text content
    const buttonElement = screen.getByTestId("get-started-btn");
    // Assert that the button is in the document
    expect(buttonElement).toBeInTheDocument();
  });
});
