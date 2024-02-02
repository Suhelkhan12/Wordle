import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Navbar from "./components/Navbar";
import Gameplay from "./pages/Gameplay";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/gameplay",
    element: <Gameplay />,
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
