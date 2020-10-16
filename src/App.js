import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  function renderPage() {
    switch (currentTab) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  }

  return (
    <div>
      <Nav tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
