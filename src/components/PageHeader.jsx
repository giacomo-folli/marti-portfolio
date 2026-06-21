import './PageHeader.css';

const PageHeader = ({ onNavigate, currentPage }) => {
  return (
    <header className="page-header">
      <button type="button" className="header-logo" onClick={() => onNavigate?.('home')} aria-label="Torna alla copertina">
        <span>ALEX</span><br/>
        <span>COOPER</span>
      </button>
      <nav className="header-nav" aria-label="Navigazione principale">
        <button
          type="button"
          className={currentPage === 'portfolio' ? 'active' : ''}
          onClick={() => onNavigate?.('portfolio')}
          aria-current={currentPage === 'portfolio' ? 'page' : undefined}
        >
          Portfolio
        </button>
        <button
          type="button"
          className={currentPage === 'about' ? 'active' : ''}
          onClick={() => onNavigate?.('about')}
          aria-current={currentPage === 'about' ? 'page' : undefined}
        >
          About me
        </button>
        <button
          type="button"
          className={currentPage === 'contact' ? 'active' : ''}
          onClick={() => onNavigate?.('contact')}
          aria-current={currentPage === 'contact' ? 'page' : undefined}
        >
          Contattami
        </button>
      </nav>
      <div className="menu-icon mono">Menu <span>≡</span></div>
    </header>
  );
};

export default PageHeader;
