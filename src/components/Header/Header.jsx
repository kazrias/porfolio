import './Header.scss'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export const Header = ({ welcomeDone }) => {
  const [line, setLine] = useState("about")
  let location = useLocation()
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setLine('about')
        break
      case "/projects":
        setLine("projects")
        break
      case "/contact":
        setLine("contact")
        break
    }
  }, [location])
  return (
    <div className={`header ${welcomeDone ? 'animate' : ''}`}>
      <div className="header-menu">
        <div className="header-menu__item"><NavLink to="/">About</NavLink>
          <div className={`header-menu__line ${line}`}></div>
        </div>
        <div className="header-menu__item"><NavLink to="/projects">Projects</NavLink></div>
        <div className="header-menu__item"><NavLink to="/contact">Contact</NavLink></div>
      </div>
    </div>
  )
}

