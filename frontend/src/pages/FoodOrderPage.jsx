import { useState } from "react";
import FoodCard from "../components/FoodOrder/FoodCard";
import FoodDonationData from "../FakeFoodDonation";
import FoodDetails from "../components/FoodOrder/FoodDetails";

export default function FoodOrderPage() {

    const [foodDonationData] = useState(FoodDonationData[0]);

    // link to donationId
    // const { id } = useParams();

    // // Find the specific food donation by ID
    // const foodDonationData = FoodDonationData.find(donation => donation.id === id);

    // if (!foodDonationData) {
    //     return <div>Food donation not found</div>;
    // }

    return (
        <div className="container mx-auto py-8">
            <h1 className="pb-4 text-3xl text-gray-900 font-bold border-b-2 border-gray-400">
                Home - Choose what you need! - {foodDonationData.name}
            </h1>
            <div className="flex flex-wrap my-8 gap-8">
                <div className="flex-1">
                    <FoodCard
                        key={foodDonationData.id}
                        imageUrl={foodDonationData.imageUrl}
                        foodName={foodDonationData.name}
                        donor={foodDonationData.donor}
                        region={foodDonationData.region}
                        foodTags={foodDonationData.tags}
                        quantity={foodDonationData.quantity}
                    />
                </div>
                <div className="flex-1">
                    <FoodDetails
                        type={foodDonationData.type}
                        name={foodDonationData.name}
                        weight={foodDonationData.weight}
                        servingSize={foodDonationData.servingSize}
                        producedDateTime={foodDonationData.producedDateTime}
                        consumeByDateTime={foodDonationData.consumeByDateTime}
                        tags={foodDonationData.tags}
                        storeReheatInstructions={foodDonationData.storeReheatInstructions}
                        collectBy={foodDonationData.collectBy}
                        notes={foodDonationData.notes}
                    />
                </div>
            </div>
        </div>
    );
}