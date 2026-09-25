import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Logo/>
            <p>Engineering software, AI, and cloud solutions for businesses ready to scale.</p>
            <div className="socials">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">in</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">GH</a>
              <a href="https://x.com/" target="_blank" rel="noreferrer">X</a>
            </div>
          </div>
          <div><h4>Explore</h4><a href="#solutions">Solutions</a><a href="#products">Products</a><a href="#services">Services</a><a href="#technology">Technology</a></div>
          <div><h4>Company</h4><a href="#about">About</a><a href="#process">Process</a><a href="#contact">Contact</a></div>
          <div><h4>Services</h4><a href="#services">Custom Software</a><a href="#services">AI & Machine Learning</a><a href="#services">Agentic AI</a><a href="#services">Cloud & DevOps</a><a href="#services">Managed IT</a></div>
          <div><h4>Contact</h4><a href="mailto:connect@gritznova.com">connect@gritznova.com</a><a href="tel:+917559660623">+91 7559660623</a><span>Bangalore, India</span></div>
        </div>
        <div className="footer-bottom"><span>© 2026 GRITZNOVA. All rights reserved.</span><span>Software · AI · Cloud · Engineering</span></div>
      </div>
    </footer>
  );
}
