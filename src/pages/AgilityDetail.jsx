import React from 'react';
import { useParams } from 'react-router-dom';
import './AgilityDetail.css';

const serviceDetails = {
  kurse: {
    title: 'Agility Aufbaukurs',
    description: 'Der Aufbaukurs richtet sich an Teams, die bereits Grundgehorsam haben und ins Agility einsteigen wollen.',
    content: [
      'Beginnt 08. August 2025 18-19 Uhr',
      'Kursdauer: 10 Trainings',
      'Gruppengrösse: 4-5 Teams',
      'Voraussetzung: Hund mind. 10 Monate alt. Max 30kg.',
      'Inhalte: Geräteaufbau sowie Handling-Techniken',
      'Kosten: CHF 350.-',
      'Anmeldung per E-Mail'
    ],
    image: '/images/agility_aufbau.jpg'
  },
  trainings: {
    title: 'Agility Trainings',
    description: 'Individuelles Training für jedes Team - von Plausch bis Wettkampf.',
    content: [
      'Einzeltraining oder Kleingruppen',
      'Jeden Freitag; Zeit nach Absprache',
      'Gruppen à 4-5 Teams',
      'Einzeltraining: CHF 60.- pro Stunde',
      'Gruppentraining: CHF 35.- pro Stunde',
      'Anmeldung per E-Mail'
    ],
    image: '/images/agility_training.jpg'
  },
  hallenmiete: {
    title: 'Hallenmiete',
    description: 'Mieten Sie die Halle für Ihr eigenes Training. Jahres- oder Monatsmieten werden bevorzugt.',
    content: [
      'Hallenfläche: 20x40 Meter',
      'Ausstattung: Vollständiger Agility-Parcours innen und aussen',
      'Stundenweise oder Halstundenweise möglich',
      'Preis Morgen: CHF 35.- pro Stunde',
      'Preis Nachmittag: CHF 45.- pro Stunde',
      'Preis Abend: CHF 60.- pro Stunde'
    ],
    image: '/images/halle.jpg'
  },
};

export default function AgilityDetail() {
  const { id } = useParams();
  const service = serviceDetails[id];

  if (!service) {
    return <div className="agility-not-found">Service nicht gefunden</div>;
  }

  return (
    <section className="agility-detail-section">
      <div className="container">
        <div className="agility-detail-header">
          <h1>{service.title}</h1>
          <p className="agility-description">{service.description}</p>
        </div>
        
        <div className="agility-detail-content">
          <div className="agility-image">
            <img src={service.image} alt={service.title} />
          </div>
          
          <div className="agility-info">
            <h2>Details</h2>
            <ul className="agility-features">
              {service.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
