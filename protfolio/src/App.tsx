import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
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
