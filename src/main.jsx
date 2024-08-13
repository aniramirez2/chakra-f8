import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#0B0D17",
    secondary: "#D0D6F9",
    third: "#FFFFFF",
  },
});
createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
