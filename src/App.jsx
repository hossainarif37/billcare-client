import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="max-w-[1440px]">
      <Outlet />
    </div>
  );
};

export default App;