import { Outlet } from "react-router-dom";
import Home from "./Home";

const Root = () => {
  return (
    <>
      <Home />
      <Outlet />
    </>
  );
};

export default Root;
