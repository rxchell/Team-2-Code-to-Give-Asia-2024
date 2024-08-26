import React, { useState } from "react";

export default function QuantityCounter({ quantity, setQuantity, initialQuantity }) {        
    
    const handleIncrement = () => {
        if (quantity < initialQuantity) {
            // setQuantity(quantity + 1);
            // setQuantity(quantity => quantity + 1);
            setQuantity(quantity => {
                const newQuantity = quantity + 1;
                console.log(`Incremented quantity to ${newQuantity}`);
                return newQuantity;
            })
            // console.log(`Incremented quantity to ${quantity}`);
        }
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            // setQuantity(quantity - 1);
            setQuantity(quantity => quantity - 1);
            console.log(`Decremented quantity to ${quantity}`);
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
                <span className="text-2xl text-black font-bold text-center">{quantity}</span>
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