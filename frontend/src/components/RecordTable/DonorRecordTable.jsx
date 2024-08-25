import React, { useEffect, useState } from "react";
import DonorFoodDetailsTable from "./DonorFoodDetailsTable";

import FakeTransaction from "../../FakeTransaction";

export default function DonorRecordTable() {
    const [expandedRow, setExpandedRow] = useState(null);
    const [transactions, setTransactions] = useState([]);

    const toggleRow = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    // TODO - Replace with actual user data (Key Yew)
    let user = {
        name: "Local Bakery"
    }

    // Fetch all transaction data and filter by donor
    const allData = FakeTransaction;
    const data = allData.filter((item) => item.donor === user.name);
    useEffect(() => {
        setTransactions(data);
    }, [user.name]);

    // TODO - Replace with actual fetch request
    // Use donorRoute by passing in the userID

    
    // useEffect(() => {
    //     const fetchTransactions = async () => {
    //         try {
    //             const response = await fetch('http://localhost:3000/api/donations/getall');
    //             const data = await response.json();
    //             setTransactions(data.filter((item) => item.donor === user.name));
    //         } catch (error) {
    //             console.error('Error fetching transactions:', error);
    //             alert('Error fetching transactions');
    //         }
    //     };

    //     fetchTransactions();
    // }, [user.name]);

    return (
        <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="table w-full rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-secondary text-white font-extrabold text-xl">
                        <th className="first:rounded-tl-lg text-center">Time</th>
                        <th className="text-center">Food</th>
                        <th className="text-center">Quantity</th>
                        <th className="text-center">Beneficiary</th>
                        <th className="text-center">Contact</th>
                        <th className="text-center">Status</th>
                        <th className="last:rounded-tr-lg text-center">Show the details</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((item, index) => (
                        <React.Fragment key={item.id}>
                            <tr
                                className={`cursor-pointer text-gray-900 font-semibold ${expandedRow === index ? 'bg-[#c5ec97] bg-opacity-50 border-0' : 'bg-white border-b border-gray-400'} hover:bg-[#c5ec97] hover:bg-opacity-50`}
                                onClick={() => toggleRow(index)}
                            >
                                <td className="text-center">{expandedRow !== index ? item.time : ""}</td>
                                <td className="text-center">{expandedRow !== index ? item.foodName : ""}</td>
                                <td className="text-center">{expandedRow !== index ? item.quantity : ""}</td>
                                <td className="text-center">{expandedRow !== index ? item.beneficiary : ""}</td>
                                <td className="text-center">{expandedRow !== index ? item.beneficiaryContact : ""}</td>
                                <td className="text-center">{expandedRow !== index ? item.status : ""}</td>
                                {/* <td className="text-center">{item.time}</td>
                                <td className="text-center">{item.foodName}</td>
                                <td className="text-center">{item.quantity}</td>
                                <td className="text-center">{item.beneficiary}</td>
                                <td className="text-center">{item.beneficiaryContact}</td>
                                <td className="text-center">{item.status}</td> */}
                                <td className="text-center" onClick={() => toggleRow(index)}>
                                    <svg
                                        className={`w-6 h-6 inline-block transition-transform duration-200 ${expandedRow === index ? 'transform rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </td>
                            </tr>
                            {expandedRow === index && (
                                <tr className="bg-[#c5ec97] bg-opacity-50">
                                    <td colSpan="7">
                                        <DonorFoodDetailsTable
                                            requestID={item.id}
                                            requestTime={item.time}
                                            foodName={item.foodName}
                                            foodCategory={item.foodCategory}
                                            quantity={item.quantity}
                                            producedAt={item.producedAt}
                                            consumedBy={item.consumedBy}
                                            foodTags={item.foodTags}
                                            allergens={item.allergens}
                                            collectionAddress={item.collectionAddress}
                                            beneficiary={item.beneficiary}
                                            beneficiaryContact={item.beneficiaryContact}
                                            status={item.status}
                                            operatingHours={item.operatingHours}
                                            handleFood={item.handleFood}
                                            additionalNotes={item.additionalNotes}
                                        />
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

