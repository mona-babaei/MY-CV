import React from 'react';
import '../styles/App.css';

function AboutMe() {
  return (
    <section id="about" className="about-me py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="text-primary text-center mb-4">Om mig</h2>
            <img src="/profile1.jpg" alt="Mona Babaei" className="profile-img my-3 d-block mx-auto" />
            <div className="about-text">
              <p>Jag är en logiskt tänkande individ med en stark förmåga att analysera komplexa problem genom att bryta ner dem i mindre delar och identifiera lämpliga lösningar. Nyligen har jag avslutat en fullstack-utbildning som .NET-utvecklare hos Lexicon, där jag fördjupade mina kunskaper inom programmering.</p>
            </div>
            <div className="about-text">
              <p>Jag är strukturerad, vilket innebär att jag kan planera och organisera mitt arbete effektivt. Jag är också självgående, vilket betyder att jag tar egna initiativ och arbetar självständigt. Dessutom är jag engagerad i självutveckling.</p>
            </div>
            <div className="about-text">
              <p>Jag har god samarbetsförmåga och välkomnar olika perspektiv och förslag på lösningar. Jag ser fram emot att tillämpa mina färdigheter och möta nya utmaningar inom arbetslivet.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;