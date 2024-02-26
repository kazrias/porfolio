
import './Intro.scss'
import { useEffect, useState } from 'react'
import WaterGrid from '../../components/WaterGrid/WaterGrid'
import img from '../../assets/101060979.jpg'
const Intro = () => {
  const [welcomeDone, setWelcomeDone] = useState(false)
  useEffect(() => {
    setTimeout(() => setWelcomeDone(true), 2000)
  })
  return (
    <div className='App'>
      <h2 className={`intro--welcome ${welcomeDone ? 'inactive' : ''}`}>Hello</h2>
      <section className="intro">
        <div className="intro--main">
          <div className="img-info--wrapper">
            <div className={`intro--img ${welcomeDone ? 'animate' : ''}`}><img src={img} alt="" /></div>
            <div className="wrapper">
              <p className={`intro--who ${welcomeDone ? 'animate' : ''}`}>I'm Artyom Harutyunyan</p>
              <p className={`intro--what ${welcomeDone ? 'animate' : ''}`}>A front-end developer based in Yerevan, Armenia. </p>
            </div>
          </div>
        </div>
        <p className={`intro--aim ${welcomeDone ? 'animate' : ''}`}>My aim is not just to write code, but to create interactive web applications that inspire and enhance user experience. I continuously explore new technologies and best practices to stay updated with the latest trends in web development and apply them in my work.</p>
        {welcomeDone && <div className='waterGrid'>
          <WaterGrid welcomeDone={welcomeDone} />
        </div>}
      </section>
      <div className="empty"></div>
    </div>
  )
}

export default Intro
