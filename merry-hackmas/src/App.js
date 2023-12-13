// import logo from './logo.svg';
import React from 'react';
// import './App.css';
import '../../merry-hackmas/src/assets/styles.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import SearchSanta from './components/SearchSanta';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p> 
          A Very Merry Christmas and Season's Greetings! 
        </p>
      </header>
      <SearchSanta />
      <Footer />
    </div>
  );
}

export default App;
