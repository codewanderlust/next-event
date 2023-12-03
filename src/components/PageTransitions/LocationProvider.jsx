import React from "react";
import { AnimatePresence } from "framer-motion";

export default function LocationProvider({ children }) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}
