import React from 'react';

const Select = ({ reference, value, onChange, data, label }) => {

    return (
        <select
            ref={reference}
            value={`${value}`}
            onChange={onChange}
            className="w-full text-gray-700 focus:outline-none bg-white focus:shadow-outline border border-gray-300 rounded py-2 mt-[5px] px-4 block"
        >
            <option value="" disabled hidden selected>{label}</option>
            {data?.map((option) =>
                <option
                    key={option.id}
                    value={`${option.id}`}
                    className='capitalize'
                >
                    {option.libelle}
                </option>
            )}
        </select>
    );
}

export default Select;