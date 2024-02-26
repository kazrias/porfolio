import './App.scss'
import Intro from './pages/Intro/Intro'
import { Routes, Route, Link } from 'react-router-dom'
import { Header } from './components/Header/Header'
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
      </Routes>
    </>
  )
}

export default App
