
import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import logo from './logo.svg';
// import loading from './img/loading-1.gif';
import './App.css';
import Header from './common/header';
import Home from './pages/Home/home';
import Footer from './common/footer';


function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;

