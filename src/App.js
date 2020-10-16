import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <div>
      <Nav tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main>
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
