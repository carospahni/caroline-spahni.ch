import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ServiceDetail.css';

const services = [
  { id: 'gruppenspaziergang', title: 'Gruppenspaziergang', description: 'Ihr Hund darf mit anderen Hunden spazieren.' },
  { id: 'auslastungsspaziergang', title: 'Auslastungsspaziergang', description: 'Bei diesem Spaziergang bekommt ihr Hund Aufgaben und lernt womöglich etwas dazu.' },
  { id: 'tagesbetreuung', title: 'Tagesbetreuung', description: 'Ihr Hund verbringt den Tag und die Spaziergänge mit mir.' },
  { id: 'welpenbetreuung', title: 'Welpenbetreuung', description: 'Ich betreue ihren Welpen als wäre es mein eigener Welpe.' },
  { id: 'hausbetreuung', title: 'Hausbetreuung', description: 'Sind sie in den Ferien und benötigen jemanden der zu ihrem Haustier schaut?' },
  { id: 'individuelles-training', title: 'Training auf Anfrage', description: 'Haben Sie und ihr Hund eine "Baustelle"?' }
];

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <section className="service-detail-section">
        <div className="container">
          <h1 className="section-title">Service nicht gefunden</h1>
          <Link to="/dienstleistungen" className="back-button">Zurück zu Dienstleistungen</Link>
        </div>
      </section>
    );
  }

  const getServiceContent = (id) => {
    switch(id) {
      case 'gruppenspaziergang':
        return (
          <>
            <h1>Gruppenspaziergang – Gemeinsam glücklich</h1>
            <p>Ihr Hund liebt es, mit anderen Hunden zu spielen und die Welt gemeinsam zu entdecken? Dann ist der Gruppenspaziergang perfekt für ihn!</p>
            <ul>
              <li><strong>Soziale Kontakte:</strong> In einer kleinen Gruppe kann Ihr Hund Freundschaften schließen, spielen und sein Sozialverhalten stärken.</li>
              <li><strong>Voraussetzungen:</strong> Ihr Hund sollte gut sozialisiert sein und sich im Umgang mit anderen Hunden wohlfühlen.</li>
              <li><strong>Dauer:</strong> 1 Stunde voller Freude, Spiel und gemeinsamer Erlebnisse. Je nach Anzahl Hunden dauert der Gruppenspaziergang etwas länger, da die Vierbeiner an verschiedenen Orten abgeholt und zurückgebracht werden müssen.</li>
            </ul>
          </>
        );
      case 'auslastungsspaziergang':
        return (
          <>
            <h1>Auslastungsspaziergang – Individuell und liebevoll</h1>
            <p>Manchmal braucht Ihr Hund einfach besondere Aufmerksamkeit – sei es, um Energie abzubauen, neue Tricks zu lernen oder einfach eine Auszeit vom Alltag zu genießen.</p>
            <ul>
              <li><strong>Persönliche Betreuung:</strong> Der Spaziergang findet entweder nur mit Ihrem Hund oder maximal mit einem weiteren Hund aus Ihrem Haushalt statt.</li>
              <li><strong>Geistige und körperliche Auslastung:</strong> Wir arbeiten spielerisch am Grundgehorsam, machen Suchspiele oder sportliche Übungen.</li>
              <li><strong>Auf Ihre Wünsche abgestimmt:</strong> Gerne integriere ich individuelle Übungen oder Trainingseinheiten, die Ihnen und Ihrem Hund wichtig sind.</li>
              <li>"Etwas schwierige" Hunde oder mit Maulkorb sind ebenfalls herzlich willkommen.</li>
              <li><strong>Dauer:</strong> 1 Stunde voller Zuwendung, Abwechslung und gemeinsamer Freude.</li>
            </ul>
          </>
        );
      case 'hausbetreuung':
        return (
          <>
            <h1>Hausbetreuung – Sorgenfrei in den Ferien</h1>
            <p>Sie möchten in den Ferien entspannen, ohne sich Gedanken um Ihr Zuhause und Ihre tierischen Lieblinge machen zu müssen? Mit meiner Hausbetreuung übernehme ich alle wichtigen Aufgaben, damit Sie beruhigt abschalten können – und Ihre Haustiere und Pflanzen bestens versorgt sind.</p>

            <h2>Was die Hausbetreuung bietet täglich:</h2>
            <ul>
              <li><strong>Tierbetreuung:</strong> Ob Hund, Katze oder andere tierische Mitbewohner – ich kümmere mich liebevoll um Ihre Haustiere. Sie erhalten Futter, Zuwendung und bei Bedarf auch ausgiebig Streicheleinheiten und Kuscheleinheiten.</li>
              <li><strong>Pflanzenpflege:</strong> Ihre Pflanzen werden regelmäßig gegossen, damit sie frisch und gesund bleiben.</li>
              <li><strong>Haushaltliche Aufgaben:</strong> Ich leere den Briefkasten, stelle die Storen hoch und runter und sorge dafür, dass Ihr Zuhause bewohnt und gepflegt wirkt.</li>
              <li><strong>Sicherheit:</strong> Durch meine regelmäßigen Besuche wirkt Ihr Zuhause bewohnt, was zusätzliche Sicherheit bietet.</li>
            </ul>

            <h2>Warum Hausbetreuung?</h2>
            <p>Weil Ihre Haustiere in ihrer gewohnten Umgebung am glücklichsten sind und Sie sich keine Sorgen um Ihr Zuhause machen möchten. Mit meiner Hausbetreuung können Sie Ihre Ferien genießen, wissend, dass alles in guten Händen ist.</p>

            <h2>Ablauf:</h2>
            <ul>
              <li><strong>Individuelle Absprache:</strong> Vorab besprechen wir genau, welche Aufgaben ich übernehmen soll und welche Bedürfnisse Ihre Haustiere haben.</li>
              <li><strong>Regelmäßige Besuche:</strong> Nach Absprache komme ich täglich vorbei, um mich um alles zu kümmern.</li>
            </ul>
          </>
        );
      case 'welpenbetreuung':
        return (
          <>
            <h1>Welpenbetreuung – Ein liebevoller Start ins Leben</h1>
            <p>Die ersten Monate im Leben eines Welpen sind prägend und entscheidend für seine weitere Entwicklung. Mit meiner Welpenbetreuung gebe ich Ihrem kleinen Schatz die bestmögliche Unterstützung, um sich zu einem glücklichen, ausgeglichenen und selbstbewussten Hund zu entwickeln.</p>

            <h2>Was die Welpenbetreuung bietet:</h2>
            <ul>
              <li><strong>Liebevolle Betreuung:</strong> Ihr Welpe wird bei mir behandelt, als wäre er mein eigener. Mit viel Geduld, Zuwendung und Einfühlungsvermögen sorge ich dafür, dass er sich sicher und geborgen fühlt.</li>
              <li><strong>Sozialisierung:</strong> Ich helfe Ihrem Welpen, soziale Kontakte zu knüpfen – sei es mit anderen Hunden, Menschen oder in neuen Umgebungen. Das fördert sein Selbstvertrauen und seine Kommunikationsfähigkeiten.</li>
              <li><strong>Ruhe und Entspannung:</strong> Welpen müssen auch lernen, sich zurückzuziehen und auszuruhen. Ich zeige Ihrem kleinen Schatz, wie wichtig Pausen sind, damit er nicht überfordert wird.</li>
              <li><strong>Gewöhnung an die Umwelt:</strong> Auf Wunsch gewöhne ich Ihren Welpen behutsam an verschiedene Reize und Orte, wie z. B. den Bahnhof, die Stadt, Läden, Busse oder belebte Straßen. So lernt er, gelassen mit neuen Situationen umzugehen.</li>
            </ul>

            <h2>Warum Welpenbetreuung?</h2>
            <p>Weil die Welpenzeit eine besonders sensible Phase ist, in der Ihr kleiner Hund die Welt entdeckt und prägende Erfahrungen sammelt. Mit meiner Betreuung unterstütze ich Sie dabei, Ihrem Welpen einen optimalen Start ins Leben zu ermöglichen – voller Liebe, Vertrauen und positiver Erlebnisse.</p>
          </>
        );
      case 'tagesbetreuung':
        return (
          <>
            <h1>Tagesbetreuung – Ein liebevolles Zuhause auf Zeit für Ihren Hund</h1>
            <p>Manchmal braucht Ihr Hund mehr als nur einen Spaziergang – sei es, weil Sie länger arbeiten, einen Termin haben oder einfach mal etwas Zeit für sich benötigen. Meine Tagesbetreuung bietet Ihrem Vierbeiner ein liebevolles Zuhause auf Zeit, in dem er sich rundum wohlfühlen kann. Sie beinhaltet zwei Spaziergänge à mind. 45 min.</p>

            <h3>Aktuelles Angebot:</h3>
            <p>Im Moment kann ich nur Hunde bei mir aufnehmen, die ich bereits kenne und die gut mit meinen eigenen Hunden sowie Kindern harmonieren. Diese persönliche Betreuung in kleinem Rahmen ermöglicht es mir, jedem Hund die nötige Aufmerksamkeit und Sicherheit zu bieten.</p>

            <h3>Wie finde ich heraus, ob Ihr Hund geeignet ist?</h3>
            <ul>
              <li><strong>Gemeinsame Spaziergänge:</strong> Auf unseren Spaziergängen lernen wir uns besser kennen. So kann ich einschätzen, ob Ihr Hund sich in meinem Zuhause wohlfühlen würde.</li>
              <li><strong>Voraussetzungen:</strong> Ihr Hund sollte kinderlieb sein und gut mit anderen Hunden auskommen.</li>
            </ul>

            <h3>Zukunftspläne:</h3>
            <p>In Zukunft möchte ich mein Angebot erweitern und tagsüber mehrere Hunde betreuen können. Geplant ist ein umgebautes Fahrzeug mit Klimaanlage und Heizung, das den Hunden auch unterwegs Komfort und Sicherheit bietet. So kann ich noch flexibler auf die Bedürfnisse meiner Kunden eingehen und mehr Hunden eine liebevolle Betreuung ermöglichen.</p>

            <h3>Was die Tagesbetreuung aktuell bietet:</h3>
            <ul>
              <li><strong>Geborgenheit und Aufmerksamkeit:</strong> Ihr Hund wird bei mir wie ein Familienmitglied behandelt und erhält viel Zuwendung und Liebe.</li>
              <li><strong>Aktivität und Entspannung:</strong> Neben Spaziergängen und Spielen gibt es auch genug Zeit zum Ausruhen und Kuscheln.</li>
              <li><strong>Soziale Kontakte:</strong> Wenn Ihr Hund gerne mit anderen Hunden spielt, kann er in einer kleinen, harmonischen Gruppe Kontakte knüpfen.</li>
              <li><strong>Individuelle Betreuung:</strong> Jeder Hund ist einzigartig – ich gehe auf die Bedürfnisse und Vorlieben Ihres Hundes ein, ob er aktiv sein möchte oder einfach nur Ruhe braucht.</li>
            </ul>

            <h3>Ablauf:</h3>
            <ul>
              <li><strong>Bring- und Abholzeiten:</strong> Flexible Zeiten, die sich an Ihrem Tagesplan orientieren.</li>
              <li><strong>Tagesstruktur:</strong> Ein ausgewogener Mix aus Spaziergängen, Spielzeit, geistiger Beschäftigung und Ruhephasen.</li>
            </ul>
          </>
        );
      case 'individuelles-training':
        return (
          <>
            <h1>Training auf Anfrage – Individuelle Lösungen für Sie und Ihren Hund</h1>
            <p>Wenn Sie mit Ihrer Hündin oder Ihrem Rüden – ob draussen oder drinnen – vor einer Herausforderung stehen, gehen wir diese gemeinsam an. Zeigen Sie mir, wo es hakt, und wir arbeiten gezielt daran, eine Lösung zu finden – Schritt für Schritt und ganz auf Ihre Situation abgestimmt. Dabei steht die praktische Problemlösung im Vordergrund, ohne den Rahmen einer klassischen Hundeschule.</p>
            <ul>
              <li><strong>Individuelle Betreuung:</strong> Wir konzentrieren uns ganz auf Ihre spezifische Situation und entwickeln gemeinsam Lösungsstrategien.</li>
              <li><strong>Praktische Problemlösung:</strong> Im Mittelpunkt steht die direkte Anwendung im Alltag mit Ihrem Hund.</li>
              <li><strong>Flexible Gestaltung:</strong> Das Training findet dort statt, wo die Herausforderung auftritt – ob zu Hause, im Park oder unterwegs.</li>
              <li><strong>Keine starren Regeln:</strong> Wir arbeiten ohne den formellen Rahmen einer Hundeschule, dafür mit viel Praxisbezug und Flexibilität.</li>
              <li><strong>Erste Konsultation:</strong> Je nach Problemstellung kann die erste Konsultation länger dauern und daher etwas teurer sein.</li>
            </ul>
          </>
        );
      default:
        return (
          <>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
          </>
        );
    }
  };

  return (
    <section className="service-detail-section">
      <div className="container">
        {getServiceContent(id)}
        <Link to="/dienstleistungen" className="back-button">Zurück zu Dienstleistungen</Link>
      </div>
    </section>
  );
}
