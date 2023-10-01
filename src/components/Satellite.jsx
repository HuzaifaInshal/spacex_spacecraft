import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Satellite(props) {
  const { nodes, materials } = useGLTF("/explorative_space_craft.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.152, 3.743, 8.482]} rotation={[-2.152, 0.01, 0.007]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface14371_phong4_0.geometry}
            material={materials.phong4}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface14371_blinn3_0.geometry}
            material={materials.blinn3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface14371_TestSpaceman_0.geometry}
            material={materials.TestSpaceman}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface14371_FinalTexture_0.geometry}
            material={materials.FinalTexture}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface14371_lambert1_0.geometry}
            material={materials.lambert1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface14371_Scaffold1_0.geometry}
            material={materials.Scaffold1}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/explorative_space_craft.glb");