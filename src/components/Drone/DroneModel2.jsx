import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Model } from "./0.jsx";
import { OrbitControls } from "@react-three/drei/core/OrbitControls";
import "./DroneModel.css";

export default function DroneModel2() {
  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Canvas camera={{ position: [0, 9, 10], up: [0, 0, -1] }} style={{ width: "100%", height: "100%" }}>
        <OrbitControls />
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.5} />
        <Suspense fallback={null}>
          <Model position={[0, 0, 0]} /> {/* Adjust the position as needed */}
        </Suspense>
      </Canvas>
    </div>
  );
}
