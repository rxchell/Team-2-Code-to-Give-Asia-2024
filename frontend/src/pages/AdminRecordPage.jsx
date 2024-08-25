import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminRecordTable from '../components/RecordTable/AdminRecordTable';
import FakeTransaction from '../FakeTransaction';

export default function AdminRecordPage() {
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
    useEffect(() => {
        const fetchAllOrders = async () => {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:3000/api/orders/admin/getAll");
                let jsonData = await response.json();
                const dataArray = [];

                jsonData.forEach((item) => {
                    const key = Object.keys(item)[0];
                    // console.log(`key is ${key}`);
                    const itemData = item[key];
                    dataArray.push({
                        orderId: key, 
                        ...itemData
                    });
                    // console.log(itemData);
                });






                setAllRecords(dataArray);
                setLoading(false);
            } catch (err) {
                setError('An error occurred while fetching the data. Please try again later.');
                setLoading(false);
            }
        };

        fetchAllOrders();
    }, []);

    // useEffect(() => {
    //     setAllRecords(FakeTransaction);
    //     setLoading(false);
    // }, []);

    console.log(allRecords);

    return (
        <div className='p-4 mx-24 my-8'>
            <h1 className='pb-8 text-3xl text-gray-900 font-bold'>Home - Admin Records</h1>

            {loading && <p>Loading donor records...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {!loading && !error && (
                <AdminRecordTable allRecords={allRecords} />
            )}
        </div>
    );
};