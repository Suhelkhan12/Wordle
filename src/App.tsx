import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Navbar from "./components/Navbar";
import Gameplay from "./pages/Gameplay";
import Zustand from "./components/Zustand";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/gameplay",
    element: <Gameplay />,
  },
  {
    path: "/zustand",
    element: <Zustand />,
  },
]);

const App = () => {
  return (
    <div className="h-screen">
      <div className="app-background"></div>
      <Navbar />
      <RouterProvider router={Router} />
    </div>
  );
};

export default App;
