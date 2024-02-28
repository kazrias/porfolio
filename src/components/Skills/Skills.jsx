import './Skills.scss'
const skills = ['Javascript', 'React', 'Redux', 'Webpack', 'Vite', 'SCSS', 'Tailwind CSS', 'Gulp', 'Firebase', 'Anime.js', 'Git', 'React Router', 'Figma', 'Photoshop']
export const Skills = () => {
  return (
    <div className="skills-section">
      <div className="skills">
        {
          skills.map(skill =>
            <div className="skills-logo">{skill}</div>
          )
        }
      </div>
    </div>
  )
}
