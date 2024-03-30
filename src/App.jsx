import { useEffect } from 'react';
import { getProvider } from './utils/interact';
import './App.css';

function App() {
  const loadBlockchainData = () => {
    if (window.ethereum) {
      const provider = getProvider();
      console.log(provider);
    } else {
      alert('Please connect to your Wallet of choice.');
    }
  };

  useEffect(() => {
    loadBlockchainData();
  });

  return (
    <>
      <p>Client Start</p>
    </>
  );
}

export default App;
