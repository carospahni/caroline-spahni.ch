import React from 'react';
import './Pricing.css';

const pricing = [
  {
    category: 'Spaziergänge',
    items: [
      { description: 'Starterpaket: 3 Gruppenspaziergänge', price: '100.-' },
      { description: 'Starterpaket: 3 Auslastungsspaziergänge', price: '200.-' },
      { description: 'Gruppenspaziergang à 1h (1x pro Woche)', price: '38.-' },
      { description: 'Weitere Hunde aus Haushalt (Gruppenspaziergang)', price: '20.-' },
      { description: 'Auslastungsspaziergang (45min - 1h)', price: '75.-' },
      { description: 'Training auf Anfrage (45min - 1h)', price: '58.-' }
    ]
  },
  {
    category: 'Betreuung',
    items: [
      { description: 'Tagesbetreuung inkl. 2 Spaziergängen à mind. 45min (ohne Nacht und ohne Futter)', price: '55.-' },
      { description: 'Halbtagesbetreuung inkl. 1 Spaziergang à mind. 45min (ohne Nacht und ohne Futter)', price: '40.-' },
      { description: 'Nacht (ohne Futter)', price: '12.-' },
      { description: 'Welpenbetreuung Tag (Sozialverhalten und Grunderziehung)', price: '65.-' },
      { description: 'Hausbetreuung (Besuch - Füttern - Sonstiges)', price: 'ab 30.-' }
    ]
  },
  {
    category: 'Anfahrkosten',
    items: [
      { description: 'Region 1 (Angrenzend an Jens)', price: 'inkl.' },
      { description: 'Region 2 (Aarberg, Lyss, Port, Nidau, Worben, Hermrigen, St. Niklaus)', price: '5.-' },
      { description: 'Region 3 (Biel, Aegerten, Brügg, Orpund)', price: '10.-' },
      { description: 'Region 4 (Pieterlen, Grenchen, Lengnau, Seedorf)', price: '15.-' },
      { description: 'Alle weiteren Orte pro km hin+zurück', price: '1.-' }
    ]
  }
];

export default function Pricing() {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="pricing-table">
          {pricing.map((category, index) => (
            <div key={index} className="pricing-category">
              <h2 className="category-title">{category.category}</h2>
              <div className="category-items">
                {category.items.map((item, i) => (
                  <div className="table-row" key={i}>
                    <div>{item.description}</div>
                    <div>{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: '2rem', textAlign: 'center', fontStyle: 'italic' }}>
          Gegenseitiges Kennenlernen (15–30 Minuten): Gratis
          <br />
          Bevor es losgeht, lernen wir uns gerne in Ruhe kennen – ganz unverbindlich und kostenlos. So können Sie und Ihr Vierbeiner beurteilen, ob wir gut zusammenpassen.
        </p>
        <p style={{ marginTop: '1rem', textAlign: 'center', fontStyle: 'italic' }}>
          Paketpreise für Spaziergänge: 11 Spaziergänge zum Preis von 10
        </p>
      </div>
    </section>
  );
}
