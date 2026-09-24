import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/gritznova-logo.png";
const links = [
  ["Home", "#home"],
  ["Solutions", "#capabilities"],
  ["Products", "#products"],
  ["Services", "#services"],
  ["Technology", "#technology"],
  ["About", "#about"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <nav className="navbar">

        <a
          className="brand logo-brand"
          href="#home"
          aria-label="GRITZNOVA home"
        >
          <img src={logo} alt="GRITZNOVA" />
        </a>

        <div className={"nav-links " + (open ? "open" : "")}>
          {links.map(([name, url]) => (
            <a
              key={name}
              href={url}
              onClick={() => setOpen(false)}
            >
              {name}
            </a>
          ))}
        </div>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>

      </nav>
    </header>
  );
}