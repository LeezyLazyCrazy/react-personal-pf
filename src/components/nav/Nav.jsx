import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {RiUserStarLine} from 'react-icons/ri'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineMessage} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav ==='#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''}><RiUserStarLine/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav ==='#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav ==='#portfolio' ? 'active' : ''}><MdOutlineMessage/></a>
    </nav>
  )
}

export default Nav
