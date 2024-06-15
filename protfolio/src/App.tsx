//update text for shinobi project
//add more minor projects
// populate highlights
//add bonus skills

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
