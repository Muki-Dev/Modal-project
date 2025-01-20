import { useState } from 'react'
import Modal from './Components/Modal'
import './App.css';
function App() {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <div className="App">
      <h1>Mini Project: Modal</h1>
      <button onClick={() => setIsOpen(true)}>Ouvrir le Modal</button>

      {
        isOpen && (
            <Modal 
              title="Bienvenue"
              content="Ceci est un exemple de modal simple."
              onClose={() => setIsOpen(false)}
            />
          )
      }
    </div>
  );
}

export default App;
