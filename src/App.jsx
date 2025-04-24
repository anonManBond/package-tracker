import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrdersPage from './pages/OrdersPage';
import OrderDetailPage from './pages/OrderDetailPage';
import ErrorPage from './pages/ErrorPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OrdersPage />} />
        <Route path="/order/:id" element={<OrderDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
