import React, { useState } from "react";

export default function RegionOptions ({ onChange }) {
    const [selectedRegion, setSelectedRegion] = useState('All Regions');

    const handleRegionChange = (event) => {
        const { value } = event.target;

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
                    className={`px-4 py-2 rounded-md hover:bg-primary hover:text-gray-800 transition-colors duration-300  ${(selectedRegion ==='Central') ? 'bg-primary text-gray-900 font-bold' : 'bg-white text-gray-700'}`}
                    onClick={() => handleRegionChange({ target: { value: 'Central' } })}
                >
                    Central Region
                </button>
            </div>
            <div className="flex items-center">
                <button
                    className={`px-4 py-2 rounded-md hover:bg-primary hover:text-gray-800 transition-colors duration-300  ${(selectedRegion ==='East') ? 'bg-primary text-gray-900 font-bold' : 'bg-white text-gray-700'}`}
                    onClick={() => handleRegionChange({ target: { value: 'East' } })}
                >
                    East Region
                </button>
            </div>
            <div className="flex items-center">
                <button
                    className={`px-4 py-2 rounded-md hover:bg-primary hover:text-gray-800 transition-colors duration-300  ${(selectedRegion ==='West') ? 'bg-primary text-gray-900 font-bold' : 'bg-white text-gray-700'}`}
                    onClick={() => handleRegionChange({ target: { value: 'West' } })}
                >
                    West Region
                </button>
            </div>
            <div className="flex items-center">
                <button
                    className={`px-4 py-2 rounded-md hover:bg-primary hover:text-gray-800 transition-colors duration-300  ${(selectedRegion ==='North') ? 'bg-primary text-gray-900 font-bold' : 'bg-white text-gray-700'}`}
                    onClick={() => handleRegionChange({ target: { value: 'North' } })}
                >
                    North Region
                </button>
            </div>
            <div className="flex items-center">
                <button
                    className={`px-4 py-2 rounded-md hover:bg-primary hover:text-gray-800 transition-colors duration-300  ${(selectedRegion ==='South') ? 'bg-primary text-gray-900 font-bold' : 'bg-white text-gray-700'}`}
                    onClick={() => handleRegionChange({ target: { value: 'South' } })}
                >
                    South Region
                </button>
            </div>
        </div>
    );
};