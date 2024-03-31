import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import store from './admin';


import './App.css';
import MainAdminPage from './page/MainAdminPage';
import Login from './page/Login'
import Categories from './components/categories_block/Categories';
import categories_JSON from './data/categories.json';
import Table from './components/products_table/Table'
import { ErrorPage } from './components/products_table/error-page';



class App extends React.Component{  
  render(){return (
    <Router style={{ display: 'flex' }}>
      <MainAdminPage />
      <Routes>
        <Route path="/" element={<div style={{textAlign: 'center', fontSize: '25px', fontWeight: '600', marginTop: '30px'}}>Pick an option</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<Categories categories={categories_JSON.categories} />} />
        <Route path="/products" element={<Table />} />
        <Route path="/users" element={<div>Its users</div>} />
        <Route path="/orders" element={<div>Its orders</div>} />
        <Route path="*" element={<Navigate to="/error" />} />
        <Route path="/error" element={<div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><ErrorPage /></div>} />
      </Routes>
    </Router>
  );
}}

export default App;
