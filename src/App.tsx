import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-screen">
      <div className="app-background"></div>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
