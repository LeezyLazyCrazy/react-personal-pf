import React from "react";
import './portfolio.css';
import IMG1 from '../../assets/pf-react.png';
import IMG2 from '../../assets/pf-vue.png';
import IMG4 from '../../assets/pf-movie-vue.png';
import IMG5 from '../../assets/pf-squid.png';
import IMG6 from '../../assets/portfolio6.jpg';
import IMG7 from '../../assets/pf-todo.png';

const data = [
  {
    id:1,
    image: IMG1,
    title: 'React-Portfolio ',
    date: '2022.Apr',
    tech: ['#react ','#email-js ','#react-icons '],
    github: 'https://github.com/LeezyLazyCrazy/react-personal-pf.git',
    demo: 'https://leezy-portfolio-react.netlify.app/'
  },
  {
    id:2,
    image: IMG2,
    title: 'Vue-PortFolio ',
    date: '2022.Mar',
    tech: ['#vue ','#vuetify ','#sass '],
    github: 'https://github.com/LeezyLazyCrazy/personal-pf.git',
    demo: 'https://leezy-portfolio.netlify.app'
  },
  {
    id:4,
    image: IMG4,
    title: 'Vue-MovieAPI ',
    date: '2022.Jan',
    tech: ['#vue ','#sass ','#omdbAPI ','#bootstrap '],
    github: 'https://github.com/LeezyLazyCrazy/Vue3-MovieAPI-v1',
    demo: 'https://leezy-vuejs-movie.netlify.app'
  },
  {
    id:5,
    image: IMG5,
    title: 'Threejs-Squidgame ',
    date: '2021.Dec',
    tech: ['#html ','#css ','#three-js '],
    github: 'https://github.com/LeezyLazyCrazy/squidgame_threejs_pf.git',
    demo: 'https://squidgamedoll-threejs.netlify.app'
  },
  {
    id:6,
    image: IMG6,
    title: 'Threejs-Flag ',
    date: '2022.Mar',
    tech: ['#html ','#css ','#three-js '],
    github: 'https://github.com/LeezyLazyCrazy/threejs-flag.git',
    demo: 'https://leezy-portfolio.netlify.app'
  },
  {
    id:7,
    image: IMG7,
    title: 'To-do-list ',
    date: '2022.Mar',
    tech: ['#html ','#css ','#vanilla-js '],
    github: 'https://github.com/LeezyLazyCrazy/checklist-note',
    demo: 'https://checklist-note.netlify.app'
  },
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, date, tech, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={ image } alt={ title }/>
                </div>
                <h5>{ date }</h5>
                <h3>{ title }</h3>
                <h4>{ tech }</h4>                   
                <div className="portfolio__item-cta">
                  <a href={ github } className="btn">Github</a>
                  <a href={ demo } className="btn btn-primary" target='_blank'rel='noreferrer'>Live Demo</a>
                </div>                                 
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
