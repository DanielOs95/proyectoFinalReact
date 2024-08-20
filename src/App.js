import React, { useState } from 'react';
import Home from './pages/Home';
import FlightSearch from './components/FlightSearch';

const App = () => {
  const [searchParams, setSearchParams] = useState(null);

  const handleSearch = () => {
      setSearchParams(); 
  };

  return (
    <div className="App">
       <FlightSearch />
       <Home />
    </div>

   
      /*<div>
          <h1>Busca tu vuelo</h1>
          <Home onSearch={handleSearch} /> {}
          {searchParams && <FlightSearch searchParams={searchParams} />}
      </div>*/
  );
};

export default App;