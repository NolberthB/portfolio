import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`nav-list ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleNav}>
        Toggle Nav
      </button>
      <ul className="list-items">
        <li>Home</li>
        <li>CV</li>
        <li>Portfolio</li>
      </ul>
    </div>
  );
};

export { Navbar }
