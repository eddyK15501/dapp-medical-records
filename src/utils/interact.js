import { ethers } from 'ethers';
import { setConnection, setChainId } from '../redux/features/provider/providerSlice.js';

export const getProvider = (dispatch) => {
    const connection = new ethers.providers.Web3Provider(window.ethereum);
    dispatch(setConnection(connection));

    return connection;
}

export const loadNetwork = async (provider, dispatch) => {
    const { chainId } = await provider.getNetwork();
    dispatch(setChainId(chainId));

    return chainId;
}