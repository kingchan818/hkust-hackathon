import React, { useState } from 'react';
import wallet from '../assets/wallet.svg';
import { useAddress, useMetamask, useSDK, useNFTDrop, useAccount } from '@thirdweb-dev/react';
const DownSvg = () => (
    <svg
        className="ml-2 w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
);

const Wallet = () => {
    const connectWithMetamask = useMetamask();
    const address = useAddress();
    const hiddenAddress = address?.substring(0, 6) + '...' + address?.substring(address.length - 4, address.length);
    const [show, setShow] = useState(false);
    return (
        <>
            {address ? (
                <div className="absolute top-5 right-10">
                    <button
                        id="dropdownDefault"
                        data-dropdown-toggle="dropdown"
                        className="py-2 px-4 border-[2px] border-black flex flex-row items-center rounded-md cursor-pointer "
                        type="button"
                        onClick={() => setShow(!show)}
                    >
                        {hiddenAddress}
                        <DownSvg />
                    </button>
                    <div
                        id="dropdown"
                        className={`${show ? '' : 'hidden'}  z-10  bg-white rounded divide-y divide-gray-100 shadow `}
                    >
                        <ul className="py-1 text-sm text-black" aria-labelledby="dropdownDefault">
                            <li>
                                <span className="block py-2 px-4 cursor-pointer">Logout</span>
                            </li>
                        </ul>
                    </div>
                </div>
            ) : (
                <div
                    className="py-2 px-4 border-[2px] border-black flex flex-row items-center rounded-md cursor-pointer absolute top-5 right-10"
                    onClick={() => connectWithMetamask()}
                >
                    <img src={wallet} alt="" className="h-[30px] w-[30px] mr-2" />
                    <span className="font-normal">Connect wallet</span>
                </div>
            )}
        </>
    );
};

export default Wallet;
