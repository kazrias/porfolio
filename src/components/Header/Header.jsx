import './Header.scss'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Header = ({ welcomeDone, setAboutNotDone }) => {
  const [line, setLine] = useState("about")

  return (
    <div className={`header ${welcomeDone ? 'animate' : ''}`}>
      <div className="header-menu">
        <div className="header-menu__item"><NavLink className={({ isActive }) => { isActive && setLine('about') }} to="/">About</NavLink>
          <div className={`header-menu__line ${line}`}></div>
        </div>
        <div  className="header-menu__item"><NavLink className={({ isActive }) => { isActive && setLine('projects') }} to="/projects">Projects</NavLink></div>
        <div  className="header-menu__item"><NavLink className={({ isActive }) => { isActive && setLine('contact') }} to="/contact">Contact</NavLink></div>
      </div>
    </div>
  )
}

