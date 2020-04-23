import React from 'react';
import './assets/css/App.css';
import Header from './components/Header';
import Navi from './components/Navi';
import Aside from './components/Aside';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="contents">
        <Navi />
        <main>
          Hello!React!
        </main>
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;
