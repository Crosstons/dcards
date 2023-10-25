import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import SpenderScreen from './components/SpenderScreen'
import ManagScreen from './components/ManagScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HomePage />
      <SpenderScreen />
      <ManagScreen />
    </>
  )
}

export default App
