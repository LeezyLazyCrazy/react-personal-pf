import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          <div className="experience__content">

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>              
              </div>        
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>              
              </div> 
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Javascript</h4>              
              </div> 
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>SCSS</h4>              
              </div> 
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Vue.js</h4>              
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>React</h4>              
              </div> 
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Etc Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Three.js</h4>
              </div> 
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Vuetify</h4>
              </div> 
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
              </div> 
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Github</h4>
              </div> 
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Mysql</h4>
              </div> 
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience
