import { useRef } from 'react'
import './Projects.scss'
import { motion, useScroll, useTransform } from "framer-motion"
import ammaTrack from '../../images/amma-track.png'
import galactus from '../../images/galactus.jpg'
import githab from '../../images/gitHab.png'
const projects = [
  {
    id: 1,
    title: 'AMMA-Track',
    img: ammaTrack,
    link: "https://amma-track.vercel.app/",
    git: "https://github.com/kazrias/AMMA-track",
    descr: "AMMA-Track is an intuitive project management platform designed to empower individuals to accomplish tasks efficiently and effectively.With its user-friendly interface and robust features, AMMA-Track enables users to organize projects, track progress seamlessly from any location. Whether you're working in a bustling office environment or from the tranquility of your home office, AMMA-Track adapts to your unique workflow, helping you stay on top of deadlines and reach new levels of productivity"
  },
  {
    id: 2,
    title: 'Galactus-Store',
    img: galactus,
    link: "https://galactus-store.vercel.app/",
    git: "https://github.com/kazrias/galactus",
    descr: "Embark on a galactic journey through our vast array of products, where every purchase feels like a cosmic conquest. From stellar fashion to interstellar gadgets, our store orbits around your every need. Explore the infinite expanse of our collection, curated with cosmic care to bring you the latest in cosmic trends and innovations. At Galactus-Store, the universe is your shopping aisle, and every purchase propels you further into the cosmic adventure of style and innovation. "
  }
]

const Projects = () => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref })
  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "-67%"])
  return (
    <motion.div
      className='h-full bg-gradient-to-b from-black to-neutral-900'
      initial={{ y: "100vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.8 }}
    >
      <div className='h-[360vh] relative' ref={ref}>
        <div className='h-[100vh] flex items-center relative justify-center text-8xl text-center my-projects'><div className='relative'>My Projects
          <div className="mouse"></div></div> </div>

        <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
          <motion.div style={{ x }} className='flex'>
            <div className='h-screen w-screen flex justify-center items-center bg-gradient-to-b from-neutral-900 to-black'></div>
            {projects.map(({ id, title, img, link, descr, git }) => (
              <div className='h-screen w-screen flex justify-center flex-col items-center bg-gradient-to-b from-neutral-900 to-black ' key={id}>
                <div>
                  <a target='_blank' href={git} className='flex items-center mb-5 gap-3'>
                    <h2 className='project-title' >{title}</h2>
                    <img src={githab} className=' h-7 ' alt="" />
                  </a>

                </div>
                <div className='max-w-4xl flex flex-col gap-8 text-white overflow-hidden border border-white  glass-effect'>
                  <div className='relative'>
                    <img className='project-img' src={img} alt="" />
                    <p className=' p-3'>{descr}
                      <a target='_blank' className=' block' href={link}>
                        <button className="ui-btn mt-2">
                          <span>
                            Check it
                          </span>
                        </button>
                      </a>
                    </p>

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