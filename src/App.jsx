// import { useState } from 'react'
import React from 'react';
import './App.css';
// import Button from "./components/button.jsx";
import Calculator from "./components/calculator.jsx";


function App() {
  // const [count, setCount] = useState(0)

  return (
      <div className="App">
        <h1>Interactive Calculator</h1>
        <Calculator />
      </div>
  )
}

export default App