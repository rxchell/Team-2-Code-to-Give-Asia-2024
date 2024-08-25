import React, { useState } from "react";

// import AdminFoodDetailsTable from "./AdminFoodDetailsTable";

import FakeBeneficiaryAccount from "../../FakeBeneficiaryAccount.js";
import { Link } from "react-router-dom";

export default function AgencyManageTable() {
    const [expandedRow, setExpandedRow] = useState(null);

    const toggleRow = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    // Temporary transaction data
    const data = FakeBeneficiaryAccount;

    // TODO - Replace with actual fetch request

    return (
        <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="table w-full rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-secondary text-white font-extrabold text-xl">
                        <th className="first:rounded-tl-lg text-center">User ID</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Contact Number</th>
                        <th className="text-center">Weekly Quota</th>
                        <th className="text-center">Remaining Quota</th>
                        <th className="last:rounded-tr-lg text-center">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <React.Fragment key={item.userID}>
                            <tr
                                className={`cursor-pointer text-gray-900 text-lg font-semibold ${expandedRow === index ? 'bg-[#c5ec97] bg-opacity-50 border-0' : 'bg-white border-b border-gray-400'} hover:bg-[#c5ec97] hover:bg-opacity-50`}
                                onClick={() => toggleRow(index)}
                            >
                                {/* <td className="text-center">{expandedRow !== index ? item.time : ""}</td>
                                <td className="text-center">{expandedRow !== index ? item.foodName : ""}</td>
                                <td className="text-center">{expandedRow !== index ? item.quantity : ""}</td>
                                <td className="text-center">{expandedRow !== index ? item.donor : ""}</td>
                                <td className="text-center">{expandedRow !== index ? item.beneficiary : ""}</td>
                                <td className="text-center">{expandedRow !== index ? item.status : ""}</td> */}
                                <td className="text-center">{item.userID}</td>
                                <td className="text-center">{item.name}</td>
                                <td className="text-center">{item.contactNumber}</td>
                                <td className="text-center">{item.weeklyQuota}</td>
                                <td className="text-center">{item.remainingQuota}</td>
                                <td className="flex justify-center" onClick={() => toggleRow(index)}>
                                    <Link to={`add-user/${item.userID}`}> 
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                                        </svg>
                                    </Link>
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

