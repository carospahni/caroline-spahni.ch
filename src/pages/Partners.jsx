import React from 'react';
import './Partners.css';

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="container">
        <h1 className="section-title">Unsere Partner</h1>
        <div className="partners-list">
          <div className="partner-card">
            <h2>Hundetherapie am See</h2>
            <p>
              <a href="https://www.hundetherapieamsee.ch/" target="_blank" rel="noopener noreferrer">
                www.hundetherapieamsee.ch
              </a>
            </p>
          </div>
          <div className="partner-card">
            <h2>Stutz Hunde + Katzenshop</h2>
            <p>
              <a href="https://www.stutz-lengnau.ch/" target="_blank" rel="noopener noreferrer">
                www.stutz-lengnau.ch
              </a>
            </p>
          </div>
          <div className="partner-card">
            <h2>HUNDETHERAPIE WÖLFLI</h2>
            <p>
              <a href="https://www.hundetherapiewoelfli.ch/" target="_blank" rel="noopener noreferrer">
                www.hundetherapiewoelfli.ch
              </a>
            </p>
          </div>
          <div className="partner-card">
            <h2>Hundesport Seeland-Pieterlen</h2>
            <p>
              <a href="https://www.hs-seeland-pieterlen.ch/Home.htm" target="_blank" rel="noopener noreferrer">
                www.hs-seeland-pieterlen.ch
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
