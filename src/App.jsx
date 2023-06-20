import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer";

const App = () => {


  return (
    <div className="max-w-[1440px] mx-auto">
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;