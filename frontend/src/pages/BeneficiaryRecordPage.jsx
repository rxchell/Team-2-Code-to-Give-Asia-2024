import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeneficiaryRecordTable from '../components/RecordTable/BeneficiaryRecordTable';
import FakeTransaction from '../FakeTransaction';

export default function BeneficiaryRecordPage() {
    const [beneficiaryRecords, setBeneficiaryRecords] = useState([]);
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

    useEffect(() => {
        setBeneficiaryRecords(FakeTransaction);
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
            <h1 className='pb-8 text-3xl text-gray-900 font-bold'>Request Records</h1>
            <BeneficiaryRecordTable />
        </div>
    );
}