import React from 'react';
import SelectedItem from '../components/Home/SelectedItem';
const SelectPhase = () => {
    return (
        <div className=" flex flex-col w-[430px] h-[382px] mt-[24px]">
            <div className="flex flex-col text-left h-[56] w-[420]">
                <h1 className="font-semibold text-2xl">Select Product</h1>
                <span className="text-sm font-normal mt-[4px]">Please select a product that is not published yet</span>
                <SelectedItem />
            </div>
        </div>
    );
};

export default SelectPhase;
