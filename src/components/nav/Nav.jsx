import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {RiUserStarLine} from 'react-icons/ri'
import {RiTodoLine} from 'react-icons/ri'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineMonitor} from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav ==='#home' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''}><RiUserStarLine/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active' : ''}><RiTodoLine/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav ==='#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav ==='#portfolio' ? 'active' : ''}><MdOutlineMonitor/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active' : ''}><FiPhoneCall/></a>
    </nav>
  )
}

export default Nav
