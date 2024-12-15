import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { useRef } from "react";

// Array of shapes
const shapes = ["sphere", "box", "cone", "torus", "cylinder"];

const RandomObject = ({ shapeType, position, color }) => {
  const meshRef = useRef();

  // Animation: Rotate the object
  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} position={position}>
      {shapeType === "sphere" && <sphereGeometry args={[0.5, 32, 32]} />}
      {shapeType === "box" && <boxGeometry args={[2.5, 5.5, 0.5]} />}
      {shapeType === "cone" && <coneGeometry args={[0.3, 0.6, 32]} />}
      {shapeType === "torus" && <torusGeometry args={[0.4, 0.15, 16, 100]} />}
      {shapeType === "cylinder" && (
        <cylinderGeometry args={[0.3, 0.3, 0.6, 32]} />
      )}
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const AnimatedPattern = () => {
  return (
    <Canvas className="absolute inset-0 w-full h-full">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <group>
        {[...Array(50)].map((_, i) => {
          const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
          const position = [
            Math.random() * 10 - 5, // X position
            Math.random() * 10 - 5, // Y position
            Math.random() * 10 - 5, // Z position
          ];
          const color = `hsl(${Math.random() * 360}, 70%, 50%)`; // Random color
          return (
            <RandomObject
              key={i}
              shapeType={shapeType}
              position={position}
              color={color}
            />
          );
        })}
      </group>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default AnimatedPattern;
