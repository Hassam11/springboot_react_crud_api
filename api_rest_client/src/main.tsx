import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ProductProvider } from "./context/apiContext.tsx";
import { theme } from "./theme/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ProductProvider>
        <App />
      </ProductProvider>
    </ChakraProvider>
  </React.StrictMode>
);
