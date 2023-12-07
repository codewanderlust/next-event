import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import AppLayout from "../../ui/AppLayout";
import EventDetails from "../../features/events/EventDetails";
import EventList from "../../features/events/EventList";
import Favorites from "../../features/favorites/Favorites";
import HomePage from "../../pages/HomePage";
import PageNotFound from "../../pages/404";
import UserProfile from "../../pages/UserProfile";
import Header from "../../ui/Header";

export default function RoutesWithAnimation({ open }) {
  const location = useLocation();

  return (
    <>
      <Header open={open} />
      <Routes location={location} key={location.key}>
        <Route element={<AppLayout />}>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/dashboard" element={<UserProfile />} />
          <Route index element={<HomePage />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/event/:id" element={<EventDetails open={open} />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}
