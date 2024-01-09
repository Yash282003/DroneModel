import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
import { Model } from "./0.jsx";
import { OrbitControls } from "@react-three/drei/core/OrbitControls";
import "./DroneModel.css";

export default function DroneModel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const speed = 1; // Adjust the speed as needed
  const visibilityThreshold = 600;

  useEffect(() => {
    console.log(scrollPosition);
  }, [scrollPosition]);
  useEffect(() => {
    const handleScroll = () => {
      const newScrollPosition = window.scrollY;
      setScrollPosition(newScrollPosition);
      if (newScrollPosition < visibilityThreshold && isVisible) {
        setIsVisible(false);
      } else if (newScrollPosition >= visibilityThreshold && !isVisible) {
        setIsVisible(true);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <div className="canvas-container">
  <Canvas
    camera={{
      position: scrollPosition * speed < 1200 ? [0, 9, 10] : [0, 1, 10],
      up: scrollPosition * speed < 1200 ? [0, 0, -1] : [0, -1, 1],
    }}
    style={{
      width: "700px",
      height: "600px",
      position: scrollPosition * speed < 1200 ? "fixed" : "absolute",
      opacity: isVisible ? 1 : 0,
      transition: "opacity 1s",
      top: scrollPosition * speed < 1200 ?"130px":"var(--top-position)",
      visibility: isVisible ? "visible" : "hidden",
    }}
    alpha={true}
  >
    <OrbitControls />
    <ambientLight intensity={0.6} />
    <directionalLight intensity={0.5} />

    <Suspense fallback={null}>
      <Model
        position={[0, 0, scrollPosition * speed < 1200 ? -2 : -1]}
      />
    </Suspense>
  </Canvas>
</div>


  );
}
