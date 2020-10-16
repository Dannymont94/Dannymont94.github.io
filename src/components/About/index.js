import React from 'react';

function About() {
  return (
    <section id="about-me">
        <h2 className="section-title">About Me</h2>
      <div className="description">
        <img src={require("../../assets/images/about-me.jpg")} alt="Daniel Monterrosa headshot" />
        <p>
          Full-Stack Developer based in Orlando, FL with 5 years of business management and sales team leadership experience.
          Colleagues have described me as driven and adaptable.
          I ceaselessly strive to learn, improve, and make my days count.
          Please take a look around and drop me a line if you'd like to work together.
        </p>
      </div>
    </section>
  )
}

export default About;