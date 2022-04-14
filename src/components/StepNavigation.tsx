import React, { FC } from 'react';
import Step from './Step';

export const StepNavigation: FC<{ labelArray: number[]; step: number; setSetp: (val: number) => void }> = (props) => {
    return (
        <div className="flex flex-row justify-center items-center">
            {props.labelArray.map((label, index) => {
                return (
                    <>
                        <Step key={index} label={label} step={props.step} />
                        {/* a line */}
                        {index < 2 ? (
                            <div className="border-t-[2.5px] border-[rgba(0,0,0,0.1)] w-[84px] h-[2px]"></div>
                        ) : null}
                    </>
                );
            })}
        </div>
    );
};
