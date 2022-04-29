import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from '../src/layout/Header';
//import Footer from '../src/layout/Footer';
import Accueil from '../src/pages/Home';
import ProposPages from '../src/pages/ProposPages';
import Logements from '../src/pages/Logements';
import Error404 from '../src/pages/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
    <Header />
    
    <Routes>
      <Route exact path="/home" element={<Accueil />} />
      <Route exact path="/" element={<Accueil />} />
      <Route exact path="/propos" element={<ProposPages />} />
      <Route exact path="/logement/:id" element={<Logements/>} />
      <Route path="*" element={<Error404 />} />
    </Routes>
   
  </Router>

  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
