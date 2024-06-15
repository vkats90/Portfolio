//replace main image
// implement intersection observer
// add images to experience

import { Outlet } from "react-router-dom";

import TopBar from "./components/topbar";

function App() {
  return (
    <div className="relative bg-backg">
      <TopBar />
      <Outlet />
    </div>
  );
}

export default App;
