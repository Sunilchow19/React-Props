import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Parent from './propsNormal/parent'

import Second from './propsChildren/initial'

import Image from './ImageModules/image' 


function App() {


  return (
    <>

      <Parent/>

      <Second/>

      <Image/>
    </>
  )
}

export default App
