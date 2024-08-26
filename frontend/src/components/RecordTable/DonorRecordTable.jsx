import React, { useEffect, useState } from "react";
import DonorFoodDetailsTable from "./DonorFoodDetailsTable";
import axios from 'axios';
import FakeTransaction from "../../FakeTransaction";
import FakeFoodDonation from "../../FakeFoodDonation";

export default function DonorRecordTable({ donorRecords }) {
    const [expandedRow, setExpandedRow] = useState(null);
    const [transactions, setTransactions] = useState([]);

    const toggleRow = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    
    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get('/api/donations/user'); 
                // console.log(response.data)
                const data = response.data;
                setTransactions(data);
            } catch (error) {
                console.log(error.response.data)
                alert(error.response.data.error);
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactions();
    }, []);

    console.log(transactions)
    return (
        <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="table w-full rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-secondary text-white font-extrabold text-xl">
                        <th className="first:rounded-tl-lg text-center">Donation ID</th>
                        <th className="text-center">Food</th>
                        <th className="text-center">Quantity</th>
                        <th className="last:rounded-tr-lg text-center">Show details</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.length > 0 ? transactions.map((item, index) => {
                        let obj = Object.keys(item)[0];
                        console.log(item[obj]);
                        return (
                            <React.Fragment key={index}>    
                            <tr
                                className={`cursor-pointer text-gray-900 font-semibold ${expandedRow === index ? 'bg-[#c5ec97] bg-opacity-50 border-0' : 'bg-white border-b border-gray-400'} hover:bg-[#c5ec97] hover:bg-opacity-50`}
                                onClick={() => toggleRow(index)}
                            >

                                <td className="text-center">{expandedRow !== index ? new Date(item[obj].producedDatetime).toLocaleTimeString() : ""}</td>
                                <td className="text-center">{expandedRow !== index ? item[obj].name : ""}</td>
                                <td className="text-center">{expandedRow !== index ? item[obj].servingSize : ""}</td>
                                {/* <td className="text-center">{expandedRow !== index ? item["donationID"] : ""}</td>
                                <td className="text-center">{expandedRow !== index ? item["name"] : ""}</td>
                                <td className="text-center">{expandedRow !== index ? item["servingSize"] : ""}</td> */}
                                <td className="text-center">{expandedRow !== index ? item.id : ""}</td>
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
                                            donationID={item[obj].donationID}
                                            producedDatetime={new Date(item[obj].producedDatetime).toLocaleString()}
                                            name={item[obj].name}
                                            type={item[obj].type}
                                            servingSize={item[obj].servingSize}
                                            region={item[obj].region}
                                            consumedBy={new Date(item[obj].consumedBy).toLocaleString()}
                                            tags={item[obj].tags}
                                            allergies={item[obj].allergies}
                                            collectionAddress={item[obj].collectionAddress}
                                            collectBy={new Date(item[obj].collectBy).toLocaleString()}
                                            storeReheatInstructions={item[obj].storeReheatInstructions}
                                            additionalNotes={item[obj].additionalNotes}
                                        />
                                    </td>
                                </tr>
                            )}
                            </React.Fragment>
                        )
                    }): 
                    <h1>Loading...</h1>
                    }
                </tbody>
            </table>
        </div>
    );
}

