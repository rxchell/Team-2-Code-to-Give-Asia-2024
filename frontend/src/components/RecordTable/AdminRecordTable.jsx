import React, { useEffect, useState } from "react";
import AdminFoodDetailsTable from "./AdminFoodDetailsTable";

import FakeTransaction from "../../FakeTransaction";

export default function RecordTable({ allRecords}) {
    const [expandedRow, setExpandedRow] = useState(null);
    const [transactions, setTransactions] = useState([]);

    const toggleRow = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    useEffect(() => {
        setTransactions(allRecords);
    }, [allRecords]);

    if (!transactions) {
        return <p>Loading...</p>;
    }

    return (
        <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="table w-full rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-secondary text-white font-extrabold text-xl">
                        <th className="first:rounded-tl-lg text-center">Order Time</th>
                        <th className="text-center">Donation ID</th>
                        <th className="text-center">Quantity</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Beneficiary ID</th>
                        <th className="last:rounded-tr-lg text-center">Show the details</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((item, index) => (
                        // <React.Fragment key={item.id}>
                        <React.Fragment key={item["orderId"]}>
                            <tr
                                className={`cursor-pointer text-gray-900 font-semibold ${expandedRow === index ? 'bg-[#c5ec97] bg-opacity-50 border-0' : 'bg-white border-b border-gray-400'} hover:bg-[#c5ec97] hover:bg-opacity-50`}
                                onClick={() => toggleRow(index)}
                            >
                                <td className="text-center">{expandedRow !== index ? item["createdAt"] : ""}</td>
                                <td className="text-center">{expandedRow !== index ? item["donationId"] : ""}</td>
                                <td className="text-center">{expandedRow !== index ? item["quantity"] : ""}</td>
                                <td className="text-center">{expandedRow !== index ? item["status"] : ""}</td>
                                <td className="text-center">{expandedRow !== index ? item["userId"] : ""}</td>
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
                                    <td colSpan="6">
                                        <AdminFoodDetailsTable
                                            donationID={item["donationId"]}
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

