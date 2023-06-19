import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default App;