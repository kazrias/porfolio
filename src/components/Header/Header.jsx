import './Header.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = ({ welcomeDone, setAboutNotDone }) => {
  const [line, setLine] = useState("about")
  const onClickSection = (sectionName) => {
    setLine(sectionName);
    setAboutNotDone(false);
    localStorage.setItem('section', sectionName);
  }
  useEffect(() => {
    const currentSection = localStorage.getItem('section')
    if (currentSection) setLine(currentSection);

  }, [])
  return (
    <div className={`header ${welcomeDone ? 'animate' : ''}`}>
      <div className="header-menu">
        <div onClick={() => onClickSection('about')} className="header-menu__item"><Link to="/">About</Link>
          <div className={`header-menu__line ${line}`}></div>
        </div>
        <div onClick={() => onClickSection('projects')} className="header-menu__item"><Link to="/projects">Projects</Link></div>
        <div onClick={() => onClickSection('contact')} className="header-menu__item"><Link to="/contact">Contact</Link></div>
      </div>
    </div>
  )
}

