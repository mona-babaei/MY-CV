
import React from 'react';
import '../styles/App.css';
import backgroundImage from '../images/background.jpeg';

function Header() {
  const headerStyle = {
    backgroundImage: 'url("/images/background.jpeg")',
    backgroundColor: '#FFE87C', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
  };

  return (
    <header className="header" style={headerStyle}>
      <div className="container">
        <h1>Mona Babaei</h1>
        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item"><a href="#about" className="nav-link">Om mig</a></li>
            <li className="nav-item"><a href="#skills" className="nav-link">Färdigheter</a></li>
            <li className="nav-item"><a href="#education" className="nav-link">Utbildning</a></li>
            <li className="nav-item"><a href="#experience" className="nav-link">Erfarenhet</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
