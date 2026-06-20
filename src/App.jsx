import { useState, useCallback } from 'react';
import './App.css';
import NotebookLayout from './NotebookLayout';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [pageKey, setPageKey] = useState(0);

  const handleNavigate = useCallback((page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      setPageKey((k) => k + 1);
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onExplore={() => handleNavigate('portfolio')} />;
      case 'portfolio':
        return <PortfolioPage onNavigate={handleNavigate} currentPage={currentPage} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} currentPage={currentPage} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} currentPage={currentPage} />;
      default:
        return <HomePage onExplore={() => handleNavigate('portfolio')} />;
    }
  };

  return (
    <NotebookLayout
      currentPage={currentPage}
      onTabClick={handleNavigate}
      pageKey={pageKey}
    >
      {renderPage()}
    </NotebookLayout>
  );
}

export default App;
