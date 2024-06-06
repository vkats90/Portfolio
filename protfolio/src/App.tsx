import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import TopBar from "./components/topbar";

function App() {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
}

export default App;
