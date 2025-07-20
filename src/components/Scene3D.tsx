import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, useTexture, Html } from '@react-three/drei';
import * as THREE from 'three';

interface SceneProps {
  onSequenceComplete: () => void;
}

const AnimatedScene: React.FC<SceneProps> = ({ onSequenceComplete }) => {
  const [currentScene, setCurrentScene] = useState(0);
  const groupRef = useRef<THREE.Group>(null);
  const { camera } = useThree();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentScene < 4) {
        setCurrentScene(currentScene + 1);
      } else {
        onSequenceComplete();
      }
    }, currentScene === 0 ? 3000 : currentScene === 1 ? 2000 : currentScene === 2 ? 4000 : 3000);

    return () => clearTimeout(timer);
  }, [currentScene, onSequenceComplete]);

  useFrame((state) => {
    if (groupRef.current) {
      // Smooth rotation animation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      // Scene-specific animations
      if (currentScene === 1) {
        // Zoom in effect for newspaper
        camera.position.z = THREE.MathUtils.lerp(camera.position.z, 2, 0.05);
      } else if (currentScene === 2) {
        // Zoom out and position for Sherlock scene
        camera.position.z = THREE.MathUtils.lerp(camera.position.z, 5, 0.03);
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Scene 0: Newspaper and Magnifying Glass */}
      {currentScene === 0 && (
        <group>
          <mesh position={[0, 0, 0]} rotation={[-0.2, 0, 0]}>
            <planeGeometry args={[4, 3]} />
            <meshStandardMaterial color="#f4f1e8" transparent opacity={0.9} />
            <Html
              transform
              position={[0, 0, 0.01]}
              style={{
                width: '400px',
                height: '300px',
                background: '#f4f1e8',
                color: '#2c1810',
                fontSize: '12px',
                padding: '20px',
                fontFamily: 'serif',
                lineHeight: '1.4',
                pointerEvents: 'none'
              }}
            >
              <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '16px', marginBottom: '10px' }}>
                THE VICTORIAN TIMES
              </div>
              <div style={{ columnCount: 2, columnGap: '15px', fontSize: '10px' }}>
                <p>MYSTERIOUS DETECTIVE SOLVES IMPOSSIBLE CASE</p>
                <p>Baker Street consulting detective demonstrates remarkable powers of deduction...</p>
                <p>Witnesses report extraordinary analytical abilities...</p>
              </div>
            </Html>
          </mesh>
          
          {/* Magnifying Glass */}
          <group position={[1.5, 0.5, 0.5]} rotation={[0, 0, 0.3]}>
            <mesh>
              <cylinderGeometry args={[0.02, 0.02, 1]} />
              <meshStandardMaterial color="#8B4513" />
            </mesh>
            <mesh position={[0, 0.5, 0]}>
              <torusGeometry args={[0.4, 0.02]} />
              <meshStandardMaterial color="#FFD700" />
            </mesh>
            <mesh position={[0, 0.5, 0.01]}>
              <circleGeometry args={[0.38]} />
              <meshStandardMaterial color="#E6F3FF" transparent opacity={0.3} />
            </mesh>
          </group>
        </group>
      )}

      {/* Scene 1: Sherlock Holmes Image and Quote */}
      {currentScene >= 1 && currentScene <= 2 && (
        <group>
          <mesh position={[-2, 0, 0]} rotation={[0, 0.1, 0]}>
            <planeGeometry args={[3, 4]} />
            <meshStandardMaterial color="#8B4513" />
            <Html
              transform
              position={[0, 0, 0.01]}
              style={{
                width: '300px',
                height: '400px',
                backgroundImage: 'url(/src/assets/sherlock-1.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '8px solid #8B4513',
                borderRadius: '8px',
                pointerEvents: 'none'
              }}
            />
          </mesh>
          
          <group position={[2, 0, 0]}>
            <Text
              fontSize={0.3}
              color="#D4AF37"
              anchorX="center"
              anchorY="middle"
              maxWidth={4}
              textAlign="center"
            >
              "When you have eliminated the impossible, whatever remains, however improbable, must be the truth."
            </Text>
            <Text
              position={[0, -1.5, 0]}
              fontSize={0.2}
              color="#CD853F"
              anchorX="center"
              anchorY="middle"
            >
              — Sherlock Holmes
            </Text>
          </group>
        </group>
      )}

      {/* Scene 3: Final Logo Scene */}
      {currentScene >= 3 && (
        <group>
          <mesh position={[0, 1.5, 0]}>
            <planeGeometry args={[2, 2]} />
            <meshStandardMaterial transparent opacity={0} />
            <Html
              transform
              position={[0, 0, 0.01]}
              style={{
                width: '200px',
                height: '200px',
                backgroundImage: 'url(/lovable-uploads/e3a10d0d-4f1e-49a1-8b38-b48a1cefb127.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                pointerEvents: 'none'
              }}
            />
          </mesh>
          
          <Text
            position={[0, 0, 0]}
            fontSize={0.8}
            color="#D4AF37"
            anchorX="center"
            anchorY="middle"
          >
            eXpress
          </Text>
          
          <Text
            position={[0, -0.8, 0]}
            fontSize={0.4}
            color="#CD853F"
            anchorX="center"
            anchorY="middle"
          >
            eXpress to inspire
          </Text>
          
          <Text
            position={[0, -1.4, 0]}
            fontSize={0.25}
            color="#8B7355"
            anchorX="center"
            anchorY="middle"
            maxWidth={8}
            textAlign="center"
          >
            Public Speaking and Debating Committee
          </Text>
        </group>
      )}
    </group>
  );
};

const Scene3D: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  return (
    <div className="fixed inset-0 z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={0.8} castShadow />
        <AnimatedScene onSequenceComplete={onComplete} />
      </Canvas>
    </div>
  );
};

export default Scene3D;