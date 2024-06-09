//make emailjs work
//replace social logos with svgs
//replace main image
//make menu close when clicking on one of the links

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
