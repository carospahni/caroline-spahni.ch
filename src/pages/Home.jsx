import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Caro's Hundeservice – Professionelle Betreuung für Ihren Hund</h1>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="single-column">
            <div className="card">
              <h2 className="section-title">Über mich</h2>
              <p>
                Schon seit meiner Jugend begleiten Hunde mein Leben. Mit 20 Jahren entdeckte ich meine Leidenschaft für die Hundeerziehung, als ich einen unterforderten Schäferhund betreute. Diese Erfahrung hat mich geprägt und mein Verständnis für die Bedürfnisse von Hunden vertieft.
                <br /><br />
                Ab Februar 2025 werde ich die Ausbildung zur "Hundeinstruktorin HIK 1 Plus" absolvieren, die ich im Juni abschließen werde. Dies ist ein weiterer Schritt, um mein Wissen zu erweitern und Hunde noch besser unterstützen zu können.
                <br /><br />
                Seit über 10 Jahren biete ich Hundebetreuung an – von Spaziergängen bis zur Ferien- und Nachtbetreuung. Meine langjährige Erfahrung hilft mir, Hunde gut zu verstehen und auf jeden Charakter individuell einzugehen.
                <br /><br />
                Zu Hause bereichern „Morlu“ und „Capraia“ unser Familienleben. Beide sind nicht nur treue Begleiter, sondern auch liebevolle Spielkameraden für unsere Kinder. Zur Auslastung von mir und den Hunden betätigen wir uns aktiv im Agility.
                <br /><br />
                Ich weiß, wie wichtig Vertrauen und Sicherheit sind – sowohl für die Hunde als auch für ihre Menschen. Mit viel Einfühlungsvermögen und Geduld möchte ich auch deinem Hund eine liebevolle Betreuung bieten.
              </p>
            </div>
            <div className="card">
              <h2 className="section-title">Referenzen</h2>
              <div className="references-list">
                <div className="reference-item">
                  <h3>2025</h3>
                  <p>
                    <a href="https://www.certodog.ch/ausbildung/hundetrainer" target="_blank" rel="noopener noreferrer">
                      Certodog Hundeinstruktorin HIK 1 Plus
                    </a>
                  </p>
                  <ul>
                    <li>Hundeinstruktor</li>
                    <li>Fba - Züchter</li>
                    <li>Dogwalker / Dogsitter</li>
                    <li>FbA - Tiertransport</li>
                    <li>Certodog Zuchtwart</li>
                    <li>FbA - Tierbetreuer</li>
                  </ul>
                  <br />
                  <p>
                    Praktikumstunden für Fba Diplom im <a href="https://hzf.dog/" target="_blank" rel="noopener noreferrer">Hundezentrum Frienisberg</a>.
                  </p>
                </div>
                
                <div className="reference-item">
                  <h3>2018</h3>
                  <p>Agilitywettkämpfe in der höchsten Kategorie</p>
                </div>
                
                <div className="reference-item">
                  <h3>2014-2016</h3>
                  <p>TKAMO Agilitytrainer 1-3</p>
                  <p>
                    <a href="https://www.hs-seeland-pieterlen.ch/Leiter/Spahni-Caroline.htm" target="_blank" rel="noopener noreferrer">
                      Weitere Kurse
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
