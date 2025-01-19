import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        {/* Section 1: Contact Information */}
        <div className="contact-info-section">
          <div className="contact-info">
            <p className="contact-name">Caroline Spahni</p>
            <p className="contact-address">Tannacker 15a, 2565 Jens</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="section-divider" />

        {/* Section 2: Contact Text */}
        <div className="contact-text-section">
          <p className="contact-text">
            Liebe Hundebesitzerinnen, ich freue mich auf euren Kontakt! Um die Privatsphäre etwas zu erhöhen, verzichte ich auf die Publikation meiner Mobiltelefonnummer. Bitte kontaktieren Sie mich per E-Mail oder über eine der Applikationen ganz unten auf der Seite. Gemeinsam sorgen wir dafür, dass Ihre Vierbeiner glücklich und gut betreut sind. 💕
          </p>
        </div>

        {/* Divider */}
        <hr className="section-divider" />

        {/* Section 3: Email Link */}
        <div className="email-link-section">
          <div className="email-link">
            <a href="mailto:kontakt@caroline-spahni.ch" className="email-icon">
              <img src={`${import.meta.env.BASE_URL}images/email-icon.png`} alt="E-Mail Icon" />
            </a>
            <p className="email-text">Klicken Sie auf das Icon, um mir eine E-Mail zu schreiben.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
