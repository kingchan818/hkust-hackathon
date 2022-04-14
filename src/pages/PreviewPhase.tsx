import React, { FC } from 'react';
import Item from '../components/Item';

interface Props {
    startDate: Date;
    supply: number;
    price: number;
    split: number;
}

const PreviewPhase: FC<Props> = (props) => {
    return (
        <div className=" flex flex-col w-[430px] h-[382px] mt-[24px]">
            <div className="flex flex-col text-left h-[56] w-[420]">
                <h1 className="font-semibold text-2xl">Preview</h1>
                <span className="text-sm font-normal mt-[4px]">Please confirm the NFT Pre-Sale Campaign</span>
            </div>
            <Item startDate={props.startDate} supply={props.supply} price={props.price} split={props.split} />
        </div>
    );
};

export default PreviewPhase;
