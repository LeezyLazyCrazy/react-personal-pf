import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#!" className='footer__logo'>LEEZY</a>

      <ul className="permalinks">
        <li><a href="#!">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/leeg1/"target="_blank"rel='noreferrer'><FiInstagram/></a>
        <a href="https://github.com/LeezyLazyCrazy" target="_blank"rel='noreferrer'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/FEleezy" target="_blank"rel='noreferrer'><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>2022 | by LEEZY</small>
      </div>
    </footer>
  )
}

export default Footer
