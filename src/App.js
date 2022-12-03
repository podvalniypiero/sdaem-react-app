import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';




function App() {
  return (
    <div className="wrapper">
     
     <Routes>

      <Route path='/' element = {
        // <Home/>
        <Header/>
      }/>

     </Routes>

     <Footer/>
    
     </div>
  );
}

export default App;
