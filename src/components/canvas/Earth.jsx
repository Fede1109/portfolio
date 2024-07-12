import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader"
const Earth = () => {
  return (
    <div>Earth</div>
  )
}

const EarthCanvas = () => {
  return(
    <Canvas>
      
    </Canvas>
  )
}

export default Earth