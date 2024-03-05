import './Contact.scss'
import { motion } from "framer-motion"
// import git from '../../images/gitHab.png'
import telegram from '../../images/telegram-64.png'
import ln from '../../images/ln.png'
import facebook from '../../images/facebook.png'

const Contact = () => {

  return (
    <div className='h-full relative overflow-hidden flex justify-center items-center ml-[96px]'>
      <motion.div
        initial={{ y: "-100vh", x: "-50vw" }}
        animate={{ y: "0%", x: "0%" }}
        transition={{ duration: 0.7 }}
        className="h-full w-full absolute bg-gradient-to-r from-black from-30% to-white clip--one">

      </motion.div>
      <motion.div
        initial={{ y: "100vh", x: "140vw" }}
        animate={{ y: "0%", x: "0%" }}
        transition={{ duration: 0.6 }}
        className="h-full w-full absolute bg-gradient-to-l from-black from-30% to-white clip--two">

      </motion.div>

      <div className='relative z-50 flex items-center contact-wrapper'>
        <div className='contact-me'>
          <h4 className='contact-me__title'>Contact Me.</h4>
          <p className='contact-me__info'><p>Send me any message.</p>I'll read it and get back to you.</p>
          <p className='contact-me__socials items-center justify-center'>Or write me on my social networks</p>
          <div className='contact-me__icons'>
            <div className=' h-5'><a target='_blank' href="https://www.linkedin.com/in/artyomharutyunyan/"><img src={ln} alt="" /></a></div>
            <div className=' h-5'><a target='_blank' href="https://t.me/AM0RALity"><img src={telegram} alt="" /></a></div>
            <div className=' h-5'><a target='_blank' href="https://www.facebook.com/AM0RALity"><img src={facebook} alt="" /></a></div>
          </div>
        </div>
        <div className='contact-form'>
          <h4 className='contact-form__title'>Send Me A Message</h4>
          <form>
            <div className='contact-form__wrapper'>
              <input type="text" placeholder='Name' />
              <input type="email" name="email" placeholder='Email' />
            </div>
            <input className='contact-form__subject' type="text" placeholder='Subject' />
            <textarea className='contact-form__textarea' placeholder='Message' ></textarea>
            <input type="submit" value={"Send message"} className='contact-form__submit' />
          </form>
        </div>

      </div >
    </div >
  )
}

export default Contact