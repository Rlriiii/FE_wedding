import React from 'react';
import './App.css';
import LocationSelector from './components/LocationSelector';
import PriceRange from './components/Price';
import Search from './components/Search';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <LocationSelector />
      <PriceRange />
      <Search />
    </div>
  );
}

export default App;
