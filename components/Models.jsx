import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import React from 'react'
import { Avatar } from './Avatar'

const Models = () => {
  return (
  <>
      <Environment preset='sunset'/>
      <OrbitControls enableZoom={false} enableRotate={true} enablePan={false
      }/>
      <group position={[0,-1,0]}>
        <ContactShadows opacity={0.42} scale={10} blur={1} far={10} resolution={256} color="#000000"/>
        <Avatar/>
      </group>

      <ambientLight intensitys={1}/>
    </>
  )
}

export default Models
