import './App.scss'

import { useEffect, useState } from 'react'

import { Header } from './components/Header/Header'
import { Routes, Route, Link } from 'react-router-dom'

import Intro from './pages/Intro/Intro'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'

function App() {
  const [welcomeDone, setWelcomeDone] = useState(false);
  const [aboutNotDone, setAboutNotDone] = useState(true)
  useEffect(() => {
    setTimeout(() => setWelcomeDone(true), 2000)
  })
  return (
    <div className='h-full bg-gradient-to-b from-black to-black'>
      <Header welcomeDone={welcomeDone} setAboutNotDone={setAboutNotDone} />
      <Routes>
        <Route path="/" element={<Intro welcomeDone={welcomeDone} aboutNotDone={aboutNotDone} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
