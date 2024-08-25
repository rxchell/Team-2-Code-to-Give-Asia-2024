import React, { useState, useEffect } from 'react';
import OptionsBar from "../components/FoodDonationCard/OptionsBar";
import FoodDonationData from "../FakeFoodDonation";
import FoodDonationCard from "../components/FoodDonationCard/FoodDonationCard";

export default function FoodDonationListingPage() {
    let foodDonationData = FoodDonationData;
    const [filteredData, setFilteredData] = useState(foodDonationData);
    const [intermediateFilteredData, setIntermediateFilteredData] = useState(foodDonationData);
    const [searchParams, setSearchParams] = useState({ selectedFoodTypes: [], selectedRegion: '' });

    function filterFoodDonationByFoodType(selectedFoodTypes) {
        if (!selectedFoodTypes || selectedFoodTypes[0] === 'All Foods') {
            return foodDonationData;
        } else {
            return foodDonationData.filter((donation) => {
                return selectedFoodTypes.every((foodType) => donation.tags.includes(foodType));
            });
        }
    }

    function filterFoodDonationByRegion(selectedRegion) {
        if (!selectedRegion || selectedRegion === 'All Regions') {
            return intermediateFilteredData;
        } else {
            return intermediateFilteredData.filter((donation) => {
                return donation.region === selectedRegion;
            });
        }
    }

    function handleSearch(selectedFoodTypes, selectedRegion) {
        setSearchParams({ selectedFoodTypes, selectedRegion });
        const filteredByFoodType = filterFoodDonationByFoodType(selectedFoodTypes);
        setIntermediateFilteredData(filteredByFoodType);
    }

    useEffect(() => {
        const { selectedRegion } = searchParams;
        const filteredByRegion = filterFoodDonationByRegion(selectedRegion);
        setFilteredData(filteredByRegion);
    }, [intermediateFilteredData, searchParams]);


    return (
        <div className="container mx-auto py-8">
            <h1 className='pb-4 text-3xl text-gray-900 font-bold border-b-2 border-gray-400'>Home - Choose what you need !</h1>
            <OptionsBar onSearch={handleSearch} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8 gap-y-8">
                {filteredData.map((donation) => (
                    <FoodDonationCard
                        key={donation.id}
                        imageUrl={donation.imageUrl}
                        foodName={donation.name}
                        donor={donation.donor}
                        region={donation.region}
                        foodTags={donation.tags}
                        allergens={donation.allergens}
                        quantity={donation.quantity}
                    />
                ))}
            </div>
        </div>
    );
}