import React from "react";

export default function FoodDetails({
    type,
    name,
    weight,
    servingSize,
    producedDateTime,
    consumeByDateTime,
    tags,
    storeReheatInstructions,
    collectBy,
    notes
}) {
    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{name}</h2>
            <div className="grid grid-cols-2 gap-y-4">
                <div className="text-left text-gray-900 font-semibold">Type:</div>
                <div className="text-center text-gray-900 font-bold">{type}</div>

                <div className="text-left text-gray-900 font-semibold">Weight:</div>
                <div className="text-center text-gray-900 font-bold">{weight}</div>

                <div className="text-left text-gray-900 font-semibold">Serving Size:</div>
                <div className="text-center text-gray-900 font-bold">{servingSize}</div>

                <div className="text-left text-gray-900 font-semibold">Produced Date & Time:</div>
                <div className="text-center text-gray-900 font-bold">{producedDateTime}</div>

                <div className="text-left text-gray-900 font-semibold">Consume By Date & Time:</div>
                <div className="text-center text-gray-900 font-bold">{consumeByDateTime}</div>

                <div className="text-left text-gray-900 font-semibold">Tags:</div>
                <div className="text-center text-gray-900 font-bold">{tags.join(", ")}</div>

                <div className="text-left text-gray-900 font-semibold">Store/Reheating Instructions:</div>
                <div className="text-center text-gray-900 font-bold">{storeReheatInstructions}</div>

                <div className="text-left text-gray-900 font-semibold">Collect By:</div>
                <div className="text-center text-gray-900 font-bold">{collectBy}</div>

                <div className="text-left text-gray-900 font-semibold">Other Notes:</div>
                <div className="text-center text-gray-900 font-bold">{notes}</div>
            </div>
        </div>
    );
}