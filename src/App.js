import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ChakraProvider>
      <div className=" bg-stone-900 text-slate-200">
        <HomePage />
      </div>
    </ChakraProvider>
  );
}

export default App;
