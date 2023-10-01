
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/moon (1).glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.meshNode_Material_u1_v1_0.geometry}
          material={materials.Material_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.meshNode_Material_u1_v1_0_1.geometry}
          material={materials.Material_u1_v1}
        />
      </group>
    </group>
  );
}