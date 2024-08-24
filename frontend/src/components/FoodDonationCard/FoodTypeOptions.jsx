// import { useState } from 'react';

// const FoodTypeOptions = () => {
//     const [selectedFoodTypes, setSelectedFoodTypes] = useState([]);

//     const handleFoodTypeChange = (event) => {
//         const { value } = event.target;

//         if (value === 'All food') {
//             setSelectedFoodTypes(['All food']);
//         } else {
//             if (selectedFoodTypes.includes('All food')) {
//                 setSelectedFoodTypes([value]);
//             } else {
//                 setSelectedFoodTypes([...selectedFoodTypes, value]);
//             }
//         }
//     };

//     return (
//         <div className="flex items-center gap-4">
//             <div className="flex items-center gap-2">
//                 <input
//                     type="checkbox"
//                     value="All food"
//                     id="all-food"
//                     checked={selectedFoodTypes.includes('All food')}
//                     onChange={handleFoodTypeChange}
//                     className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <label htmlFor="all-food" className="text-gray-700">
//                     All food
//                 </label>
//             </div>
//             <div className="flex items-center gap-2">
//                 <input
//                     type="checkbox"
//                     value="Halal"
//                     id="halal"
//                     checked={selectedFoodTypes.includes('Halal')}
//                     onChange={handleFoodTypeChange}
//                     className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <label htmlFor="halal" className="text-gray-700">
//                     Halal
//                 </label>
//             </div>
//             <div className="flex items-center gap-2">
//                 <input
//                     type="checkbox"
//                     value="Vegetarian"
//                     id="vegetarian"
//                     checked={selectedFoodTypes.includes('Vegetarian')}
//                     onChange={handleFoodTypeChange}
//                     className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <label htmlFor="vegetarian" className="text-gray-700">
//                     Vegetarian
//                 </label>
//             </div>
//             <div className="flex items-center gap-2">
//                 <input
//                     type="checkbox"
//                     value="No egg"
//                     id="no-egg"
//                     checked={selectedFoodTypes.includes('No egg')}
//                     onChange={handleFoodTypeChange}
//                     className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <label htmlFor="no-egg" className="text-gray-700">
//                     No egg
//                 </label>
//             </div>
//             <div className="flex items-center gap-2">
//                 <input
//                     type="checkbox"
//                     value="No peanut"
//                     id="no-peanut"
//                     checked={selectedFoodTypes.includes('No peanut')}
//                     onChange={handleFoodTypeChange}
//                     className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <label htmlFor="no-peanut" className="text-gray-700">
//                     No peanut
//                 </label>
//             </div>
//             <div className="flex items-center gap-2">
//                 <input
//                     type="checkbox"
//                     value="No spicy"
//                     id="no-spicy"
//                     checked={selectedFoodTypes.includes('No spicy')}
//                     onChange={handleFoodTypeChange}
//                     className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <label htmlFor="no-spicy" className="text-gray-700">
//                     No spicy
//                 </label>
//             </div>
//             <div className="flex items-center gap-2">
//                 <input
//                     type="checkbox"
//                     value="No seafood"
//                     id="no-seafood"
//                     checked={selectedFoodTypes.includes('No seafood')}
//                     onChange={handleFoodTypeChange}
//                     className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <label htmlFor="no-seafood" className="text-gray-700">
//                     No seafood
//                 </label>
//             </div>
//         </div>
//     );
// };

import { useState } from 'react';

export default function FoodTypeOptions({ onChange }) {
    const [selectedFoodTypes, setSelectedFoodTypes] = useState(['All Foods']);

    const handleFoodTypeChange = (event) => {
        const { value } = event.target;

        if (value === 'All Foods') {
            setSelectedFoodTypes(['All Foods']);
            onChange(['All Foods']);
        } else {
            if (selectedFoodTypes.includes('All Foods')) {
                setSelectedFoodTypes([value]);
                onChange([value]);
            } else if (selectedFoodTypes.includes(value)) {
                setSelectedFoodTypes(selectedFoodTypes.filter(type => type !== value));
                onChange(selectedFoodTypes.filter(type => type !== value));
            } else {
                setSelectedFoodTypes([...selectedFoodTypes, value]);
                onChange([...selectedFoodTypes, value]);
            }
        }
    };

    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
                <button
                    className={`px-4 py-2 rounded-md hover:bg-primary hover:text-gray-800 transition-colors duration-300  ${selectedFoodTypes.includes('All Foods') ? 'bg-primary text-gray-900 font-bold' : 'bg-white text-gray-700'}`}
                    onClick={() => handleFoodTypeChange({ target: { value: 'All Foods' } })}
                >
                    All Foods
                </button>
            </div>
            <div className="flex items-center gap-2">
                <button
                    className={`px-4 py-2 rounded-md hover:bg-primary hover:text-gray-800 transition-colors duration-300  ${selectedFoodTypes.includes('Halal') ? 'bg-primary text-gray-900 font-bold' : 'bg-white text-gray-700'}`}
                    onClick={() => handleFoodTypeChange({ target: { value: 'Halal' } })}
                >
                    Halal
                </button>
            </div>
            <div className="flex items-center gap-2">
                <button
                    className={`px-4 py-2 rounded-md hover:bg-primary hover:text-gray-800 transition-colors duration-300  ${selectedFoodTypes.includes('Spicy') ? 'bg-primary text-gray-900 font-bold' : 'bg-white text-gray-700'}`}
                    onClick={() => handleFoodTypeChange({ target: { value: 'Spicy' } })}
                >
                    Spicy
                </button>
            </div>
            <div className="flex items-center gap-2">
                <button

                    className={`px-4 py-2 rounded-md hover:bg-primary hover:text-gray-800 transition-colors duration-300  ${selectedFoodTypes.includes('Vegetarian') ? 'bg-primary text-gray-900 font-bold' : 'bg-white text-gray-700'}`}
                    onClick={() => handleFoodTypeChange({ target: { value: 'Vegetarian' } })}
                >
                    Vegetarian
                </button>
            </div>
            <div className="flex items-center gap-2">
                <button

                    className={`px-4 py-2 rounded-md hover:bg-primary hover:text-gray-800 transition-colors duration-300  ${selectedFoodTypes.includes('Gluten-Free') ? 'bg-primary text-gray-900 font-bold' : 'bg-white text-gray-700'}`}
                    onClick={() => handleFoodTypeChange({ target: { value: 'Gluten-Free' } })}
                >
                    Gluten-Free
                </button>
            </div>
            <div className="flex items-center gap-2">
                <button

                    className={`px-4 py-2 rounded-md hover:bg-primary hover:text-gray-800 transition-colors duration-300  ${selectedFoodTypes.includes('Low-Sugar') ? 'bg-primary text-gray-900 font-bold' : 'bg-white text-gray-700'}`}
                    onClick={() => handleFoodTypeChange({ target: { value: 'Low-Sugar' } })}
                >
                    Low-Sugar
                </button>
            </div>
        </div>
    );
};
