import { home, person } from '../data/siteData';
import './HomePage.css';

const HomePage = ({ onExplore }) => {
  const [tagline1, tagline2] = home.tagline.split('\n');
  const [hint1, hint2] = home.hint.split('\n');

  return (
    <div className="home-container">
      <div className="home-top-text mono">
        {tagline1}<br/>
        {tagline2}
      </div>

      <div className="home-center-content">
        <h1 className="home-title">
          {person.firstName}<br/>{person.lastName}
        </h1>
        <p className="home-role mono">{person.role}</p>
      </div>

      <div className="home-bottom">
        <div className="home-bottom-text mono">
          {hint1}<br/>{hint2}
        </div>
        <button
          type="button"
          className="home-cta mono"
          onClick={onExplore}
        >
          {home.cta}
        </button>
      </div>
    </div>
  );
};

export default HomePage;
