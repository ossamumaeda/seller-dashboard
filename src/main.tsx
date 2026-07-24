import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider, CssBaseline } from "@mui/material";

import App from "./App";
import "./index.css";

import { theme } from "@/app/theme/theme";
import { QueryProvider } from "@/app/providers/QueryProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </QueryProvider>
  </StrictMode>
);