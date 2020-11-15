import React from 'react';

function About() {
  return (
    <section id="about-me">
      <div className="left">
        <h2 className="section-title">About Me</h2>
        <img src={require("../../assets/images/about-me.jpg")} alt="Daniel Monterrosa headshot" />
      </div>
      <div className="description">
        <p>
          Adept Full-Stack Developer based in Orlando, FL with 5 years of business management and sales team leadership experience in both professional and private sectors.
        </p>
        <br />
        <p>
          Endorsed in the ability to accomplish complex assignments ahead of sprint dates through self-management and an empathetic attitude that supports team collaboration and productivity.
        </p>
        <br />
        <p>
          Colleagues have described me as driven, goal-orientated, adaptable, and an asset to any development team.
        </p>
        <br className="desktop-view"/>
        <p className="desktop-view">
          I ceaselessly strive to learn, improve, and make my days count.
        </p>
        <br />
        <p>
          Open to new work opportunities.
          Please take a look around and drop me a line if you'd like to work together.
        </p>
        <p>
        </p>
      </div>
    </section>
  )
}

export default About;