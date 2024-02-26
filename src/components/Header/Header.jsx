import { useState } from 'react'
import './Header.scss'
export const Header = ({ welcomeDone }) => {
  const [line, setLine] = useState("about")
  return (
    <div className={`header ${welcomeDone ? 'animate' : ''}`}>
      <div className="header-menu">
        <div onClick={()=>setLine("about")} className="header-menu__item">About
          <div className={`header-menu__line ${line}`}></div>
        </div>
        <div onClick={()=>setLine("projects")} className="header-menu__item">Projects</div>
        <div onClick={()=>setLine("contact")} className="header-menu__item">Contact</div>
      </div>
    </div>
  )
}
