import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import SpenderScreen from './components/SpenderScreen'
import ManagScreen from './components/ManagScreen'
import CreateForm from './components/CreateForm'
import Interaction from './components/Interaction'
import TransactionHistory from './components/TransactionHistory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HomePage />
      <SpenderScreen />
      <ManagScreen />
      <CreateForm />
      <Interaction />
      <TransactionHistory />
    </>
  )
}

export default App
