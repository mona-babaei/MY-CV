import React from 'react';
import '../styles/App.css';

function Skills() {
  return (
    <section id="skills" className="skills py-5">
      <div className="container">
        <h2 className="text-primary">Färdigheter</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li>•Språk och teknologier: C#, JavaScript, HTML, CSS, SQL</li>
              <li>•	Ramverk och bibliotek: ASP.NET, Blazor, Entity Framework Core, React, Bootstrap</li>
              <li>•	Principer och mönster: Objektorienterad programmering (OOP), Generics, LINQ</li>
              <li>•	Databaser: SQL Server, NoSQL, Azure Cosmos DB</li>
              <li>•	Utvecklingsverktyg: Visual Studio,Vsc, Git, GitHub, Azure DevOps</li>
              <li>•	Testning och kvalitetssäkring: Test Driven Development (TDD), XUnit, Moq</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
