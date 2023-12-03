import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import AppLayout from "../../ui/AppLayout";
import EventDetails from "../../features/events/EventDetails";
import EventList from "../../features/events/EventList";
import Favorites from "../../features/favorites/Favorites";
import HomePage from "../../pages/HomePage";
import PageNotFound from "../../pages/404";
import UserProfile from "../../pages/UserProfile";

export default function RoutesWithAnimation() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route element={<AppLayout />}>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/dashboard" element={<UserProfile />} />
        <Route index element={<HomePage />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}
