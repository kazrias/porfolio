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
    <div className="logos">
      <div className="logos-slide">
        <div><img src={js} alt="" /></div>
        <div><img src={react} alt="" /></div>
        <div><img src={redux} alt="" /></div>
        <div><img src={webpack} alt="" /></div>
        <div><img src={vite} alt="" /></div>
        <div><img src={sass} alt="" /></div>
        <div><img src={tailwind} alt="" /></div>
        <div><img src={gulp} alt="" /></div>
        <div><img src={firebase} alt="" /></div>
        <div><img src={git} alt="" /></div>
        <div><img src={router} alt="" /></div>
        <div><img src={figma} alt="" /></div>
        <div><img src={photoshop} alt="" /></div>
      </div>
      <div className="logos-slide">
        <div><img src={js} alt="" /></div>
        <div><img src={react} alt="" /></div>
        <div><img src={redux} alt="" /></div>
        <div><img src={webpack} alt="" /></div>
        <div><img src={vite} alt="" /></div>
        <div><img src={sass} alt="" /></div>
        <div><img src={tailwind} alt="" /></div>
        <div><img src={gulp} alt="" /></div>
        <div><img src={firebase} alt="" /></div>
        <div><img src={git} alt="" /></div>
        <div><img src={router} alt="" /></div>
        <div><img src={figma} alt="" /></div>
        <div><img src={photoshop} alt="" /></div>
      </div>
      <div className="highlight-wrapper">
        <div className="logos-slide__highlight">
          <div><img src={js} alt="" /></div>
          <div><img src={react} alt="" /></div>
          <div><img src={redux} alt="" /></div>
          <div><img src={webpack} alt="" /></div>
          <div><img src={vite} alt="" /></div>
          <div><img src={sass} alt="" /></div>
          <div><img src={tailwind} alt="" /></div>
          <div><img src={gulp} alt="" /></div>
          <div><img src={firebase} alt="" /></div>
          <div><img src={git} alt="" /></div>
          <div><img src={router} alt="" /></div>
          <div><img src={figma} alt="" /></div>
          <div><img src={photoshop} alt="" /></div>
        </div>
      </div>
    </div>
  )
}
