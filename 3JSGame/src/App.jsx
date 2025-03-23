import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import "./App.css";

function Panda({ position }) {
  const pandaRef = useRef();
  useFrame(() => {
    if (pandaRef.current) {
      pandaRef.current.position.x = position;
      pandaRef.current.rotation.y += 0.02; // Gentle rotation for liveliness
    }
  });

  return (
    <group ref={pandaRef} position={[position, 0.5, 0]}>
      {/* Panda body */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      {/* Black eye patches */}
      <mesh position={[0.3, 0.6, 0.4]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[-0.3, 0.6, 0.4]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      {/* Ears */}
      <mesh position={[0.5, 1.2, 0]}>
        <coneGeometry args={[0.2, 0.4, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[-0.5, 1.2, 0]}>
        <coneGeometry args={[0.2, 0.4, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
    </group>
  );
}

function Food({ position, onCollect, pandaPosition, speed }) {
  const foodRef = useRef();
  useFrame((state, delta) => {
    if (foodRef.current) {
      foodRef.current.position.z += speed * delta; // Frame-rate independent speed
      foodRef.current.rotation.y += 0.05;
      if (
        foodRef.current.position.z > 0 &&
        Math.abs(foodRef.current.position.x - pandaPosition) < 0.8
      ) {
        onCollect();
        foodRef.current.position.z = -10;
        foodRef.current.position.x = Math.random() * 2 - 1;
      } else if (foodRef.current.position.z > 5) {
        foodRef.current.position.z = -10;
        foodRef.current.position.x = Math.random() * 2 - 1;
      }
    }
  });

  return (
    <mesh ref={foodRef} position={position}>
      <cylinderGeometry args={[0.3, 0.3, 0.5, 32]} />
      <meshStandardMaterial color="#32cd32" emissive="#228b22" />
    </mesh>
  );
}

function Rock({ position, onCollision, pandaPosition, speed }) {
  const rockRef = useRef();
  useFrame((state, delta) => {
    if (rockRef.current) {
      rockRef.current.position.z += speed * delta;
      rockRef.current.rotation.x += 0.03;
      if (
        rockRef.current.position.z > 0 &&
        Math.abs(rockRef.current.position.x - pandaPosition) < 0.8
      ) {
        onCollision();
        rockRef.current.position.z = -10;
        rockRef.current.position.x = Math.random() * 2 - 1;
      } else if (rockRef.current.position.z > 5) {
        rockRef.current.position.z = -10;
        rockRef.current.position.x = Math.random() * 2 - 1;
      }
    }
  });

  return (
    <mesh ref={rockRef} position={position}>
      <tetrahedronGeometry args={[0.5, 0]} />
      <meshStandardMaterial color="#8b4513" roughness={0.8} />
    </mesh>
  );
}

function Road() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
      <planeGeometry args={[3, 30]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
}

function Tree({ position }) {
  return (
    <group position={position}>
      {/* Trunk */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 32]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>
      {/* Foliage */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#228b22" />
      </mesh>
    </group>
  );
}

function Game() {
  const [pandaPosition, setPandaPosition] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [speed, setSpeed] = useState(3); // Initial speed: 3 units per second

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft" && pandaPosition > -1) {
        setPandaPosition((prev) => prev - 1);
      } else if (event.key === "ArrowRight" && pandaPosition < 1) {
        setPandaPosition((prev) => prev + 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pandaPosition]);

  const handleFoodCollect = () => {
    setScore((prev) => prev + 1);
    if ((score + 1) % 10 === 0) {
      setSpeed((prev) => prev + 0.5); // Increase speed every 10 points
    }
  };

  const handleRockCollision = () => {
    setLives((prev) => prev - 1);
    if (lives <= 1) {
      alert(`Game Over! Final Score: ${score}`);
      setScore(0);
      setLives(3);
      setSpeed(3); // Reset speed
    }
  };

  // Generate tree positions (5 on each side)
  const treePositions = Array.from({ length: 10 }, (_, i) => [
    i < 5 ? -2 : 2, // Left or right side
    0,
    Math.random() * 30 - 15, // Random z between -15 and 15
  ]);

  return (
    <div className="game-container">
      <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <Stars />
        <Panda position={pandaPosition} />
        <Food
          position={[Math.random() * 2 - 1, 0.5, -10]}
          onCollect={handleFoodCollect}
          pandaPosition={pandaPosition}
          speed={speed}
        />
        <Rock
          position={[Math.random() * 2 - 1, 0.5, -10]}
          onCollision={handleRockCollision}
          pandaPosition={pandaPosition}
          speed={speed}
        />
        <Road />
        {treePositions.map((pos, index) => (
          <Tree key={index} position={pos} />
        ))}
        <OrbitControls enablePan={false} minDistance={5} maxDistance={20} />
      </Canvas>
      <div className="hud">
        <p>Score: {score}</p>
        <p>Lives: {lives}</p>
        <p>Speed: {speed.toFixed(1)}</p>
      </div>
    </div>
  );
}

export default Game;
