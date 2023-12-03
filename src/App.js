import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import LocationProvider from "./components/PageTransitions/LocationProvider";
import RoutesWithAnimation from "./components/PageTransitions/RouteWithAnimation";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <BrowserRouter>
          <LocationProvider>
            <RoutesWithAnimation />
          </LocationProvider>
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

export default App;
