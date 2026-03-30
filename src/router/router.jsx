import { createBrowserRouter, ScrollRestoration } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ErrorPage from "../pages/ErrorPage";
import RootLayout from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollRestoration />
        <RootLayout />
      </>
    ),
    errorElement: (
        <ErrorPage />
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <NotFound /> }
    ],
  }
]);