import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import Modal from "../components/Modal/index";
import { useState } from "react";
import { useModal } from "../hooks/useModal";

import { framerLogger } from "../utils/stateLogger";
import { AnimatePresence } from "framer-motion";

function AppLayout() {
  const { modalOpen, close, open } = useModal();
  const [modalType] = useState("dropIn");

  return (
    <div className="grid min-h-screen  grid-rows-[auto_1fr_auto] bg-[#191414] text-[#fff]">
      <Header open={open} />

      <main>
        <Outlet />
      </main>

      <Footer />
      <ModalContainer>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            text={modalType}
            type={modalType}
            handleClose={close}
          />
        )}
      </ModalContainer>
    </div>
  );
}
const ModalContainer = ({ children, label }) => (
  // Enables the animation of components that have been removed from the tree
  <AnimatePresence
    // Disable any initial animations on children that
    // are present when the component is first rendered
    initial={false}
    // Only render one component at a time.
    // The exiting component will finish its exit
    // animation before entering component is rendered
    mode="wait"
    // Fires when all exiting nodes have completed animating out
    onExitComplete={() => framerLogger(label)}
  >
    {children}
  </AnimatePresence>
);

export default AppLayout;
