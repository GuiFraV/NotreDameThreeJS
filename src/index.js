import './style.css';

import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'

import Cathedrale from './Cathedrale'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas camera={{ position: [0, 2, 6]}}>
        <Cathedrale />
    </Canvas>
)