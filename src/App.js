import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import Skills from './Components/skills';
import MyProjects from './Components/MyProjects';
import { Newsletter } from './Components/New';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Skills />
      <MyProjects />
      <Newsletter/>
      <Footer />

    </div>
  );
}

export default App;
