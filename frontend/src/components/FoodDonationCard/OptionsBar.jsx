import { useState } from 'react';
import FoodTypeOptions from './FoodTypeOptions';
import RegionOptions from './RegionOptions';

export default function OptionsBar ({ onSearch }) {
    const [selectedFoodTypes, setSelectedFoodTypes] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('');
    
    const handleSearchClick = () => {
        onSearch(selectedFoodTypes, selectedRegion);
    };

    return (
        <div className="container mx-auto p-4 border-b-2 border-gray-400">
            <div className="mb-4">
                <h3 className="text-lg text-gray-800 font-semibold mb-2">Food type</h3>
                <FoodTypeOptions onChange={setSelectedFoodTypes} />
            </div>
            <div>
                <h3 className="text-lg text-gray-800 font-semibold mb-2">Region</h3>
                <RegionOptions onChange={setSelectedRegion} />
                <div className='flex flex-col my-1 text-gray-600 text-md'>
                    <div className='flex gap-3'>
                        <h5 className='font-semibold'>Central Region: </h5>
                        Marina Bay, City Hall, Orchard, Bugis, Chinatown
                    </div>
                    <div className='flex gap-3'>
                        <h5 className='font-semibold'>East Region: </h5>
                        East Coast, Bedok, Changi, Hougang
                    </div>
                    <div className='flex gap-3'>
                        <h5 className='font-semibold'>West Region: </h5>
                        Bukit Batok, Bukit Panjang, Jurong, Tampines
                    </div>
                    <div className='flex gap-3'>
                        <h5 className='font-semibold'>North Region: </h5>
                        Yishun, Woodlands, Sembawang, Sengkang
                    </div>
                    <div className='flex gap-3'>
                        <h5 className='font-semibold'>South Region: </h5>
                        Tanjong Pagar, Holland Village, Little India
                    </div>
                </div>
            </div>
            <button onClick={handleSearchClick} className="py-2 px-4 mt-6 cursor-pointer rounded-lg bg-primary bg-opacity-70 text-gray-800 font-semibold hover:bg-opacity-100 hover:text-gray-950 hover:font-bold text-xl transition-colors duration-300 border-0">Search</button>
        </div>
    );
};
