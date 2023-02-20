"use client";

import { useRef, useEffect, useState } from "react";

export default function ({ children }) {
  const myRef = useRef();
  const [isVisible, setVisability] = useState();
  console.log(isVisible);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisability(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  return (
    <div
      className={
        isVisible ? "motion-safe:animate-fadeIn" : "motion-safe:animate-fadeOut"
      }
      ref={myRef}
    >
      {children}
    </div>
  );
}
