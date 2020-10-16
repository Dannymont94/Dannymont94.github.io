import React from 'react';

function Portfolio() {
  return (
    <section id="recent-work">
      <div className="left">
        <h2 className="section-title">Portfolio</h2>
        <img src={require("../../assets/images/work.jpg")} alt="laptop displaying code on a desk with some succulents" />
      </div>
      <div className="projects">
        {/* Nomadica Project */}
        <a className="project nomadica" href="https://dj-viking.github.io/Nomadica/">
          <div className="project-description">
            <h3 className="project-name">Nomadica</h3>
            <p className="project-tools">HTML/CSS/JS</p>
          </div>
        </a>
        {/* Weather Dashboard Project */}
        <a className="project weather-dashboard" href="https://dannymont94.github.io/weather-dashboard/">
          <div className="project-description">
            <h3 className="project-name">Weather Dashboard</h3>
            <p className="project-tools">HTML/CSS/JS</p>
          </div>
        </a>
        {/* Code Quiz Project */}
        <a className="project code-quiz" href="https://dannymont94.github.io/code-quiz//">
          <div className="project-description">
            <h3 className="project-name">Code Quiz</h3>
            <p className="project-tools">HTML/CSS/JS</p>
          </div>
        </a>
        {/* Run Buddy Project */}
        <a className="project run-buddy" href="https://Dannymont94.github.io/run-buddy/">
          <div className="project-description">
            <h3 className="project-name">Run Buddy Landing Page</h3>
            <p className="project-tools">HTML/CSS</p>
          </div>
        </a>
        {/* Horiseon Refactor Project */}
        <a className="project horiseon" href="https://dannymont94.github.io/horiseon-refactor/">
          <div className="project-description">
            <h3 className="project-name">Horiseon Refactor</h3>
            <p className="project-tools">HTML/CSS</p>
          </div>
        </a>
        {/* Gaming Survey Project */}
        <a className="project gaming-survey" href="https://dannymont94.github.io/gaming-survey/">
          <div className="project-description">
            <h3 className="project-name">Gaming Survey</h3>
            <p className="project-tools">HTML/CSS</p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;