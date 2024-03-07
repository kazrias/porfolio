import './Contact.scss'
import { motion } from "framer-motion"
// import git from '../../images/gitHab.png'
import telegram from '../../images/telegram-64.png'
import ln from '../../images/ln.png'
import facebook from '../../images/facebook.png'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import loadSvg from '../../images/download.svg'
const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    (function () {
      emailjs.init({
        publicKey: "6XCENoeYEGf6DxjGr",
      });
    })();
    const params = {
      from_name: name,
      from_email: email,
      message: msg,
      subject: subject,
    }
    const emailId = "service_c3n3oq8";
    const templatedId = "template_ec06psb";
    setIsLoading(true);
    emailjs.send(emailId, templatedId, params)
      .then(() => {
        setName('')
        setEmail('')
        setSubject('')
        setMsg('')
        setIsLoading(false);
      })
      .catch(err => console.log(err))
  }
  return (
    <div className='h-full relative overflow-hidden flex justify-center items-center ml-[99px]'>
      <motion.div
        initial={{ y: "-100vh", x: "-50vw", opacity: 0 }}
        animate={{ y: "0%", x: "0%", opacity: 1 }}
        transition={{ duration: 0.5, opacity: { duration: 2.5 } }}
        className="h-full w-full absolute bg-gradient-to-r from-black from-30% to-white clip--one">

      </motion.div>
      <motion.div
        initial={{ y: "100vh", x: "140vw", opacity: 0 }}
        animate={{ y: "0%", x: "0%", opacity: 1 }}
        transition={{ duration: 0.6, opacity: { duration: 2.5 } }}
        className="h-full w-full absolute bg-gradient-to-l from-black from-30% to-white clip--two">

      </motion.div>

      <div className='relative z-50 flex items-center contact-wrapper'>
        <div className='contact-me'>
          <h4 className='contact-me__title'>Contact Me.</h4>
          <p className='contact-me__info'><span>Send me any message.</span>I'll read it and get back to you.</p>
          <p className='contact-me__socials items-center justify-center'>Or write me on my social networks</p>
          <div className='contact-me__icons'>
            <a target='_blank' href="https://www.linkedin.com/in/artyomharutyunyan/"><img src={ln} alt="" /></a>
            <a target='_blank' href="https://t.me/AM0RALity"><img src={telegram} alt="" /></a>
            <a target='_blank' href="https://www.facebook.com/AM0RALity"><img src={facebook} alt="" /></a>
          </div>
        </div>
        <div className='contact-form'>
          <h4 className='contact-form__title'>Send Me A Message</h4>
          <form onSubmit={handleSubmit}>
            <div className='contact-form__wrapper'>
              <input value={name} type="text" placeholder='Name*' id='from_name' onChange={(e) => setName(e.target.value)} />
              <input value={email} type="email" name="email" placeholder='Email*' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <input value={subject} className='contact-form__subject' type="text" placeholder='Subject (optional)' id='subject' onChange={(e) => setSubject(e.target.value)} />
            <textarea value={msg} id='message' className='contact-form__textarea' placeholder='Message*' onChange={(e) => setMsg(e.target.value)} ></textarea>

            {
              isLoading ? <div className='contact-form__submit contact-form__submit--loading' ><img src={loadSvg} alt="" /> <span>Sending...</span></div> : <button disabled={!(name && email && msg)} type="submit" className='contact-form__submit'>
                Send message </button>
            }

          </form>
        </div>

      </div >
    </div >
  )
}

export default Contact