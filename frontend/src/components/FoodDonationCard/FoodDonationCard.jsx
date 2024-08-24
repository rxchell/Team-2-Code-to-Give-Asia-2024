import { Link } from "react-router-dom";
import FoodTag from "./FoodTag";
import React from "react";

export default function FoodDonationCard({ id, imageUrl, foodName, donor, region, foodTags, allergens, quantity }) {

    // Just for testing purposes
    // imageUrl = imageUrl || "https://www.elmundoeats.com/wp-content/uploads/2021/02/FP-Nasi-lemak-with-all-its-trimmings-1-500x375.jpg";
    // foodName = foodName || "Food Name";
    // donor = donor || "Donor";
    // region = region || "Region";
    // foodTags = foodTags || "Food Tags";
    // quantity = quantity || "10";

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
                <h4 className="text-gray-700 font-medium py-0 my-0 whitespace-nowrap overflow-hidden text-ellipsis">{`Donated by ${donor}`}</h4>
                <h4 className="text-lg text-gray-800 font-semibold py-0 my-0 whitespace-nowrap overflow-hidden text-ellipsis">{region}</h4>
                <h4 className="text-gray-700 font-normal py-0 my-0 whitespace-nowrap overflow-hidden text-ellipsis">{`Food ${foodTags.length > 1 ? "tags" : "tag"}:`}</h4>
                <div className="flex gap-3 overflow-x-scroll no-scrollbar">
                    {
                        foodTags.map((tag) => (
                            <FoodTag key={tag} tag={tag} />
                        ))
                    }
                </div>
                <h4 className="text-gray-700 font-normal py-0 my-0">{`${allergens.length > 1 ? "Allergens" : "Allergen"}:`}</h4>
                <div className="flex gap-3 overflow-x-scroll no-scrollbar">
                    {
                        allergens.map((allergen) => (
                            <div key={allergen} className="rounded-full px-4 py-1 font-medium text-gray-50 bg-red-500">{allergen}</div>
                        ))
                    }
                </div>
                <div className="card-actions justify-center my-5">
                    <Link className="w-4/5 py-2 px-4 cursor-pointer rounded-lg text-gray-950 font-bold text-xl bg-secondary bg-opacity-80 hover:bg-opacity-100 transition-colors duration-300 border-0">Reserve</Link>
                </div>
            </div>
        </div>
    )
}