import './Contact.scss'
import { useRef } from 'react'
import { motion } from "framer-motion"

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
          <p className='contact-me__socials'>Or write on my social networks</p>
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