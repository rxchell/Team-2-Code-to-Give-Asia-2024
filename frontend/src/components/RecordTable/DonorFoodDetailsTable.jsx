import FoodDetailRow from './FoodDetailRow';

// beneficiary, beneficiaryContact, status, operatingHours, handleFood, additionalNotes
export default function DonorFoodDetailsTable ({ 
        donationID, 
        producedDatetime, 
        name, 
        type, 
        servingSize, 
        region, 
        consumedBy, 
        tags,
        allergies, 
        collectionAddress,
        collectBy,
        storeReheatInstructions,
        additionalNotes
    }) {
    return (
        <div className="container w-full p-6">
            <table className="w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden">
                <tbody className='text-gray-800'>
                    <FoodDetailRow title="Request ID" info={donationID} />
                    <FoodDetailRow title="Produced At" info={producedDatetime} />
                    <FoodDetailRow title="Food Name" info={name} />
                    <FoodDetailRow title="Food Category" info={type} />
                    <FoodDetailRow title="Quantity" info={servingSize} />
                    <FoodDetailRow title="Region" info={region} />
                    <FoodDetailRow title="Consumed By" info={consumedBy} />
                    <FoodDetailRow title="Food Tags" info={tags.length > 0 ? tags.join(', ') : 'No tags available'} />
                    <FoodDetailRow title="Allergens" info={allergies.length > 0 ? allergies.join(', ') : 'No allergens'} />
                    <FoodDetailRow title="Collection Address" info={collectionAddress} />
                    <FoodDetailRow title="Collect By" info={collectBy} />
                    <FoodDetailRow title="Storage Instructions" info={storeReheatInstructions} />
                    <FoodDetailRow title="Additional Notes" info={additionalNotes} />
                    {/* <FoodDetailRow title="Beneficiary" info={beneficiary} />
                    <FoodDetailRow title="Beneficiary Contact" info={beneficiaryContact} />
                    <FoodDetailRow title="Status" info={status} /> */}
                </tbody>
            </table>
        </div>
    );
};
