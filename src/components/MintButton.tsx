import { FC, useState } from 'react';
import { useAddress, useMetamask, useSDK, useNFTDrop } from '@thirdweb-dev/react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { ethers } from 'ethers';
// const onMintHandler = async () => {
//     // make a backend server api request to mint an NFT
//     const { data } = await axios({
//         method: 'POST',
//         url: 'http://localhost:5001/claim',
//         params: {
//             address: address,
//         },
//     });
//     console.log('minting done', data);
// };
type mintButtonType = { loading: boolean; setLoading: (value: boolean) => void };

const MintButton: FC<mintButtonType> = (props) => {
    const connectWithMetamask = useMetamask();
    const address = useAddress();
    const nftDrop = useNFTDrop('0xa4261b149273dD2F888B1dc53731f3d014E25A95');
    const sdk = useSDK();
    const provider = sdk?.getSignerOrProvider();
    const onMintHandler = () => {
        if (!address || !nftDrop) return;
        props.setLoading(true);
        const notification = toast.loading('Minting...', {
            style: {
                background: 'white',
                color: 'green',
                fontWeight: 'bolder',
                fontSize: '17px',
                padding: '10px',
            },
        });

        nftDrop
            .claimTo(address, 1)
            .then(async (tx) => {
                const receipt = tx[0].receipt; // the transaction receipt
                const claimedTokenId = tx[0].id; // the id of the NFT claimed
                const claimedNFT = await tx[0].data(); // (optional) get the claimed NFT metadata

                toast(' Successfully minted ', {
                    duration: 8000,
                    style: {
                        background: 'green',
                        color: 'white',
                        fontWeight: 'bolder',
                        fontSize: '17px',
                        padding: '10px',
                    },
                });

                console.log(receipt);
                console.log(claimedTokenId);
                console.log(claimedNFT);
            })
            .catch((error) => {
                toast(`User denied transaction signature !`, {
                    duration: 8000,
                    style: {
                        background: 'red',
                        color: 'white',
                        fontWeight: 'bolder',
                        fontSize: '17px',
                        padding: '10px',
                    },
                });
            })
            .finally(() => {
                props.setLoading(false);
                toast.dismiss(notification);
            });
    };
    function createHash(arr: any[]) {
        const hash = new Map();
        for (let i = 0; i < arr.length; i++) {
            if (hash.has(arr[i].owner)) {
                hash.set(arr[i].owner, hash.get(arr[i].owner) + 1);
            } else {
                hash.set(arr[i].owner, 0);
            }
        }
        console.log(hash);
        return hash;
    }

    const sendHolders = () => {
        nftDrop?.getAllClaimed().then(async (data) => {
            let promises: any = [];
            data = data.filter((nftOwner) => {
                return nftOwner.owner !== address;
            });
            console.log(data);
            const hash = createHash(data);

            hash.forEach((value, key) => {
                console.log(key, value);
                const tx = {
                    from: address,
                    to: key,
                    value: ethers.utils.parseEther(`${value * 0.01}`)._hex,
                } as any;
                console.log(tx);
                promises.push(provider?.sendTransaction(tx));
            });
            const result = await Promise.all(promises);
            console.log(result);
        });
    };

    const createBatch = async () => {
        if (!address || !nftDrop) return;
        props.setLoading(true);
        const notification = toast.loading('Creating Batch...', {
            style: {
                background: 'white',
                color: 'green',
                fontWeight: 'bolder',
                fontSize: '17px',
                padding: '10px',
            },
        });
        const metaDataArray = [
            {
                name: 'no name',
                description: 'testing',
                image: 'https://i0.wp.com/www.18hall.com/wp-content/uploads/2021/10/NFT%E7%8C%B4%E5%AD%90.jpg?resize=500%2C291&ssl=1',
            },
        ];

        try {
            const res = await nftDrop?.createBatch(metaDataArray);
            toast(' Successfully minted ', {
                duration: 8000,
                style: {
                    background: 'green',
                    color: 'white',
                    fontWeight: 'bolder',
                    fontSize: '17px',
                    padding: '10px',
                },
            });
        } catch (e) {
            console.log(e);
            toast('Something went wrong !', {
                duration: 8000,
                style: {
                    background: 'red',
                    color: 'white',
                    fontWeight: 'bolder',
                    fontSize: '17px',
                    padding: '10px',
                },
            });
        } finally {
            props.setLoading(false);
            toast.dismiss(notification);
        }
    };

    const onSetClaimHandler = async () => {
        const claim = [
            {
                startTime: new Date('Tue Apr 12 2022 17:08:57 GMT+0800 (Hong Kong Standard Time)'),
                maxQuantity: 105,
                price: 0.01,
            },
        ];
        if (!address || !nftDrop) return;
        const res = await nftDrop.claimConditions.set(claim);
        console.log(res);
    };

    const ConnectWallet = () => {
        return (
            <>
                <button
                    className="rounded-md bg-slate-500 py-2 px-4 focus:border-2 border-blue-500"
                    onClick={() => connectWithMetamask()}
                >
                    Connect with Metamask
                </button>
            </>
        );
    };
    // render the button to mint a sword NFT
    return address ? (
        <>
            <button
                className="rounded-md bg-slate-500 py-2 px-4 focus:border-2 border-blue-500"
                onClick={onMintHandler}
                disabled={props.loading}
            >
                Mint
            </button>
            <button
                className="rounded-md bg-slate-500 py-2 px-4 focus:border-2 border-blue-500"
                onClick={sendHolders}
                disabled={props.loading}
            >
                send to all holders
            </button>
        </>
    ) : (
        <ConnectWallet />
    );
};

export default MintButton;
