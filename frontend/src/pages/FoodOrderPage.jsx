import { useEffect, useState } from "react";
import FoodCard from "../components/FoodOrder/FoodCard";
import FoodDonationData from "../FakeFoodDonation";
import FoodDetails from "../components/FoodOrder/FoodDetails";
// import QuantityCounter from "../components/FoodOrder/QuantityToOrder";
import RequestButton from "../components/FoodOrder/RequestButton";
import { useParams } from "react-router-dom";

export default function FoodOrderPage() {
    const [foodDonationData, setFoodDonationData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [quantity, setQuantity] = useState(1);

    const foodDonationID = useParams().id;

    useEffect(() => {
        const fetchDonation = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`http://localhost:3000/api/donations/${foodDonationID}`);
                let jsonData = await response.json();

                setFoodDonationData(jsonData);
                setIsLoading(false);
            } catch (err) {
                setError('An error occurred while fetching the data. Please try again later.');
                setIsLoading(false);
            }
        };

        fetchDonation();
    }, []);

    const handleIncrement = () => {
        if (quantity < foodDonationData.quantity) {
            setQuantity(quantity => quantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity => quantity - 1);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div className="text-red-600">{error}</div>;

    return (
        <div className="container mx-auto py-8">
            <h1 className="pb-4 text-3xl text-gray-900 font-bold border-b-2 border-gray-400">
                Home - Choose what you need! - {foodDonationData.name}
            </h1>
            <div className="flex flex-wrap my-8 gap-8">
                <div className="flex-1">
                    <FoodCard
                        key={foodDonationData.donationID}
                        imageUrl={foodDonationData.imageURL}
                        foodName={foodDonationData.name}
                        donor={foodDonationData.donor}
                        region={foodDonationData.region}
                        foodTags={foodDonationData.tags}
                        allergens={foodDonationData.allergies}
                        quantity={foodDonationData.servingSize}
                    />
                </div>
                <div className="flex-1">
                    <FoodDetails
                        type={foodDonationData.type}
                        name={foodDonationData.name}
                        weight={foodDonationData.weight}
                        servingSize={foodDonationData.servingSize}
                        producedDateTime={foodDonationData.producedDatetime}
                        consumeByDateTime={foodDonationData.consumedBy}
                        tags={foodDonationData.tags}
                        storeReheatInstructions={foodDonationData.storeReheatInstructions}
                        collectBy={foodDonationData.collectBy}
                        notes={foodDonationData.additionalNotes ? foodDonationData.additionalNotes : "N/A"}
                    />
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div>
                    <div className="flex flex-row items-center mb-6 gap-3">
                        <h3 className="text-xl text-black font-semibold">Quantity:</h3>
                        <div className="flex items-center gap-4">
                            <button
                                className="px-4 py-2 bg-gray-300 text-gray-900 font-bold rounded-md hover:bg-gray-400"
                                onClick={handleDecrement}
                            >
                                -
                            </button>
                            <div className="text-2xl text-black font-bold text-center">{quantity}</div>
                            <button
                                className="px-4 py-2 bg-gray-300 text-gray-900 font-bold rounded-md hover:bg-gray-400"
                                onClick={handleIncrement}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <RequestButton quantity={quantity} donationId={foodDonationData.donationID} />
                </div>
            </div>
        </div>
    );
}