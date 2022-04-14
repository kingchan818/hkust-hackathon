import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import NFTListComponent from './components/NFTListComponet';
import MintButton from './components/MintButton';
import { Toaster } from 'react-hot-toast';
import Card from './components/Home/Card';
import Wallet from './components/Wallet';
{
    /* <NFTListComponent /> */
}
{
    /* <MintButton setLoading={setLoading} loading={loading} /> */
}

function App() {
    const connectWithMetamask = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect();
    const [loading, setLoading] = useState(false);

    return (
        <div className="App h-[100vh] w-[100vw] flex items-center justify-center">
            <Wallet />
            <Toaster position="bottom-center" />
            <Card />
        </div>
    );
}

export default App;
