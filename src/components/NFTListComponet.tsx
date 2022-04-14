import { useNFTCollection, useMetamask } from '@thirdweb-dev/react';
import { NFTMetadataOwner } from '../types/collections';
import { useState, useEffect } from 'react';
import axios from 'axios';

const NFTListComponent = () => {
    const nftCollection = useNFTCollection('0xa4261b149273dD2F888B1dc53731f3d014E25A95');
    const [nftHolders, setNftHolders] = useState<string[]>();
    const connectWithMetamask = useMetamask();

    useEffect(() => {
        const getHolders = async () => {
            const nfts = await nftCollection?.getAll();
            const holders = nfts
                ?.map((nft) => {
                    return nft.owner;
                })
                .filter((nft) => {
                    return nft !== '0x0000000000000000000000000000000000000000';
                });
            setNftHolders(holders);
        };
        if (nftCollection) {
            getHolders();
        }
    }, [nftCollection]);

    const sendAirDrop = async () => {
        const { data } = await axios({
            method: 'POST',
            url: 'http://localhost:5001/airdrop',
            data: {
                holdersAddress: nftHolders,
            },
        });
    };

    return (
        <ul>
            <button className="text-blue-600" onClick={sendAirDrop}>
                AirDrop
            </button>
            {nftHolders?.map((holder, index) => (
                <li key={index}>{holder}</li>
            ))}
        </ul>
    );
};

export default NFTListComponent;
