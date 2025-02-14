import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import AdminPanel from './Components/Adminpanel/AdminPanel';
import Main from './Components/Main/Main';
import Login from './Components/Login/Login';

import './App.css';

const MainLayout = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
);

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Login Page Route */}
        <Route
          path="/login"
          element={<Login setLoggedIn={setLoggedIn} />}
        />

        {/* Admin Panel Route */}
        <Route
          path="/admin"
          element={loggedIn ? <AdminPanel /> : <Navigate to="/login" />}
        />

        {/* Default Route */}
        <Route
          path="/*"
          element={<MainLayout><Main /></MainLayout>}
        />
      </Routes>
    </Router>
  );
}

export default App;
