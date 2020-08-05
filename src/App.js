import React from 'react';
import './App.css';
// import Table from './tugas11/tabelbuah';
import Timer from './tugas12/timer';
import Table2 from './tugas13/Table2';

function App() {
  return (
    <div className="App">
      <Table2 />
      <Timer start={101}/>
    </div>
  );
}

export default App