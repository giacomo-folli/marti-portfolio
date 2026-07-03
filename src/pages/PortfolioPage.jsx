import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PageHeader from '../components/PageHeader';
import { portfolio } from '../data/siteData';
import './PortfolioPage.css';

const PortfolioPage = ({ onNavigate, currentPage }) => {
  // lb = { list, idx } for whichever set the lightbox was opened from
  const [lb, setLb] = useState(null);
  const [filter, setFilter] = useState(null); // null = all collections

  const filtered = filter ? portfolio.images.filter((i) => i.collection === filter) : portfolio.images;
  const selected = portfolio.images.filter((i) => i.selected);

  const open = (list, idx) => setLb({ list, idx });
  const prev = () => setLb((s) => ({ ...s, idx: (s.idx - 1 + s.list.length) % s.list.length }));
  const next = () => setLb((s) => ({ ...s, idx: (s.idx + 1) % s.list.length }));

  useEffect(() => {
    if (!lb) return;
    const onKey = (e) => {
      if (e.key === 'Escape')     setLb(null);
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lb]);

  const grid = (list) => (
    <div className="portfolio-grid">
      {list.map((img, idx) => (
        <div key={idx} className="portfolio-item">
          <div className="img-wrapper" onClick={() => open(list, idx)}>
            <img src={img.src} alt={img.title} />
          </div>
          <div className="item-meta">
            <span className="item-title">{img.title}</span>
            <span className="item-year">{img.year}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="page-container portfolio-page">
      <PageHeader onNavigate={onNavigate} currentPage={currentPage} />

      <div className="portfolio-content">
        <div className="portfolio-left-col">
          <div className="portfolio-sidebar-content">
            <h1 className="portfolio-title">Portfolio</h1>
            <div className="section-rule" />
            <p className="portfolio-description">{portfolio.description}</p>

            <div className="collections">
              <span className="collections-label mono">Collections</span>
              <button
                className={`collection-chip mono${filter === null ? ' is-active' : ''}`}
                onClick={() => setFilter(null)}
              >
                All
              </button>
              {portfolio.collections.map((c) => (
                <button
                  key={c}
                  className={`collection-chip mono${filter === c ? ' is-active' : ''}`}
                  onClick={() => setFilter(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="portfolio-right-col">
          {filter === null && selected.length > 0 && (
            <section className="portfolio-section is-featured">
              <h2 className="section-heading mono">
                <span className="featured-star">★</span> Selected photos
              </h2>
              {grid(selected)}
            </section>
          )}

          <section className="portfolio-section">
            <h2 className="section-heading mono">{filter || 'All work'}</h2>
            {grid(filtered)}
          </section>
        </div>
      </div>

      {lb && createPortal((() => {
        const img = lb.list[lb.idx];
        return (
          <div className="lightbox" onClick={() => setLb(null)}>
            <button className="lightbox-arrow lightbox-prev" onClick={(e) => { e.stopPropagation(); prev(); }}>‹</button>
            <img src={img.src} alt={img.title} onClick={(e) => e.stopPropagation()} />
            <button className="lightbox-arrow lightbox-next" onClick={(e) => { e.stopPropagation(); next(); }}>›</button>
            <button className="lightbox-close" onClick={() => setLb(null)}>✕</button>
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
