import React from 'react';
import PageHeader from '../components/PageHeader';
import './AboutPage.css';

const AboutPage = ({ onNavigate, currentPage }) => {
  return (
    <div className="page-container about-page">
      <PageHeader onNavigate={onNavigate} currentPage={currentPage} />
      
      <div className="about-content">
        {/* Left column — Title, description, links */}
        <div className="about-column about-col-left">
          <h1 className="about-title">About<br/>me</h1>
          <div className="section-rule" />
          <p className="about-intro">
            Sono una visual storyteller
            appassionata di luce naturale,
            emozioni autentiche e dettagli
            che parlano sottovoce.
          </p>
          <div className="section-rule" style={{ marginTop: '20px' }} />
          <div className="about-links mono">
            La mia storia<br/>
            Il mio percorso<br/>
            Ispirazioni
          </div>
        </div>

        {/* Center column — Portrait */}
        <div className="about-column about-col-center">
          <div className="about-portrait">
            <img src="/assets/about.png" alt="Alex Cooper" />
          </div>
        </div>

        {/* Right column — Body text + quote */}
        <div className="about-column about-col-right">
          <p className="about-body">
            Cresciuta tra viaggi, arte e
            quaderni pieni di immagini,
            ho capito presto che la fotografia
            era il mio modo di ascoltare
            e raccontare il mondo.
          </p>
          <p className="about-body">
            Oggi lavoro con brand,
            creativi e persone che cercano
            contenuti visivi sinceri, estetici
            e senza tempo.
          </p>
          <blockquote className="about-quote">
            "Raccontare storie vere,
            con uno sguardo gentile
            e intenzionale."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
