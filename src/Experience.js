import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

export default function Experience() {
    const gift = useGLTF("./scene.gltf");

    return (
        <>


            <OrbitControls />
            <primitive 
                object={gift.scene} 
                position={[0, 0, 0]} // Ajustez la position ici
                scale={0.001} // Ajustez l'échelle ici
            />

            <Environment preset={'city'} />
        </>
    )
}