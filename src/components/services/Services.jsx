import React from 'react'
import './services.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container services__container">
      <article className='service'>
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsPatchCheckFill className='service__list-icon'/>
              <p>HTML</p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon'/>
              <p>CSS</p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon'/>
              <p>SCSS</p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon'/>
              <p>JAVASCRIPT</p>
            </li>

          </ul>
        </article>
        {/* End Of UI/ UX */}
        <article className='service'>
          <div className="service__head">
            <h3>Framework </h3>
          </div>

          <ul className='service__list'>
            <li>
                <BsPatchCheckFill className='service__list-icon'/>
                <p>REACT</p>
              </li>
            <li>
                <BsPatchCheckFill className='service__list-icon'/>
                <p>VUE</p>
            </li>


            
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Library</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsPatchCheckFill className='service__list-icon'/>
              <p>THREE.JS</p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon'/>
              <p>VUETIFY</p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon'/>
              <p>BOOTSTRAP</p>
            </li>

            
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Ect</h3>
          </div>

          <ul className='service__list'>

            <li>
              <BsPatchCheckFill className='service__list-icon'/>
              <p>OPEN API</p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon'/>
              <p>GITHUB</p>
            </li>
            
          </ul>
        </article>
        {/* End Of Web */}

  
      </div>
    </section>
  )
}

export default Services
