import React from 'react';
import { Link } from 'react-router-dom';
import './Agility.css';

const services = [
  { id: 'kurse', title: 'Kurse', description: 'Der Agility Aufbaukurs.' },
  { id: 'trainings', title: 'Trainings', description: 'Von Plausch bis Wettkampf ist für jeden etwas dabei.' },
  { id: 'hallenmiete', title: 'Hallenmiete', description: 'Du kannst die Halle je nach Bedarf mieten.' },
];

export default function Agility() {
  return (
    <section className="agility-section">
      <div className="container">
        <div className="agility-hero">
          <div className="agility-overlay">
            <p className="agility-hero-text">
              Egal ob Beginner oder Profi, die Trainings sind genau auf den Ausbildungsstand der Teams ausgerichtet. Immer Freitags.
            </p>
          </div>
        </div>
        <div className="agility-grid">
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Link to={`/#/agility/${service.id}`} className="service-link">
                Mehr Informationen
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
