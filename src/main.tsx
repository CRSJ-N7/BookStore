import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.tsx";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme.ts";
import { css, Global } from "@emotion/react";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          * {
            font-family: "Poppins", sans-serif;
          }
        `}
      />
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>,
);
