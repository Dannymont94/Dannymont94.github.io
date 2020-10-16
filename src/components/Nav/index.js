import React, { useEffect } from 'react';

function Nav({ tabs, currentTab, setCurrentTab }) {
  useEffect(() => {
    document.title = currentTab;
  }, [currentTab]);

  return(
    <header>
      <h1>Daniel Monterrosa</h1>
      <nav>
        <ul>
          {tabs.map((tab, index) => (
            <li key={index}>
              <a
                href={`#${tab.toLowerCase()}`}
                onClick={() => setCurrentTab(tab)}
                className={currentTab === tab ? 'nav-link active' : 'active'}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;