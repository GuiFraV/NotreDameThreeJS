import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three';
import React, { useRef } from 'react';

export default function Cathedrale() {
    const gift = useGLTF("./scene.gltf");
    const meshRef = useRef();

    const { clock } = useThree();
    const targetRotation = useRef(new THREE.Euler());

    useFrame(() => {
      if (meshRef.current) {
        const elapsedTime = clock.getElapsedTime();
        targetRotation.current.y = elapsedTime * 0.2; 
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotation.current.y, 0.05); // Ajustez le facteur alpha ici
      }
    });

    return (
        <>


            <OrbitControls />
            <primitive 
                object={gift.scene} 
                position={[0, -1.3, 0]}
                ref={meshRef}
                scale={0.001} 
            />

            <Environment preset={'city'} />
        </>
    )
}