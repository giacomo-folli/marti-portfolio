import { nav } from './data/siteData';

const NotebookLayout = ({ children, currentPage, onTabClick, pageKey }) => {
  const isHome = currentPage === 'home';

  return (
    <div className="notebook-wrapper">
      <div className={`notebook-page ${isHome ? 'is-cover' : 'is-open'}`}>
        <div className="binding-edge" />

        {isHome && (
          <div className="clasp-container">
            <div className="clasp-strap" />
            <div className="clasp-button" />
          </div>
        )}

        <div className="page-transition-container" key={pageKey}>
          <div className="page-content">
            {children}
          </div>
        </div>
      </div>

      <nav className="tabs-container" aria-label="Sezioni">
        {nav.map(({ id, number, label }) => (
          <div
            key={id}
            className={`tab ${currentPage === id ? 'active' : ''}`}
            data-tab={id}
            onClick={() => onTabClick(id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onTabClick(id)}
          >
            <span className="tab-label">
              <span className="tab-number">{number}</span> {label}
            </span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default NotebookLayout;
