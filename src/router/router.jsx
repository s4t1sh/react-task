import { createBrowserRouter, ScrollRestoration } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "./Root";

export const router = createBrowserRouter([
  {
    path: "",
    element: (
      <>
        <ScrollRestoration />
        <RootLayout />
      </>
    ),
    children: [
      { index: true, element: <Home /> }
    ],
  }
]);