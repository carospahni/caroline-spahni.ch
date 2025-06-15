import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  { 
    id: 'gruppenspaziergang', 
    title: 'Gruppenspaziergang', 
    description: 'Ihr Hund darf mit anderen Hunden spazieren.',
    image: `${import.meta.env.BASE_URL}images/service1.jpg`
  },
  // ... other service objects with image paths ...
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="services-hero">
          <div className="services-overlay">
            <p className="services-hero-text">
              Als Hundehalter/in wissen Sie, wie wichtig es ist, dass Ihr Vierbeiner nicht nur körperlich, sondern auch geistig und emotional ausgeglichen ist. Meine Hundespaziergänge sind liebevoll darauf ausgerichtet, Ihrem Hund genau das zu geben, was er braucht – ob als gemeinsames Abenteuer in der Gruppe oder als individuelle Auszeit nur für ihn. Jeder Spaziergang dauert eine Stunde und schenkt Ihrem Hund Freude, Bewegung und neue Impulse.
            </p>
          </div>
        </div>
        <div className="services-grid">
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <img 
                src={service.image} 
                alt={service.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `${import.meta.env.BASE_URL}images/placeholder.jpg`;
                }}
              />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Link to={`/dienstleistungen/${service.id}`} className="service-link">
                Mehr Informationen
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
