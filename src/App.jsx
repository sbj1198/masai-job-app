import { Box } from "@chakra-ui/react";
import reactLogo from "./assets/react.svg";
import { Navbar } from "./components/Navbar";
import { AllRoutes } from "./pages/AllRoutes";

function App() {
  return (
    <Box>
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
