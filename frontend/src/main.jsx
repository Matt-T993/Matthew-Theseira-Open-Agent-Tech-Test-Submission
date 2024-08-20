import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThankYou from "./pages/ThankYou.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/thank-you", element: <ThankYou /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
