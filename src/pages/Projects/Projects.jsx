import { useRef } from 'react'
import './Projects.scss'
import { motion, useScroll, useTransform } from "framer-motion"
import ammaTrack from '../../images/amma-track.png'
import galactus from '../../images/galactus.jpg'
const projects = [
  {
    id: 1,
    title: 'AMMA-Track',
    img: ammaTrack,
    link: "https://amma-track.vercel.app/",
    descr: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus unde perspiciatis odio quidem consequuntur commodi error quas quia velit nesciunt."
  },
  {
    id: 2,
    title: 'Galactus-Store',
    img: galactus,
    link: "https://galactus-store.vercel.app/",
    descr: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus unde perspiciatis odio quidem consequuntur commodi error quas quia velit nesciunt."
  }
]

const Projects = () => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-67%"])
  return (
    <motion.div
      className='h-full'
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className='h-[600vh] relative' ref={ref}>
        <div className='h-[100vh] flex items-center justify-center text-8xl text-center'>My Projects</div>
        <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
          <motion.div style={{ x }} className='flex'>
            <div className='h-screen w-screen flex justify-center items-center'>Keep scrolling</div>
            {projects.map(({ id, title, img, link, descr }) => (
              <div className='h-screen w-screen flex justify-center items-center ' key={id}>
                <div className='flex flex-col gap-8 text-white'>
                  <h2>{title}</h2>
                  <div className='relative'>
                    <img className='project-img' src={img} alt="" />
                    <p >{descr}</p>
                    <a target='_blank' href={link}>Check it</a>
                  </div>
                </div>
              </div >))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects