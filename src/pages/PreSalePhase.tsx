import React, { FC, useState } from 'react';
import Input from '../components/Input';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import calendar from '../assets/calendar.svg';

interface Props {
    startDate: Date;
    setStartDate: (date: Date) => void;
    supply: number;
    setSupply: (supply: number) => void;
    price: number;
    setPrice: (price: number) => void;
    split: number;
    setSplit: (split: number) => void;
}

const PreSalePhase: FC<Props> = ({ setStartDate, startDate, price, setSplit, setPrice, setSupply, split, supply }) => {
    return (
        <div className=" flex flex-col w-[430px] h-[382px] mt-[24px]">
            <div className="flex flex-col text-left h-[56] w-[420]">
                <h1 className="font-semibold text-2xl">Pre-Sale Settings</h1>
                <span className="text-sm font-normal mt-[4px]">Please select a product that is not published yet</span>
            </div>
            <div className="flex items-center flex-row mt-5 w-[209px] h-[56px] rounded-[4px] border-2 border-[#14153A] py-6 px-3 text-sm">
                <img src={calendar} alt="" className=" mr-[8px] w-[24px] h-[24px]" />
                <div className="flex flex-col">
                    <label className="text-xs text-left">Start Date</label>
                    <DatePicker
                        className=" h-[20px] text-sm outline-none mt-[4px]"
                        selected={startDate}
                        onChange={(date: Date) => setStartDate(date)}
                        minDate={new Date()}
                    />
                </div>
            </div>

            <Input placeholder="Supply" value={supply} setter={setSupply} />
            <Input placeholder="Price (ETH)" value={price} setter={setPrice} />
            <Input placeholder="% Profit for Splitting" value={split} setter={setSplit} />
        </div>
    );
};

export default PreSalePhase;
