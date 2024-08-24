import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './form.css';

export default function AdditionalInfoPage() {
    const navigate = useNavigate();
    const [foodPhoto, setFoodPhoto] = useState(null);
    const [collectByDate, setCollectByDate] = useState('');
    const [collectByTime, setCollectByTime] = useState('');
    const [notes, setNotes] = useState('');

    const handleFoodPhotoChange = (e) => {
        const file = e.target.files[0];
        setFoodPhoto(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({
            foodPhoto,
            collectByDate,
            collectByTime,
            notes,
        });
        navigate('/')
    };
    
    return (
        <>
        <div className='flex flex-col items-center w-full'>
        <div className='flex items-center space-x-2 mt-4'>
            <p className='text-2xl font-bold'> Donate >> Food Information >> Additional Information</p>
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-circle btn-ghost btn-xs text-info">
                <svg
                tabIndex={0}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-4 w-4 stroke-current">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>
            <div
                tabIndex={0}
                className="card compact dropdown-content bg-base-100 rounded-box z-[1] w-64 shadow">
                <div tabIndex={0} className="card-body">
                <h2 className="card-title">Donation Guidelines</h2>
                <p>1. The food must not be unsafe and unsuitable at the time it was donated
                    <br/>
                    <br/>2. The food donor must inform the recipient of any particular handling requirements to ensure the food remains safe to consume
                    <br/>
                    <br/>3. The food donor must inform the recipient of any time limitwithin which the food remains safe and unsuitable
                    <br/>
                    <br/>4. The donor must take all reasonable measures to comply with food safety and hygiene requirements up to the point of donation
                </p>
                </div>
            </div>
            </div>
        </div>
        
        
        <div className='flex justify-center'>
            <form className='bg-white form-content space-y-4' onSubmit={handleSubmit}>
                <h2 className='text-2xl font-bold mb-8'>Additional Information</h2>
                <div className='justify-between'>
                    <label>Upload photo of meal</label>
                    <div>
                        <input
                        type="file"
                        required="required"
                        accept="image/*"
                        onChange={handleFoodPhotoChange}
                        />
                    </div>
                </div>
                

                <div className='justify-between'>
                <label>Collect By</label>
                <div>
                    <label>
                        Date
                        <input
                            type="date"
                            required="required"
                            value={collectByDate}
                            onChange={(e) => setCollectByDate(e.target.value)}
                        />
                    </label>
                    <label>
                        Time
                        <input
                            type="time"
                            required="required"
                            value={collectByTime}
                            onChange={(e) => setCollectByTime(e.target.value)}
                        />
                    </label>
                </div>
                </div>
                
                <div className='justify-between'>
                <label>Additional Notes</label>
                <input
                    type="text"
                    placeholder="Please enter any other notes here"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
                </div>
                
                <div className="form-control">
                    <label className="cursor-pointer label">
                        <input 
                        type="checkbox" 
                        className="checkbox checkbox-warning" 
                        required="required"/>
                        <span className="label-text">By clicking here, I am aware and confirm to have complied with the food safety and requirements.</span>
                    </label>
                </div>
                
                <div className='flex justify-end space-x-6'>
                    <Link to='/donate'>
                        <button className="btn" type="button">Back</button>
                    </Link> 
                    <button className="btn btn-accent" type="submit">Submit</button>
                </div>
            </form>
        </div>
        </div>
        </>
    );
};
