import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <div>
      <Nav tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main>
        <About />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
