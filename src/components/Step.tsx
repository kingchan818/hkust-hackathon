import React, { FC } from 'react';

const Step: FC<{ label?: number; step: number }> = (props) => {
    return (
        <div
            className={`rounded-full ${
                props.step === props.label ? 'bg-[#2ED47A]' : 'border-[0.5px] border-[#BBBBBD]'
            } h-6 w-6`}
        >
            <span className={` ${props.step === props.label ? 'text-white' : 'text-[#BBBBBD]'} text-base`}>
                {props.label}
            </span>
        </div>
    );
};

export default Step;
