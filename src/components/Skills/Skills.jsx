import './Skills.scss'
import js from '../../images/js.png'
import react from '../../images/react.png'
import redux from '../../images/redux.png'
import webpack from '../../images/webpack.png'
import vite from '../../images/vite.png'
import sass from '../../images/sass.png'
import tailwind from '../../images/tailwind.png'
import gulp from '../../images/gulp.png'
import firebase from '../../images/firebase.png'
import git from '../../images/git.png'
import router from '../../images/react-router.svg'
import figma from '../../images/figma.png'
import photoshop from '../../images/photoshop.png'


const skills2 = ['Javascript', 'React', 'Redux', 'Webpack', 'Vite', 'SASS', 'Tailwind CSS', 'Gulp', 'Firebase', 'Anime.js', 'Git', 'React Router', 'Figma', 'Photoshop']
const skills = [js, react, redux, webpack, vite, sass, tailwind, gulp, firebase, git, router, figma, photoshop]
export const Skills = () => {
  return (
    <div className="logos-wrapper">
      <div className='skill-title'>
        Skills
      </div>
      <div className="logos">
        <div className="logos-slide">
          {skills.map(skill => <div key={skill}><img src={skill} alt="" /></div>)}
        </div>
        <div className="logos-slide">
          {skills.map(skill => <div key={skill}><img src={skill} alt="" /></div>)}
        </div>
        <div className="highlight-wrapper">
          <div className="logos-slide__highlight">
            {skills.map(skill => <div key={skill}><img src={skill} alt="" /></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}
