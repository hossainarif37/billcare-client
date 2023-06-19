import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="max-w-max">
      <Outlet />
    </div>
  );
};

export default App;