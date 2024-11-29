import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SlidesGPT from './components/SlidesGpt'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SlidesGPT/>
    </>
  )
}

export default App
