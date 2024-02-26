import './App.scss'
import Intro from './pages/Intro/Intro'
import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Header } from './components/Header/Header'
function App() {
  const [welcomeDone, setWelcomeDone] = useState(false)
  useEffect(() => {
    setTimeout(() => setWelcomeDone(true), 2000)
  })
  return (
    <>
      <Header welcomeDone={welcomeDone}/>
      <Routes>
        <Route path="/" element={<Intro welcomeDone={welcomeDone} />} />
      </Routes>
    </>
  )
}

export default App
