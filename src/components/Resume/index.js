import React from 'react';

function Resume() {
  return (
    <section>
      <div className="left">
        <h2 className="section-title">Resume</h2>
        <img src={require("../../assets/images/resume.jpg")} alt="laptop displaying code on a desk with some succulents" />
      </div>
      <div className="resume">
        <p>View/Download my <a href="https://drive.google.com/file/d/1fYLfRljOTfmlJ_jxdqItqk5lubrvYvGO/view?usp=sharing">resume</a> here.</p>
        <div>
          <h2>Front-End Proficiencies</h2>
          <ul>
            <li>Semantic HTML</li>
            <li>Modern CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Mobile-First Design</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div>
          <h2>Back-End Proficiencies</h2>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>REST APIs</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;