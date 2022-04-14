import React, { useState } from 'react';
import { StepNavigation } from '../StepNavigation';
import SelectPhase from '../../pages/SelectPhase';
import PreSalePhase from '../../pages/PreSalePhase';
import PreviewPhase from '../../pages/PreviewPhase';
import { useAddress, useNFTDrop } from '@thirdweb-dev/react';
import toast from 'react-hot-toast';
import { creating, error, success } from '../toast/toast.styles';
const Card = () => {
    const nftDrop = useNFTDrop('0xa4261b149273dD2F888B1dc53731f3d014E25A95');
    const address = useAddress();

    const [step, setStep] = useState(1);
    const [startDate, setStartDate] = useState(new Date());
    const [supply, setSupply] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [split, setSplit] = useState<number>(0);
    const label = [1, 2, 3];

    const onSetClaimHandler = async () => {
        if (!address || !nftDrop) return;
        if (supply === 0 || price === 0 || split === 0) return toast.error('Please fill all the fields', error);
        const notification = toast.loading('Creating Batch...', creating);
        try {
            const claim = [
                {
                    startTime: new Date(startDate),
                    maxQuantity: supply,
                    price: price,
                },
            ];
            const res = await nftDrop.claimConditions.set(claim);
            console.log(res);
            toast.success('Batche Created', success);
        } catch (e) {
            console.log(e);
            toast.error('Opps you cancel signature', error);
        } finally {
            toast.dismiss(notification);
        }
    };

    return (
        <div className="w-[480px] h-[560px] rounded-2xl shadow-[0px_0px_8px_rgba(0,0,0,0.23)] p-[32px_25px_32px_25px] relative">
            <StepNavigation labelArray={label} step={step} setSetp={setStep} />
            {step === 1 ? (
                <SelectPhase />
            ) : step === 2 ? (
                <PreSalePhase
                    startDate={startDate}
                    setStartDate={setStartDate}
                    supply={supply}
                    setSupply={setSupply}
                    price={price}
                    setPrice={setPrice}
                    split={split}
                    setSplit={setSplit}
                />
            ) : step === 3 ? (
                <PreviewPhase startDate={startDate} supply={supply} price={price} split={split} />
            ) : null}
            <div className="absolute flex flex-row w-[430px] h-[42px] justify-between bottom-8">
                {step === 1 ? (
                    <button className="px-7 rounded-3xl text-gray-300">Cancel</button>
                ) : (
                    <button className="px-7 rounded-3xl text-gray-300" onClick={() => setStep(step - 1)}>
                        Back
                    </button>
                )}
                {step === 3 ? (
                    <button className="bg-[#2ED47A] px-7 rounded-3xl text-white" onClick={onSetClaimHandler}>
                        Confirm & Publish
                    </button>
                ) : (
                    <button
                        className="bg-[#2ED47A] px-7 rounded-3xl text-white"
                        onClick={() => setStep(step + 1)}
                        disabled={step < 3 ? false : true}
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default Card;
