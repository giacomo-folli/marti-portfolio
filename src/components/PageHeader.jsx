import './PageHeader.css';

const PageHeader = ({ onNavigate, currentPage }) => {
  return (
    <header className="page-header">
      <div className="header-logo" onClick={() => onNavigate?.('home')}>
        <span>ALEX</span><br/>
        <span>COOPER</span>
      </div>
      <nav className="header-nav">
        <a
          className={currentPage === 'portfolio' ? 'active' : ''}
          onClick={() => onNavigate?.('portfolio')}
        >
          Portfolio
        </a>
        <a
          className={currentPage === 'about' ? 'active' : ''}
          onClick={() => onNavigate?.('about')}
        >
          About me
        </a>
        <a
          className={currentPage === 'contact' ? 'active' : ''}
          onClick={() => onNavigate?.('contact')}
        >
          Contattami
        </a>
      </nav>
      <div className="menu-icon mono">Menu <span>≡</span></div>
    </header>
  );
};

export default PageHeader;
