import React from 'react';

function Footer() {
  return (
    <footer className="contact-info">
        <div className="contact">
          <a className="big-window" href="tel:3055466832" target="_blank" rel="noopener noreferrer"><i className="fas fa-mobile-alt big"></i>Phone</a>
          <a className="small-window" href="tel:3055466832" target="_blank" rel="noopener noreferrer"><i className="fas fa-mobile-alt fa-3x"></i></a>
        </div>
        <div className="contact">
          <a className="big-window" href="mailto:dannym94@gmail.com" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope big"></i>Email</a>
          <a className="small-window" href="mailto:dannym94@gmail.com" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope fa-3x"></i></a>
        </div>
        <div className="contact">
          <a className="big-window" href="https://github.com/Dannymont94" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square big"></i>GitHub</a>
          <a className="small-window" href="https://github.com/Dannymont94" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square fa-3x"></i></a>
        </div>
        <div className="contact">
          <a className="big-window" href="https://www.linkedin.com/in/daniel-monterrosa-7a3a1736/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin big"></i>LinkedIn</a>
          <a className="small-window" href="https://www.linkedin.com/in/daniel-monterrosa-7a3a1736/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-3x"></i></a>
        </div>
    </footer>
  );
}

export default Footer;