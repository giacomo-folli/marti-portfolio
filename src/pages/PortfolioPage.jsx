import React from 'react';
import PageHeader from '../components/PageHeader';
import './PortfolioPage.css';

const PortfolioPage = ({ onNavigate, currentPage }) => {
  const images = [
    { src: '/marti-portfolio/assets/img1.png', title: 'WILD LAND', year: '2024' },
    { src: '/marti-portfolio/assets/img2.png', title: 'IN BETWEEN', year: '2023' },
    { src: '/marti-portfolio/assets/img3.png', title: 'SILENT ROOMS', year: '2023' },
    { src: '/marti-portfolio/assets/img2.png', title: 'FLEETING TIME', year: '2022' },
    { src: '/marti-portfolio/assets/img3.png', title: 'COASTAL NOTES', year: '2022' },
    { src: '/marti-portfolio/assets/img1.png', title: 'ALCHEMY', year: '2021' },
    { src: '/marti-portfolio/assets/img1.png', title: 'WILD LAND II', year: '2020' },
    { src: '/marti-portfolio/assets/img2.png', title: 'IN BETWEEN II', year: '2020' },
    { src: '/marti-portfolio/assets/img3.png', title: 'SILENT ROOMS II', year: '2019' },
  ];

  return (
    <div className="page-container portfolio-page">
      <PageHeader onNavigate={onNavigate} currentPage={currentPage} />

      <div className="portfolio-content">
        {/* Left Column — Sidebar */}
        <div className="portfolio-left-col">
          <div className="portfolio-sidebar-content">
            <h1 className="portfolio-title">Portfolio</h1>
            <div className="section-rule" />
            <p className="portfolio-description">
              Una selezione di storie
              visive che ho avuto il privilegio
              di raccontare.
            </p>
          </div>

          <div className="scroll-hint mono">
            <span>Scorri per esplorare</span>
            <span className="scroll-arrow">↓</span>
          </div>
        </div>

        {/* Right Column — Grid */}
        <div className="portfolio-right-col">
          <div className="portfolio-grid">
            {images.map((img, idx) => (
              <div key={idx} className="portfolio-item">
                <div className="img-wrapper">
                  <img src={img.src} alt={img.title} />
                </div>
                <div className="item-meta">
                  <span className="item-title">{img.title}</span>
                  <span className="item-year">{img.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
