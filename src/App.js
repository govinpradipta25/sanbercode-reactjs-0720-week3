import React from 'react';
import './App.css';
// import Table from './tugas11/tabelbuah';
import Timer from './tugas12/timer';
// import Table2 from './tugas13/Table2'
import Table3 from './tugas14/Table3';

function App() {
  return (
    <div className="App">

      <Timer start={101}/>
      <Table3/>
    </div>
  );
}

export default App