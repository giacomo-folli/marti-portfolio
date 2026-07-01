import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { person, contact } from '../data/siteData';
import './ContactPage.css';

const ContactPage = ({ onNavigate, currentPage }) => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 3500);
  };

  const [introLine1, introLine2, introLine3] = contact.intro.split('\n');

  return (
    <div className="page-container contact-page">
      <PageHeader onNavigate={onNavigate} currentPage={currentPage} />

      <div className="contact-content">
        <div className="contact-left">
          <h1 className="contact-title">{contact.title}</h1>
          <div className="section-rule" />
          <p className="contact-intro">
            {introLine1}<br/>
            {introLine2}<br/>
            {introLine3}
          </p>

          <div className="polaroid-wrapper">
            <div className="polaroid-clip" aria-hidden="true">
              <svg viewBox="0 0 26 42">
                <path d="M13,2 a8,8 0 1 1 0,16 l0,18" stroke="#9a9a9a" strokeWidth="3" fill="none"/>
                <path d="M13,2 a8,8 0 1 1 0,16" stroke="#c9c9c9" strokeWidth="1.4" fill="none"/>
              </svg>
            </div>
            <div className="polaroid-frame">
              <img src={contact.polaroidSrc} alt="Polaroid memory" />
            </div>
          </div>

          <div className="contact-info mono">
            <div className="info-block">
              <span className="info-label">Email</span>
              <span className="info-value">{person.email}</span>
            </div>
            <div className="info-block">
              <span className="info-label">Instagram</span>
              <span className="info-value">{person.instagram}</span>
            </div>
            <div className="info-block">
              <span className="info-label">Location</span>
              <span className="info-value">{person.location}</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
          <div className="form-field">
            <label htmlFor="nome">Nome</label>
            <input id="nome" type="text" placeholder="Il tuo nome" required aria-required="true" />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="nome@email.com" required aria-required="true" />
          </div>
          <div className="form-field">
            <label htmlFor="oggetto">Oggetto</label>
            <input id="oggetto" type="text" placeholder="Di cosa vuoi parlarmi?" />
          </div>
          <div className="form-field">
            <label htmlFor="messaggio">Messaggio</label>
            <textarea id="messaggio" rows="4" placeholder="Scrivi il tuo messaggio..." />
          </div>
          <div className="form-submit">
            <button type="submit">
              Invia
              <svg width="22" height="10" viewBox="0 0 22 10">
                <path d="M0,5 H20 M14,1 L20,5 L14,9" stroke="currentColor" strokeWidth="1.4" fill="none"/>
              </svg>
            </button>
          </div>
          <div className={`sent-note mono ${sent ? 'show' : ''}`}>
            {contact.successMessage}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
