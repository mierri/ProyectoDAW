import { useState } from 'react'

export const SegmentedControl = ({ selected, onSelect }) => {

    return (
        <div className="w-full flex space-x-1">
            {[1, 2, 3, 4, 5].map((number) => (
                <button
                    key={number}
                    onClick={() => onSelect(number)}
                    className={`w-full px-4 py-2 rounded ${
                        selected === number ? "bg-customYellow text-black" : "hover:bg-gray-100 bg-white drop-shadow-lg text-gray-600"
                    } focus:outline-none ease-linear transition-all duration-50`}
                    type="button"
                >
                    {number}
                </button>
            ))}
        </div>
    );
};
