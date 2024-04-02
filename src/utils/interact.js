import { ethers } from 'ethers';
import { connect } from '../redux/features/provider/providerSlice.js';

export const getProvider = (dispatch) => {
    const connection = new ethers.providers.Web3Provider(window.ethereum);
    dispatch(connect(connection));

    return connection;
}