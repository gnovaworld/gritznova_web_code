import logo from "../assets/gritznova-logo.png";

export default function Footer() {
  return (
    <footer>
      {/* Brand */}
      <div>
        <a
          className="brand logo-brand"
          href="#home"
          aria-label="GRITZNOVA home"
        >
          <img src={logo} alt="GRITZNOVA" />
        </a>

        <p>
          Engineering software, AI, and cloud solutions for businesses ready
          to scale.
        </p>
      </div>

      {/* Navigation */}
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#capabilities">Solutions</a>
        <a href="#products">Products</a>
        <a href="#services">Services</a>
        <a href="#technology">Technology</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Contact */}
      <div className="footer-contact">

        {/* Gmail */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=connect@gritznova.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          connect@gritznova.com
        </a>

        {/* Phone */}
        <a href="tel:+917559660623">
          +91 7559660623
        </a>

        {/* Location */}
        <a href="#contact">
          Bangalore, Karnataka, India
        </a>

      </div>
    </footer>
  );
}