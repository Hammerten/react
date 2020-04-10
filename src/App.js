import React from 'react';
import Todos from "./components/Todos"
import './App.css';

function App() {
  return (
    <div className="main">
      <Todos inputDivTitle="New Todo" listDivTitle="Library"/>
    </div>
  );
}

export default App;
