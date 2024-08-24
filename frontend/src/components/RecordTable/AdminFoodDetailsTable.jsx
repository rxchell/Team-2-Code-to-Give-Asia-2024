import React from 'react';
import FoodDetailRow from './FoodDetailRow';

export default function BeneficiaryFoodDetailsTable ({ requestID, requestTime, foodName, foodCategory, quantity, producedAt, consumedBy, foodTags, allergens, collectionAddress, donor, donorContact, beneficiary, beneficiaryContact, status, operatingHours, handleFood, additionalNotes }) {
    return (
        <div className="container w-full p-6">
            <table className="w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden">
                <tbody className='text-gray-800'>
                    <FoodDetailRow title="Request ID" info={requestID} />
                    <FoodDetailRow title="Request Time" info={requestTime} />
                    <FoodDetailRow title="Food Name" info={foodName} />
                    <FoodDetailRow title="Food Category" info={foodCategory} />
                    <FoodDetailRow title="Quantity" info={quantity} />
                    <FoodDetailRow title="Produced At" info={producedAt} />
                    <FoodDetailRow title="Consumed By" info={consumedBy} />
                    <FoodDetailRow title="Food Tags" info={foodTags.join(', ')} />
                    <FoodDetailRow title="Allergens" info={allergens.join(', ')} />
                    <FoodDetailRow title="Collection Address" info={collectionAddress} />
                    <FoodDetailRow title="Donor" info={donor} />
                    <FoodDetailRow title="Donor Contact" info={donorContact} />
                    <FoodDetailRow title="Beneficiary" info={beneficiary} />
                    <FoodDetailRow title="Beneficiary Contact" info={beneficiaryContact} />
                    <FoodDetailRow title="Status" info={status} />
                </tbody>
            </table>
        </div>
    );
};
