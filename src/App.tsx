import { useState } from 'react';
import './App.css';
import CipherUI from './cipherUI/CipherUI';
 

function App() {
  const [alphabet,setAlphabet] = useState("no")
  return (
    <div className="App">
      <header className="App-header">
        Cæsarkoder 
        <CipherUI/>
      </header>
    </div>
  );
}

export default App;
