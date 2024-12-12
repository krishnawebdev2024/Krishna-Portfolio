import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const AnimatedPattern = () => {
  const shapes = ["sphere", "box", "cone"]; // Array of different shapes
  return (
    <Canvas className="absolute inset-0 w-full h-full">
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <group>
        {[...Array(50)].map((_, i) => {
          // Randomly select a shape type from the shapes array
          const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
          return (
            <mesh
              key={i}
              position={[
                Math.random() * 10 - 5, // X position
                Math.random() * 10 - 5, // Y position
                Math.random() * 10 - 5, // Z position (randomized depth)
              ]}
            >
              {/* Render the shape based on the selected shape type */}
              {shapeType === "sphere" && (
                <sphereGeometry args={[4.0, 32, 64]} />
              )}
              {shapeType === "box" && <boxGeometry args={[0.5, 0.5, 0.5]} />}
              {shapeType === "cone" && <coneGeometry args={[0.3, 0.6, 32]} />}
              <meshStandardMaterial
                color={`hsl(${Math.random() * 360}, 70%, 50%)`}
              />
            </mesh>
          );
        })}
      </group>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default AnimatedPattern;
