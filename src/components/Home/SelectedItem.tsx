import React from 'react';

const SelectedItem = () => {
    return (
        <div className="flex flex-row w-[430px] h-[112px] border-2 rounded-lg border-[rgba(0,0,0,0.1)] p-4 items-center mt-6">
            <img src="https://picsum.photos/200/300" alt="" className="h-[80px] w-[80px] rounded-lg mr-[12px]" />
            <div className="flex flex-col text-left w-[278px] h-[44px]">
                <h3 className="font-semibold text-base">New Hat</h3>
                <span className="font-normal text-xs mt-1">HKD 259</span>
            </div>
        </div>
    );
};

export default SelectedItem;
