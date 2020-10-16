import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <div>
      <Nav tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <About />
    </div>
  );
}

export default App;
