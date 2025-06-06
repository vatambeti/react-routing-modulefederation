import React, { Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Routes, Route } from 'react-router-dom';

const RemoteRootApp = React.lazy(() => import('remote/RemoteRootApp'))

const App = () => {



  return (
    
    <div className="app">
    <h1>Hello World</h1>
    <h2>This the root App in Host</h2>
    <nav className="horizontal-nav">
      <Link to="/page-a">Host/Page A</Link>
      <Link to="/page-b">Host/Page B</Link>
      <Link to="/remote">Remote</Link>
    </nav>
    <React.Suspense fallback="Loading">
      <Routes>
        <Route path="/remote/*" element={<RemoteRootApp parentData={"hello from Parent"}/>} />
      </Routes>
    </React.Suspense>
  </div>
    
  );
};

export default App;
