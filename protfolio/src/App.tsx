//replace main image

import { Outlet } from "react-router-dom";

import TopBar from "./components/topbar";

function App() {
  return (
    <div className="relative">
      <TopBar />
      <Outlet />
    </div>
  );
}

export default App;
