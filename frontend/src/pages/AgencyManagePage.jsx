import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FakeBeneficiaryAccount from '../FakeBeneficiaryAccount';
import AgencyManageTable from '../components/RecordTable/AgencyManageTable';
import { Link } from 'react-router-dom';

export default function AgencyManagePage() {
    const [allRecords, setAllRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     fetchDonorRecords();
    // }, []);

    // const fetchDonorRecords = async () => {
    //     try {
    //         setLoading(true);
    //         const response = await axios.get('/api/donor-records'); 
    //         setDonorRecords(response.data);
    //         setLoading(false);
    //     } catch (err) {
    //         setError('Error fetching donor records. Please try again later.');
    //         setLoading(false);
    //     }
    // };

    // TODO - Fetch all the beneficiary records
    useEffect(() => {
        setAllRecords(FakeBeneficiaryAccount);
        setLoading(false);
    }, []);


    return (
        // <div>
        //     <h1>Donor Records</h1>
        //     {loading && <p>Loading donor records...</p>}
        //     {error && <p style={{ color: 'red' }}>{error}</p>}
        //     {!loading && !error && (
        //         <RecordTable records={donorRecords} />
        //     )}
        // </div>
        <div className='p-4 mx-24 my-8'>
            <h1 className='pb-8 text-3xl text-gray-900 font-bold'>Manage Beneficiary Accounts</h1>
            <Link to={"add-user"} className='flex gap-4 mb-6 text-gray-800 font-semibold'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                </svg>
                <h3 className='my-auto text-lg'>Create new account for beneficiary</h3>
            </Link>
            <AgencyManageTable />
        </div>
    );
};