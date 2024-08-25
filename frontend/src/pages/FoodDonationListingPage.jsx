import React, { useState, useEffect } from 'react';
import OptionsBar from "../components/FoodDonationCard/OptionsBar";
import FoodDonationCard from "../components/FoodDonationCard/FoodDonationCard";

import FoodDonationData from "../FakeFoodDonation";
import axios from 'axios';

export default function FoodDonationListingPage() {
    // let foodDonationData = FoodDonationData;
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [intermediateFilteredData, setIntermediateFilteredData] = useState([]);
    const [searchParams, setSearchParams] = useState({ selectedFoodTypes: [], selectedRegion: '' });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    function filterFoodDonationByFoodType(selectedFoodTypes) {
        if (!selectedFoodTypes || selectedFoodTypes[0] === 'All Foods') {
            return allData;
        } else {
            return allData.filter((donation) => {
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
        const fetchDonations = async () => {
            try {
                setIsLoading(true);
                // const response = await axios.get('http://localhost:3000/api/donations');
                // console.log(`response: ${response}`);

                const response = await fetch("http://localhost:3000/api/donations");
                let jsonData = await response.json();
                // console.log(`jsonData: ${jsonData}`);
                // console.log(`jsonData[0]: ${jsonData[0]}`);
                // console.log(`jsonData[0].foodName: ${jsonData[0].foodName}`);


                // const response = foodDonationData;
    
                // const dataArray = [];
                // response.forEach((item) => {
                //     const key = Object.keys(item)[0];
                //     // console.log(`key is ${key}`);
                //     const itemData = item[key];
                //     // console.log(itemData);
                //     dataArray.push({
                //         donationID: key, 
                //         ...itemData
                //     });
                // });
                // console.log(`[In Page]\n${dataArray}`);
                // console.log(dataArray[0].allergies);
                // console.log(dataArray[0].tags);
                setAllData(jsonData);
                setFilteredData(jsonData);
                setIntermediateFilteredData(jsonData)
                setIsLoading(false);
            } catch (err) {
                setError('An error occurred while fetching the data. Please try again later.');
                setIsLoading(false);
            }
        };

        fetchDonations();
    }, []);

    useEffect(() => {
        const { selectedRegion } = searchParams;
        const filteredByRegion = filterFoodDonationByRegion(selectedRegion);
        setFilteredData(filteredByRegion);
    }, [intermediateFilteredData, searchParams]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container mx-auto py-8">
            <h1 className='pb-4 text-3xl text-gray-900 font-bold border-b-2 border-gray-400'>Home - Choose what you need !</h1>
            <OptionsBar onSearch={handleSearch} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8 gap-y-8">
                {filteredData.map((donation) => (
                    <FoodDonationCard
                        key={donation["donationID"]}
                        donationID={donation["donationID"]}
                        imageUrl={donation["imageURL"]}
                        foodName={donation["name"]}
                        donor={donation["donor"]}  
                        region={donation["region"]}   
                        foodTags={donation["tags"]}
                        allergens={donation["allergies"]}
                        quantity={donation["servingSize"]}
                    />
                    // <FoodDonationCard
                    //     key={donation.donationID}
                    //     donationID={donation.donationID}
                    //     imageUrl={donation.imageURL}
                    //     foodName={donation.foodName}
                    //     donor={donation.donor}   // NA   
                    //     region={donation.region}    // NA
                    //     foodTags={donation.specialTags}
                    //     allergens={donation.allergens}
                    //     quantity={donation.quantity}
                    // />
                ))}
            </div>
        </div>
    );
}