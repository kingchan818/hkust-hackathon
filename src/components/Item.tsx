import React, { FC } from 'react';
import moment from 'moment';
interface Props {
    startDate: Date;
    supply: number;
    price: number;
    split: number;
}
const Item: FC<Props> = (props) => {
    const time = moment(props.startDate).format('l');
    return (
        <div className="flex flex-row w-[430px] h-[156px] border-2 rounded-lg border-[#111111] p-4  mt-6">
            <img src="https://picsum.photos/200/300" alt="" className="h-[120px] w-[120px] rounded-lg mr-[12px]" />
            <div className="flex flex-col text-left w-[266px] h-[42px]">
                <span className="font-normal text-xs mt-1 text-[#2ED47A]">Pre-Sale</span>
                <h3 className="font-semibold text-base">New Hat</h3>
                <div className="mt-[21px]">
                    <div className="flex flex-row justify-between">
                        <span className="font-normal text-[#BBBBBD] text-xs">Mining Price</span>
                        <span className="font-normal text-xs mt-1">ETH {props.price}</span>
                    </div>
                    <div className="flex flex-row justify-between">
                        <span className="font-normal text-[#BBBBBD] text-xs">Revenue Share:</span>
                        <span className="font-normal text-xs mt-1">ETH {props.price * (props.split / 100)}</span>
                    </div>
                    <div className="flex flex-row justify-between">
                        <span className="font-normal text-[#BBBBBD] text-xs">Start Date</span>
                        <span className="font-normal text-xs mt-1">{time}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
