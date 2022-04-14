import React, { FC } from 'react';

interface Props {
    placeholder?: string;
    children?: JSX.Element | JSX.Element[];
    value?: string | number;
    setter?: (value: number) => void;
}

const Input: FC<Props> = (props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (props.setter) {
            props.setter(parseInt(e.target.value, 10));
        }
    };

    return (
        <div className="flex items-center flex-row mt-5 w-[430px] h-[56px] rounded-[4px] border-2 border-[#14153A] py-6 px-3 text-sm">
            {props.children ? (
                props.children
            ) : (
                <>
                    <input className=" focus:outline-0  placeholder:text-[#14153A] flex-1 " onChange={handleChange} />
                    <label className="text-[#14153A] text-sm">{props.placeholder}</label>
                </>
            )}
        </div>
    );
};

export default Input;
