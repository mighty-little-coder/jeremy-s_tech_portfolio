import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "resume",
        element: <Resume />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);