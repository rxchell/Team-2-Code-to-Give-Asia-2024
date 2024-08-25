import React, { useState } from "react";

export default function QuantityCounter({ initialQuantity }) {
    const [quantity, setQuantity] = useState(0); // Start at 0

    const handleIncrement = () => {
        if (quantity < initialQuantity) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex flex-row items-center mb-6 gap-3">
            <h3 className="text-xl text-black font-semibold">Quantity:</h3>
            <div className="flex items-center gap-4">
                <button
                    className="px-4 py-2 bg-gray-300 text-gray-900 font-bold rounded-md hover:bg-gray-400"
                    onClick={handleDecrement}
                >
                    -
                </button>
                <span className="text-2xl text-black font-bold">{quantity}</span>
                <button
                    className="px-4 py-2 bg-gray-300 text-gray-900 font-bold rounded-md hover:bg-gray-400"
                    onClick={handleIncrement}
                >
                    +
                </button>
            </div>
        </div>
    );
}