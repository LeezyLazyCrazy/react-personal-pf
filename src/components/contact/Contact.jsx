// import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiKakaoTalkLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
  const  form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_gtrntgr', 'template_3483i4m', form.current, 'nKNOb27V6I57lwPmC')
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>leezy97html@gmail.com</h5>
            <a href="mailto:leezy97html@gmail.com" target="_blank"rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiKakaoTalkLine className='contact__option-icon'/>
            <h4>KakaoTalkApp</h4>
            <h5>Open chat</h5>
            <a href="https://open.kakao.com/o/sBKP7N5d" target="_blank"rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+*********</h5>
            <a href="https://api.whatsapp.com/send?phone+35679043850" target="_blank"rel='noreferrer'>Send a message</a>
          </article>
        </div>
        {/* End Of Contact Option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact
