import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProvider, loadNetwork } from './utils/interact';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const loadBlockchainData = async () => {
    if (window.ethereum) {
      const provider = getProvider(dispatch);
      const chainId = await loadNetwork(provider, dispatch);
      
      console.log(provider);
    } else {
      alert('Please connect to your Wallet of choice.');
    }
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <>
      <p>Client Start</p>
    </>
  );
}

export default App;
