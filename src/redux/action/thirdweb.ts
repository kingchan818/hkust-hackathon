// import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// // You can switch out this provider with any wallet or provider setup you like.
// const provider = ethers.Wallet.createRandom();
// const sdk = new ThirdwebSDK(provider);
// const contract = sdk.getNFTDrop("0xa4261b149273dD2F888B1dc53731f3d014E25A95")

export const ThirdwebActions = {
}

// const [providerStatus, setProviderStatus] = useState<unknown>();
// const [address, setAddress] = useState();

// useEffect(() => {
//     detectEthereumProvider({ mustBeMetaMask: true }).then((provider) => {
//         if (provider) {
//             // From now on, this should always be true:
//             // provider === window.ethereum
//             setProviderStatus(provider);
//         } else {
//             setProviderStatus(provider);
//         }
//     });
// }, []);

// const getAccount = async () => {
//     const result = await (window as any).ethereum.request({
//         method: 'eth_accounts',
//     });
//     console.log(result);
//     setAddress(result[0]);
// };

// const openWallet = async () => {
//     const permissionsArray = await (window as any).ethereum.request({
//         method: 'wallet_requestPermissions',
//         params: [{ eth_accounts: {} }],
//     });
//     console.log(permissionsArray);
//     getAccount();
// };

// const sendTransaction = async () => {
//     const params = [
//         {
//             from: address,
//             to: '0xd17855B58fc20343932bBA73e405ca074a1B1A7D',
//             value: Web3.utils.toWei('0.0001', 'ether'),
//         },
//     ];
//     try {
//         const result = await (window as any).ethereum.request({
//             method: 'eth_sendTransaction',
//             params,
//         });
//         alert('Contract :' + JSON.stringify(result));
//         console.log(result);
//     } catch (e) {
//         console.log(e);
//     }
// };