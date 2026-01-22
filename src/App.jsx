import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import { getOrganizationSchema, getHomePageSchema } from './utils/schemaMarkup';

function App() {
  useEffect(() => {
    // Add Organization schema to all pages
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.textContent = JSON.stringify(getOrganizationSchema());
    document.head.appendChild(orgScript);

    // Add Homepage schema
    const homeScript = document.createElement('script');
    homeScript.type = 'application/ld+json';
    homeScript.textContent = JSON.stringify(getHomePageSchema());
    document.head.appendChild(homeScript);

    return () => {
      orgScript.remove();
      homeScript.remove();
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App;
