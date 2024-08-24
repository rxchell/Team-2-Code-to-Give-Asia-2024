import { useState } from "react";

export default function RegionOptions ({ onChange }) {
    const [selectedRegion, setSelectedRegion] = useState('All Regions');
    // onChange('All Region');

    const handleRegionChange = (event) => {
        const { value } = event.target;

        // if (value === 'All Region') {
        //     setSelectedRegion('All Region');
        // } else {
        //     setSelectedRegion(value);
        // }
        setSelectedRegion(value);
        onChange(value);
    };

    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center">
                <button
                    className={`px-4 py-2 rounded-md hover:bg-primary hover:text-gray-800 transition-colors duration-300  ${(selectedRegion ==='All Regions') ? 'bg-primary text-gray-900 font-bold' : 'bg-white text-gray-700'}`}
                    onClick={() => handleRegionChange({ target: { value: 'All Regions' } })}
                >
                    All Regions
                </button>
            </div>
            <div className="flex items-center">
                <button
                    className={`px-4 py-2 rounded-md hover:bg-primary hover:text-gray-800 transition-colors duration-300  ${(selectedRegion ==='Central Region') ? 'bg-primary text-gray-900 font-bold' : 'bg-white text-gray-700'}`}
                    onClick={() => handleRegionChange({ target: { value: 'Central Region' } })}
                >
                    Central Region
                </button>
            </div>
            <div className="flex items-center">
                <button
                    className={`px-4 py-2 rounded-md hover:bg-primary hover:text-gray-800 transition-colors duration-300  ${(selectedRegion ==='East Region') ? 'bg-primary text-gray-900 font-bold' : 'bg-white text-gray-700'}`}
                    onClick={() => handleRegionChange({ target: { value: 'East Region' } })}
                >
                    East Region
                </button>
            </div>
            <div className="flex items-center">
                <button
                    className={`px-4 py-2 rounded-md hover:bg-primary hover:text-gray-800 transition-colors duration-300  ${(selectedRegion ==='West Region') ? 'bg-primary text-gray-900 font-bold' : 'bg-white text-gray-700'}`}
                    onClick={() => handleRegionChange({ target: { value: 'West Region' } })}
                >
                    West Region
                </button>
            </div>
            <div className="flex items-center">
                <button
                    className={`px-4 py-2 rounded-md hover:bg-primary hover:text-gray-800 transition-colors duration-300  ${(selectedRegion ==='North Region') ? 'bg-primary text-gray-900 font-bold' : 'bg-white text-gray-700'}`}
                    onClick={() => handleRegionChange({ target: { value: 'North Region' } })}
                >
                    North Region
                </button>
            </div>
            <div className="flex items-center">
                <button
                    className={`px-4 py-2 rounded-md hover:bg-primary hover:text-gray-800 transition-colors duration-300  ${(selectedRegion ==='South Region') ? 'bg-primary text-gray-900 font-bold' : 'bg-white text-gray-700'}`}
                    onClick={() => handleRegionChange({ target: { value: 'South Region' } })}
                >
                    South Region
                </button>
            </div>
        </div>
    );
};