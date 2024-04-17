'use client'
import { Avatar } from "@/components/Avatar";
import MainCanvas from "@/components/MainCanvas";
import Menu from "@/components/Menu";
import RenderModel from "@/components/RenderModel";
import Image from 'next/image'
import { animate, motion } from 'framer-motion'

export default function Home() {
  const nameVariants = {
    initial : {
      opacity : 0,
      y : 100,
    },
    animate: {
      opacity : 1,
      y : 0,
    }
  }
  return (
  <main className="h-screen w-screen flex bg-red-200">
      <motion.div className="w-full h-full fixed">
        <RenderModel/>
      </motion.div>

      <motion.h1 variants={nameVariants} initial="initial" animate="animate" transition={{duration: 1, delay: 0.5}}  className="fixed bottom-[200px] text-3xl w-full text-center">thefordz</motion.h1>
  </main>
  )
}
