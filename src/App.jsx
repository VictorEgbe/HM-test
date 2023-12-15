import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./companents/index/Index";
import Details from "./companents/details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/details",
    element: <Details />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
