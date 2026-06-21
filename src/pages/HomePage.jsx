import './HomePage.css';

const HomePage = ({ onExplore }) => {
  return (
    <div className="home-container">
      <div className="home-top-text mono">
        Visual stories,<br/>
        real emotions.
      </div>
      
      <div className="home-center-content">
        <h1 className="home-title">ALEX<br/>COOPER</h1>
        <p className="home-role mono">Visual storyteller</p>
      </div>

      <div className="home-bottom">
        <div className="home-bottom-text mono">
          Scorri o clicca le linguette<br/>per esplorare.
        </div>
        <button 
          type="button" 
          className="home-cta mono" 
          onClick={onExplore}
        >
          Inizia ↦
        </button>
      </div>
    </div>
  );
};

export default HomePage;
