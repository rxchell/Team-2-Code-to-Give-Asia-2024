import { useEffect, useState } from "react";
import FoodDonationCard from "../components/FoodDonationCard/FoodDonationCard";
import OptionsBar from "../components/FoodDonationCard/OptionsBar";
import FoodDonationData from "../FakeFoodDonation"

export default function FoodDonationListingPage() {
    let foodDonationData = FoodDonationData;
    const [filteredData, setFilteredData] = useState(foodDonationData);
    const [searchParams, setSearchParams] = useState({ selectedFoodTypes: [], selectedRegion: '' });
    const [resetting, setResetting] = useState(false);

    function filterFoodDonationByFoodType(selectedFoodTypes) {
        if (!selectedFoodTypes || selectedFoodTypes === 'All Foods') {
            return foodDonationData;
        } else {
            return foodDonationData.filter((donation) => {
                return selectedFoodTypes.every((foodType) => donation.tags.includes(foodType));
            });
        }
    }

    function filterFoodDonationByRegion(selectedRegion) {
        if (!selectedRegion || selectedRegion === 'All Regions') {
            return filteredData;
        } else {
            return filteredData.filter((donation) => {
                return donation.region === selectedRegion;
            });
        }
    }

    function handleSearch(selectedFoodTypes, selectedRegion) {
        setResetting(true);
        setSearchParams({ selectedFoodTypes, selectedRegion });
        setFilteredData(foodDonationData);
    }

    useEffect(() => {
        if (resetting) {
            const { selectedFoodTypes, selectedRegion } = searchParams;
            let filtered = foodDonationData;
            filtered = filterFoodDonationByFoodType(selectedFoodTypes);
            filtered = filterFoodDonationByRegion(selectedRegion);
            setFilteredData(filtered);
            setResetting(false);
        }
    }, [resetting, searchParams]);


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
                        quantity={donation.quantity}
                    />
                ))}
            </div>
        </div>
    );
}