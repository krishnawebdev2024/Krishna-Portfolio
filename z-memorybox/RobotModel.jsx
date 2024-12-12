import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {
  Environment,
  OrbitControls,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import "./Robot.css"; // Optional: Your custom styling for the robot model container

const RobotModel = () => {
  return (
    <div className="robot-container">
      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <Robot />
      </Canvas>
    </div>
  );
};

const Robot = () => {
  // Load the GLTF model and animations
  const { scene, animations } = useGLTF("/robot.glb");

  // Use the animations from the loaded GLTF
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    // Trigger the first animation in the GLB file (adjust based on your file)
    if (actions && actions[Object.keys(actions)[0]]) {
      actions[Object.keys(actions)[0]].play(); // Play the first animation in the file
    }
  }, [actions]);

  return (
    <Suspense fallback={null}>
      {/* Load the robot model and pass the scene */}
      <primitive object={scene} scale={1.5} />
      {/* OrbitControls to enable zooming and panning */}
      <OrbitControls
        enableZoom={false}
        enablePan={true}
        maxDistance={20}
        minDistance={5}
      />
      {/* Environment lighting */}
      <Environment preset="sunset" />
    </Suspense>
  );
};

export default RobotModel;
