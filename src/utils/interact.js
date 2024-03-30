import { ethers } from 'ethers';

export const getProvider = () => {
    const connection = new ethers.providers.Web3Provider(window.ethereum);
    return connection;
}