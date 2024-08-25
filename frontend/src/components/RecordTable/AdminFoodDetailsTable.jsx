import React, { useEffect, useState } from 'react';
import FoodDetailRow from './FoodDetailRow';

export default function AdminFoodDetailsTable({ donationID }) {
    const [donationRecord, setDonationRecord] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDonations = async () => {
            try {
                setIsLoading(true);

                const response = await fetch(`http://localhost:3000/api/donations/${donationID}`);
                let jsonData = await response.json();
                // console.log(`jsonData: ${jsonData}`);
                // console.log(`donor: ${jsonData.donor}`);

                setDonationRecord(jsonData);
                setIsLoading(false);
            } catch (err) {
                setError('An error occurred while fetching the data. Please try again later.');
                setIsLoading(false);
            }
        };
        fetchDonations();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container w-full p-6">
            <table className="w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden">
                <tbody className='text-gray-800'>
                    <FoodDetailRow title="Donation ID" info={donationRecord.donationID} />
                    <FoodDetailRow title="Last Update" info={donationRecord.updatedAt} />
                    <FoodDetailRow title="Food Name" info={donationRecord.name} />
                    <FoodDetailRow title="Quantity" info={donationRecord.servingSize} />
                    <FoodDetailRow title="Produced At" info={donationRecord.producedDatetime} />
                    <FoodDetailRow title="Consume By" info={donationRecord.consumedBy} />
                    <FoodDetailRow title="Collect By" info={donationRecord.collectBy} />
                    <FoodDetailRow title="Food Tags" info={donationRecord.tags.join(', ')} />
                    <FoodDetailRow title="Allergens" info={donationRecord.allergies.join(', ')} />
                    <FoodDetailRow title="Collection Address" info={donationRecord.collectionAddress} />
                    <FoodDetailRow title="Donor" info={donationRecord.donor} />
                    <FoodDetailRow title="Donor Contact" info={donationRecord.donorContact} />
                    <FoodDetailRow title="Open Time" info={donationRecord.openAt} />
                    <FoodDetailRow title="Close Time" info={donationRecord.closeAt} />
                </tbody>
            </table>
        </div>
    );
};
