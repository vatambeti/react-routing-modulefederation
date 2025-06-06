import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Search from './Search';
import About from './About';
import Order from './Order';

import { Link } from 'react-router-dom';

const App = ({parentData}) => {
  return (
    
      <div>
        <h1>Child App---{parentData}</h1>
        <nav>
          <ul>
            <li><Link to="/">Search</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/order">Order</Link></li>
          </ul>
        </nav>
        <Routes>
          
          <Route index  element={<Search />} />
          <Route path="about" element={<About />} />
          <Route path="order" element={<Order />} />
        </Routes>
      </div>
    
  );
};

export default App;
