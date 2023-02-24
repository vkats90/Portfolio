"use client";
import { useState, useEffect } from "react";

export default function Videoplayer() {
  const [autoPlay, setAutoPlay] = useState(false);
  return (
    <video
      id="vid"
      className="rounded-md"
      onMouseEnter={() => setAutoPlay(true)}
      onMouseLeave={() => setAutoPlay(false)}
      loop
      muted
      autoPlay={autoPlay}
    >
      <source src={"/codingbg.mp4"} type="video/mp4" />
    </video>
  );
}
