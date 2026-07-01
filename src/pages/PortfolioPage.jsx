import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PageHeader from '../components/PageHeader';
import { portfolio } from '../data/siteData';
import './PortfolioPage.css';

const PortfolioPage = ({ onNavigate, currentPage }) => {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const images = portfolio.images;

  const prev = () => setSelectedIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setSelectedIdx((i) => (i + 1) % images.length);

  useEffect(() => {
    if (selectedIdx === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape')     setSelectedIdx(null);
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedIdx]);

  return (
    <div className="page-container portfolio-page">
      <PageHeader onNavigate={onNavigate} currentPage={currentPage} />

      <div className="portfolio-content">
        <div className="portfolio-left-col">
          <div className="portfolio-sidebar-content">
            <h1 className="portfolio-title">Portfolio</h1>
            <div className="section-rule" />
            <p className="portfolio-description">{portfolio.description}</p>
          </div>

          <div className="scroll-hint mono">
            <span>{portfolio.scrollHint}</span>
            <span className="scroll-arrow">↓</span>
          </div>
        </div>

        <div className="portfolio-right-col">
          <div className="portfolio-grid">
            {images.map((img, idx) => (
              <div key={idx} className="portfolio-item">
                <div className="img-wrapper" onClick={() => setSelectedIdx(idx)}>
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

      {selectedIdx !== null && createPortal((() => {
        const img = images[selectedIdx];
        return (
          <div className="lightbox" onClick={() => setSelectedIdx(null)}>
            <button className="lightbox-arrow lightbox-prev" onClick={(e) => { e.stopPropagation(); prev(); }}>‹</button>
            <img src={img.src} alt={img.title} onClick={(e) => e.stopPropagation()} />
            <button className="lightbox-arrow lightbox-next" onClick={(e) => { e.stopPropagation(); next(); }}>›</button>
            <button className="lightbox-close" onClick={() => setSelectedIdx(null)}>✕</button>
            <div className="lightbox-caption mono">
              <span>{img.title}</span>
              <span>{img.year}</span>
            </div>
          </div>
        );
      })(), document.body)}
    </div>
  );
};

export default PortfolioPage;
