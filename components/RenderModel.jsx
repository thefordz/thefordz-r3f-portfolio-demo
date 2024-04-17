'use client'
import { ContactShadows, Environment, OrbitControls, Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import React, { Suspense } from 'react'
import Models from './Models'

const RenderModel = () => {
  return (
  <Canvas shadows camera={{position: [0,2,10],  fov:30  }}>
      <Models/>
  </Canvas>

  )
}

export default RenderModel
