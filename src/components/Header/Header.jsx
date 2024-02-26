import './Header.scss'
export const Header = ({ welcomeDone }) => {
  return (
    <div className={`header ${welcomeDone ? 'animate' : ''}`}>
      <div className="header-menu">
        <div className="header-menu__item">About</div>
        <div className="header-menu__item">Project</div>
        <div className="header-menu__item">Contact</div>
      </div>
    </div>
  )
}
