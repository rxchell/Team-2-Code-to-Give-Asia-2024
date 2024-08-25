import { Link } from "react-router-dom";

export default function FoodCard({ imageUrl, foodName, donor, region, foodTags, quantity }) {

    // Just for testing purposes
    imageUrl = imageUrl || "https://www.elmundoeats.com/wp-content/uploads/2021/02/FP-Nasi-lemak-with-all-its-trimmings-1-500x375.jpg";
    foodName = foodName || "Food Name";
    donor = donor || "Donor";
    region = region || "Region";
    foodTags = foodTags || "Food Tags";
    quantity = quantity || "10";

    return (
        <div className="card card-compact bg-base-100 w-5/6 mx-auto shadow-xl overflow-hidden relative hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <figure>
                <div className="absolute top-2 right-2 bg-gray-950/50 backdrop-blur-md text-gray-50 px-4 py-2 rounded-full text-xl font-bold z-10">
                    {`${quantity} left`}
                </div>
                <img
                    className="h-48 w-full object-cover"
                    src={imageUrl}
                    alt="Food image" />
            </figure>
            <div className="card-body bg-white">
                <h2 className="text-2xl text-gray-900 font-bold pb-0 mb-0 whitespace-nowrap overflow-hidden text-ellipsis">{foodName}</h2>
                <h4 className="text-gray-700 font-medium py-0 my-0">{`Donated by ${donor}`}</h4>
                <h4 className="text-lg text-gray-800 font-semibold py-0 my-0">{region}</h4>
                <h4 className="text-gray-700 font-normal py-0 my-0">Food tags:</h4>
                <div className="flex gap-3 overflow-x-scroll scrollbar-hide">
                    <div className="rounded-full px-4 py-1 font-medium text-gray-50 bg-halal">Halal</div>
                    <div className="rounded-full px-4 py-1 font-medium text-gray-50 bg-spicy">Spicy</div>
                    <div className="rounded-full px-4 py-1 font-medium text-gray-50 bg-vegan">Vegan</div>
                </div>
                <h4 className="text-gray-700 font-normal py-0 my-0">Allergens:</h4>
                <div className="flex gap-3 overflow-x-scroll scrollbar-hide">
                    <div className="rounded-full px-4 py-1 font-medium text-gray-800 bg-egg">Egg</div>
                    <div className="rounded-full px-4 py-1 font-medium text-gray-800 bg-peanut">Peanut</div>
                    <div className="rounded-full px-4 py-1 font-medium text-gray-800 bg-milk">Milk</div>
                </div>
            </div>
        </div>
    )
}