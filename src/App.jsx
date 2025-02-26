import { OrbitControls } from "@react-three/drei";
import React from 'react';
import { Canvas } from '@react-three/fiber';
import UI from './components/UI';


function App() {
  return(
  <>
    <h1 className="text-3xl font-bold underline"> underline </h1>
    {/* <UI/>
    <Canvas
      camera={{
        position: [3, 3, 3],
      }}
    >
      <color attach="background" args={["333333"]}/>
      <OrbitControls/>
      <mesh>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshNormalMaterial />
      </mesh>
    </Canvas> */}
  </>
  );
}
export default App;