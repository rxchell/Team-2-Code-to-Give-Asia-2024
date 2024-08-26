import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DonorRecordTable from '../components/RecordTable/DonorRecordTable';
import FakeTransaction from '../FakeTransaction';
import FakeFoodDonation from '../FakeFoodDonation';

export default function DonorRecordPage() {
    const [donorRecords, setDonorRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // For fetching donor records from the backend -- TODO
    // useEffect(() => {
    //     const fetchDonorRecords = async () => {
    //         try {
    //             setLoading(true);
    //             const response = await axios.get('/api/donor-records'); 
    //             setDonorRecords(response.data);
    //             setLoading(false);
    //         } catch (err) {
    //             setError('Error fetching donor records. Please try again later.');
    //             setLoading(false);
    //         }
    //     };

    //     fetchDonorRecords();
    // }, []);


    const fetchDonorRecords = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/api/donor-records'); 
            setDonorRecords(response.data);
            setLoading(false);
        } catch (err) {
            setError('Error fetching donor records. Please try again later.');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDonorRecords();
    }, []);


    // useEffect(() => {
    //     // setDonorRecords(FakeFoodDonation);
    //     setDonorRecords(FakeTransaction);
    //     setLoading(false);
    // }, []);

    console.log(donorRecords);

    return (
        <div className='p-4 mx-24 my-8'>
            <h1 className='pb-8 text-3xl text-gray-900 font-bold'>Home - Donor Records</h1>
            {loading && <p>Loading donor records...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {!loading && !error && (
                <DonorRecordTable donorRecords={donorRecords} />
            )}
        </div>
        // <div className='p-4 mx-24 my-8'>
        //     <h1 className='pb-8 text-3xl text-gray-900 font-bold'>Home - Donor Records</h1>
        //     <DonorRecordTable donorRecords={donorRecords} />
        // </div>
    );
}