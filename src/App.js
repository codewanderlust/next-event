import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import LocationProvider from "./components/PageTransitions/LocationProvider";
import RoutesWithAnimation from "./components/PageTransitions/RouteWithAnimation";
import { useModal } from "./hooks/useModal";
import Modal from "./components/Modal";
import { AnimatePresence } from "framer-motion";
import { framerLogger } from "./utils/stateLogger";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  const { modalOpen, close, open } = useModal();
  const [modalType] = useState("dropIn");

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <BrowserRouter>
          <LocationProvider>
            <RoutesWithAnimation open={open} />
          </LocationProvider>

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
        </BrowserRouter>
        <Toaster
          position="bottom-right"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
              style: {
                backgroundColor: "#5cb85c", // Change the background color for success
                color: "#ffffff", // Change the text color for success
                // Add any other styles you want for success notifications
              },
            },
            error: {
              duration: 5000,
              style: {
                backgroundColor: "#d9534f", // Change the background color for error
                color: "#ffffff", // Change the text color for error
                // Add any other styles you want for error notifications
              },
            },
            info: {
              duration: 4000,
              style: {
                backgroundColor: "#5bc0de", // Change the background color for info
                color: "#ffffff", // Change the text color for info
                // Add any other styles you want for info notifications
              },
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#f4f4f4",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </ChakraProvider>
    </QueryClientProvider>
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

export default App;
