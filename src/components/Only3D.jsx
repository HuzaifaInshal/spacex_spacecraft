import React from 'react'
import { Satellite } from './Satellite';
import {  OrbitControls, PerspectiveCamera,Environment,Torus  } from "@react-three/drei";
// import { Bloom, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';


const Only3D = () => {
  return (
    <>
        <OrbitControls />
    <PerspectiveCamera makeDefault position={[0,0,100]} fov={1500}/>
    <ambientLight args={["#ffffff",0.5]} />

    <mesh position={[0,0,0]} rotation={[0,0,0]}>
    <Satellite/>
    </mesh>

    {/* <Torus args={[20,5, 64, 100]} position={[-50,0,0]}>
      <meshPhongMaterial
        emissive="#ffffff" emissiveIntensity={10} 
      />
    </Torus>

    <EffectComposer>
        <Bloom luminanceThreshold={0.6} luminanceSmoothing={0.9} height={300} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer> */}

    <pointLight position={[-4,0,0]} args={["#ffffff",300]}/>
    <pointLight position={[4,0,0]} args={["#ffffff",300]}/>
    <pointLight position={[0,-4,0]} args={["#ffffff",300]}/>
    <pointLight position={[0,4,0]} args={["#ffffff",300]}/>
    <pointLight position={[0,0,4]} args={["#ffffff",300]}/>
    <pointLight position={[0,0,-4]} args={["#ffffff",300]}/>
    <ambientLight args={["#ffffff",0.5]} />
    <Environment preset="city" />
    </>
  )
}

export default Only3D