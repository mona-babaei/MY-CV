import React from 'react';
import '../styles/App.css';

function Contact() {
  return (
    <section id="contact" className="contact py-5">
      <div className="container">
        <h2 className="text-primary">Kontakt</h2>
        <p>Adress: Stockholm Kista  164 78 </p>
        <p>Telefon: 076 4040688</p>
        <p>Email: <a href="mailto:mona_b88@hotmail.com">mona_b88@hotmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/mona-babaei-765730212/" target="_blank" rel="noopener noreferrer">linkedin.com /in/mona-babaei</a></p>
      </div>
    </section>
  );
}

export default Contact;
