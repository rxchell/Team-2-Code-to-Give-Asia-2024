import React from "react";

export default function RequestButton() {
    const handleRequest = () => {
        // Handle the request logic here
        alert("Request submitted!");
    };

    return (
        <div className="flex justify-center mb-6">
            <button
                className="py-2 px-6 text-white font-bold rounded-md bg-secondary bg-opacity-80 hover:bg-opacity-100 transition-colors duration-300 border-0"
                onClick={handleRequest}
            >
                Request for this food
            </button>
        </div>
    );
}