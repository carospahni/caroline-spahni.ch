import React from 'react';
import { Link } from 'react-router-dom';
import './Agility.css';

const services = [
  { 
    id: 'kurse', 
    title: 'Kurse', 
    description: 'Der Agility Aufbaukurs.',
    image: `${import.meta.env.BASE_URL}images/agility_aufbau.jpg`
  },
  // ... other agility services with image paths ...
];

export default function Agility() {
  return (
    <section className="services-section">
      <div className="container">
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
              <Link to={`/agility/${service.id}`} className="service-link">
                Mehr Informationen
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
