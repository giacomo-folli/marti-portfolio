import PageHeader from '../components/PageHeader';
import { person, about } from '../data/siteData';
import './AboutPage.css';

const AboutPage = ({ onNavigate, currentPage }) => {
  return (
    <div className="page-container about-page">
      <PageHeader onNavigate={onNavigate} currentPage={currentPage} />

      <div className="about-content">
        <div className="about-column about-col-left">
          <h1 className="about-title">About<br/>me</h1>
          <div className="section-rule" />
          <p className="about-intro">{about.intro}</p>
          <div className="section-rule" style={{ marginTop: '20px' }} />
          <div className="about-links mono">
            {about.links.map((link) => (
              <span key={link}>{link}<br/></span>
            ))}
          </div>
        </div>

        <div className="about-column about-col-center">
          <div className="about-portrait">
            <img src={person.portraitSrc} alt={person.portraitAlt} />
          </div>
        </div>

        <div className="about-column about-col-right">
          {about.body.map((para, i) => (
            <p key={i} className="about-body">{para}</p>
          ))}
          <blockquote className="about-quote">
            {about.quote.split('\n').map((line, i) => (
              <span key={i}>{line}<br/></span>
            ))}
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
