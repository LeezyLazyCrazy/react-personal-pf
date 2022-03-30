import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFillChatFill} from "react-icons/bs";
import {SiGmail} from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/LeezyLazyCrazy" target="_blank"><FaGithub/></a>
      <a href="https://open.kakao.com/o/sBKP7N5d" target="_blank"><BsFillChatFill/></a>
      <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
      <a href="https://gmail.com" target="_blank"><SiGmail/></a>
    </div>
  )
}

export default HeaderSocials
