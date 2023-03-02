"use client";
import { useState } from "react";

export default function Modal(children) {
  [visible, setVisible] = useState("hidden");
  return (
    <div
      onClick={() => setVisible("")}
      className={`${visible} h-screen bg-slate-600 opacity-10 blur-lg`}
    >
      {children}
    </div>
  );
}
