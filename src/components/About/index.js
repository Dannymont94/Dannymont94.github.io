import React from 'react';

function About() {
  return (
    <section id="about-me">
      <div class="left">
        <h2 class="section-title">About Me</h2>
        <img src={require("../../assets/images/about-me.jpg")} alt="Daniel Monterrosa headshot" />
      </div>
      <div className="description">
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