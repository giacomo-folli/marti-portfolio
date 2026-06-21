const TABS = [
  { key: 'portfolio', number: '01', label: 'Portfolio' },
  { key: 'about', number: '02', label: 'About me' },
  { key: 'contact', number: '03', label: 'Contattami' },
];

const NotebookLayout = ({ children, currentPage, onTabClick, pageKey }) => {
  const isHome = currentPage === 'home';

  return (
    <div className="notebook-wrapper">
      <div className={`notebook-page ${isHome ? 'is-cover' : 'is-open'}`}>
        <div className="binding-edge" aria-hidden="true" />

        {isHome && (
          <div className="clasp-container" aria-hidden="true">
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

      <nav className="tabs-container" aria-label="Sezioni del taccuino">
        {TABS.map((tab) => {
          const isActive = currentPage === tab.key;

          return (
            <button
              key={tab.key}
              type="button"
              className={`tab ${isActive ? 'active' : ''}`}
              data-tab={tab.key}
              onClick={() => onTabClick(tab.key)}
              aria-current={isActive ? 'page' : undefined}
              aria-label={`Apri ${tab.label}`}
            >
              <span className="tab-punch" aria-hidden="true" />
              <span className="tab-label">
                <span className="tab-number">{tab.number}.</span>
                <span>{tab.label}</span>
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default NotebookLayout;
