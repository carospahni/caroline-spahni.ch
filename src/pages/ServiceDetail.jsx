import React from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css';

const serviceDetails = {
  gruppenspaziergang: {
    title: 'Gruppenspaziergang',
    description: 'Ihr Hund darf mit anderen Hunden spazieren.',
    image: `${import.meta.env.BASE_URL}images/service1.jpg`,
    content: [
      'Dauer: 1 Stunde',
      'Gruppengrösse: 3-5 Hunde',
      'Preis: CHF 25.- pro Spaziergang'
    ]
  },
  // ... other service details with image paths ...
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = serviceDetails[id];

  return (
    <section className="service-detail-section">
      <div className="container">
        <div className="service-detail-header">
          <h1>{service.title}</h1>
          <img 
            src={service.image} 
            alt={service.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `${import.meta.env.BASE_URL}images/placeholder.jpg`;
            }}
          />
        </div>
        {/* ... rest of the component ... */}
      </div>
    </section>
  );
}
