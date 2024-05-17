import './Navbar.css'

const Navbar = () => {
    return (
      <nav className="navbar">
        <a href="/" className='center links nav-text'>
          <img src={'/icons/glynnlogo118px.png'} alt="Site Logo" className="nav-logo" />    
          <h1 className='nav-text'>Carter Glynn</h1>
        </a>
        <div className="links">
          <a href="/projects" className='nav-text projects main-button center'><div className="projects">Projects</div></a>
          <a href="/about" className='nav-text about main-button center'><div className="about">About</div></a>
          <a href="/contact" className='nav-text contact main-button center'><div className="contact">Contact</div></a>
        </div>
      </nav>
    );
  }
   
  export default Navbar;