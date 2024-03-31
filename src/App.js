import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import store from './admin';


import './App.css';
import MainAdminPage from './page/MainAdminPage';
import Login from './page/Login'


class App extends React.Component{  
  render(){return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainAdminPage />} />
       </Routes>
    </Router>
  );
}}

export default App;
