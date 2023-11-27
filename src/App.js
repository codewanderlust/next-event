import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import HomePage from "./pages/HomePage";
import AppLayout from "./ui/AppLayout";
import "react-toastify/dist/ReactToastify.css";

import PageNotFound from "./pages/404";
import EventList from "./features/events/EventList";
import EventDetails from "./features/events/EventDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
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
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/concerts" element={<EventList />} />
              <Route path="/concerts/:id" element={<EventDetails />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
