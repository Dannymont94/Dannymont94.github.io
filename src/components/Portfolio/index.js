import React from 'react';

function Portfolio() {
  const projects = [
    {
      name: 'Minnow',
      class: 'minnow',
      tools: 'Node, Express, Handlebars, MySQL',
      link: 'https://nameless-river-82781.herokuapp.com/login'
    },
    {
      name: 'Nomadica',
      class: 'nomadica',
      tools: 'HTML, CSS, JS',
      link: 'https://dj-viking.github.io/Nomadica/'
    },
    {
      name: 'Weather Dashboard',
      class: 'weather-dashboard',
      tools: 'HTML, CSS, JS',
      link: 'https://dannymont94.github.io/weather-dashboard/'
    },
    {
      name: 'Gaming Survey',
      class: 'gaming-survey',
      tools: 'HTML/CSS',
      link: 'https://dannymont94.github.io/gaming-survey/'
    },
    {
      name: 'Pizza Hunt',
      class: 'pizza-hunt',
      tools: 'MongoDB, Express, Node',
      link: 'https://sheltered-shelf-68669.herokuapp.com/'
    },
    {
      name: 'Code Quiz',
      class: 'code-quiz',
      tools: 'HTML, CSS, JS',
      link: 'https://dannymont94.github.io/code-quiz/'
    },
  ]

  return (
    <section id="recent-work">
      <div className="left">
        <h2 className="section-title">Portfolio</h2>
        <img src={require("../../assets/images/work.jpg")} alt="laptop displaying code on a desk with some succulents" />
      </div>
      <div className="projects">
        {projects.map((project, index) => (
          <a className={`project ${project.class}`} href={project.link} key={index}>
            <div className="project-description">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-tools">{project.tools}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;