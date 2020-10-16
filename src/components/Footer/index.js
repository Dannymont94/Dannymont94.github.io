import React from 'react';

function Footer() {
  return (
    <footer class="contact-info">
      <div class="contact">
        <a class="big-window" href="tel:3055466832"><i class="fas fa-mobile-alt big"></i>Phone</a>
        <a class="small-window" href="tel:3055466832"><i class="fas fa-mobile-alt fa-3x"></i></a>
      </div>
      <div class="contact">
        <a class="big-window" href="mailto:dannym94@gmail.com"><i class="far fa-envelope big"></i>Email</a>
        <a class="small-window" href="mailto:dannym94@gmail.com"><i class="far fa-envelope fa-3x"></i></a>
      </div>
      <div class="contact">
        <a class="big-window" href="https://github.com/Dannymont94"><i class="fab fa-github-square big"></i>GitHub</a>
        <a class="small-window" href="https://github.com/Dannymont94"><i class="fab fa-github-square fa-3x"></i></a>
      </div>
      <div class="contact">
        <a class="big-window" href="https://www.linkedin.com/in/daniel-monterrosa-7a3a1736/"><i class="fab fa-linkedin big"></i>LinkedIn</a>
        <a class="small-window" href="https://www.linkedin.com/in/daniel-monterrosa-7a3a1736/"><i class="fab fa-linkedin fa-3x"></i></a>
      </div>
    </footer>
  );
}

export default Footer;