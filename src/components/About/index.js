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
          Adept Full-Stack Developer based in Orlando, FL with 5 years of business management and sales team leadership experience in both public and private sectors.
        </p>
        <br />
        <p>
          Recently earned a certificate in full stack development from the University of Central Florida<span className="desktop-view">, where I honed my skills in technologies such as JavaScript, Node.js, React.js, and mobile-first design</span>.
        </p>
        <br />
        <p className="desktop-view">
          In my most recent project, I worked in a two-person team to develop a MERN SPA that allows users to track their favorite TV shows while under quarantine.
        </p>
        <br className="desktop-view"/>
        <p>
          Endorsed in the ability to accomplish complex assignments ahead of sprint dates through self-management and an attitude that supports team collaboration and productivity.
        </p>
        <br />
        <p>
          Colleagues have described me as driven, goal-oriented, adaptable, and an asset to any development team.
        </p>
        <br />
        <p>
          Open to new work opportunities.
          Please take a look around and drop me a line if you'd like to work together.
        </p>
      </div>
    </section>
  )
}

export default About;