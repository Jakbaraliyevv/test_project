import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import CourseRegistrationForm from "../pages/register";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <CourseRegistrationForm />,
  },
]);

export default root;
