import React, { useState } from "react";
import axios from "axios";

export default function RequestButton({ quantity }) {
    const [showAlert, setShowAlert] = useState(false);

    async function handleRequest() {
        setShowAlert(true);

        try {
            const response = await axios.post("http://localhost:3000/api/orders/SpcKIGZ56HV8pLq5BwStEA2gWBg1", {
                donationId: "3JLMq7WL37IgxLYieQQ8",
                quantity: quantity,
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }

        setTimeout(() => setShowAlert(false), 2000);
    }

        // axios.post("http://localhost:3000/api/orders/SpcKIGZ56HV8pLq5BwStEA2gWBg1", {
        //     donationId: "3JLMq7WL37IgxLYieQQ8",
        //     quantity: 5,
        // }).then (response => {
        //     console.log(response.data);
        // })

    return (
        <>
            {showAlert && (
                <div className="fixed top-8 right-12 z-50">
                    <div role="alert" className="alert alert-success flex items-center p-2 bg-green-100 border border-green-400 text-green-700 rounded-lg shadow-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 shrink-0 stroke-current mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>Your request has been confirmed!</span>
                    </div>
                </div>
            )}
            <div className="flex justify-center mb-6">
                <button
                    className="py-2 px-6 text-white font-bold rounded-md bg-secondary bg-opacity-80 hover:bg-opacity-100 transition-colors duration-300 border-0"
                    onClick={handleRequest}
                >
                    Request for this food
                </button>
            </div>
        </>
    );
}