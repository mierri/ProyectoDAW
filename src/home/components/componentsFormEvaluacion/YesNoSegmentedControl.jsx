
export const YesNoSegmentedControl = ({ selected, onSelect }) => {
    const options = ["Sí", "No"];

    return (
        <div className="w-full flex space-x-1">
            {options.map((option) => (
                <button
                    key={option}
                    onClick={() => onSelect(option)}
                    className={`w-full px-4 py-2 rounded ${
                        selected === option ? "bg-customYellow text-black" : "hover:bg-gray-100 bg-white drop-shadow-lg text-gray-600"
                    } focus:outline-none ease-linear transition-all duration-50`}
                    type="button"
                >
                    {option}
                </button>
            ))}
        </div>
    );
};
