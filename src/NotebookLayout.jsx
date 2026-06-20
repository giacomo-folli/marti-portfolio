import React from 'react';

const LABELS = {
  home: 'HOME PAGE',
  portfolio: '01. PORTFOLIO',
  about: '02. ABOUT ME',
  contact: '03. CONTATTAMI',
};

const NotebookLayout = ({ children, currentPage, onTabClick, pageKey }) => {
  const isHome = currentPage === 'home';

  return (
    <div className="notebook-wrapper">
      <div className={`notebook-page ${isHome ? 'is-cover' : 'is-open'}`}>
        {/* Binding edge */}
        <div className="binding-edge" />

        {/* Corner label */}
        {/* <div className="corner-label mono">
          {LABELS[currentPage] || ''}
        </div> */}

        {/* Clasp — cover only */}
        {isHome && (
          <div className="clasp-container">
            <div className="clasp-strap" />
            <div className="clasp-button" />
          </div>
        )}

        {/* Page content with crossfade */}
        <div className="page-transition-container" key={pageKey}>
          <div className="page-content">
            {children}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <nav className="tabs-container" aria-label="Sezioni">
        <div
          className={`tab ${currentPage === 'portfolio' ? 'active' : ''}`}
          data-tab="portfolio"
          onClick={() => onTabClick('portfolio')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onTabClick('portfolio')}
        >
          <span className="tab-label">
            <span className="tab-number">01</span> Portfolio
          </span>
        </div>
        <div
          className={`tab ${currentPage === 'about' ? 'active' : ''}`}
          data-tab="about"
          onClick={() => onTabClick('about')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onTabClick('about')}
        >
          <span className="tab-label">
            <span className="tab-number">02</span> About me
          </span>
        </div>
        <div
          className={`tab ${currentPage === 'contact' ? 'active' : ''}`}
          data-tab="contact"
          onClick={() => onTabClick('contact')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onTabClick('contact')}
        >
          <span className="tab-label">
            <span className="tab-number">03</span> Contattami
          </span>
        </div>
      </nav>
    </div>
  );
};

export default NotebookLayout;
