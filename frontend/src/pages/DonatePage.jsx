import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../utils/FormContext'
import './form.css';

export default function DonatePage() {
    const navigate = useNavigate();
    const { formData, updateFormData } = useFormContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({formData});
        navigate('/donate/additional-information');
    };

    return (
        <>
        <div className='flex flex-col items-center w-full'>
        <div className='flex items-center space-x-2 mt-4'>
            <p className='text-2xl font-bold'> Donate &gt;&gt; Food Information</p>
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
            <form className='bg-white form-content' onSubmit={handleSubmit}>
                <h2 className='text-2xl font-bold mb-8'>Food Information</h2>
                <div className='justify-between flex'>
                    <label>Type</label>
                    <div className='flex flex-wrap'>
                        <label>
                            <input
                                type="checkbox"
                                value="Cooked food"
                                checked={formData.type.includes('Cooked food')}
                                onChange={(e) => updateFormData('type', 
                                    e.target.checked ? 
                                    [...formData.type, e.target.value] : 
                                    formData.type.filter((item) => item !== e.target.value))}
                            />
                            Cooked food
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Dry food"
                                checked={formData.type.includes('Dry food')}
                                onChange={(e) => updateFormData('type', 
                                    e.target.checked ? 
                                    [...formData.type, e.target.value] : 
                                    formData.type.filter((item) => item !== e.target.value))}
                            />
                            Dry food
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Canned food"
                                checked={formData.type.includes('Canned food')}
                                onChange={(e) => updateFormData('type', 
                                    e.target.checked ? 
                                    [...formData.type, e.target.value] : 
                                    formData.type.filter((item) => item !== e.target.value))}
                            />
                            Canned food
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Fruit"
                                checked={formData.type.includes('Fruit')}
                                onChange={(e) => updateFormData('type', 
                                    e.target.checked ? 
                                    [...formData.type, e.target.value] : 
                                    formData.type.filter((item) => item !== e.target.value))}
                            />
                            Fruit
                        </label>
                    </div>
                </div>

                <div className='justify-between'>
                <label>Food Name</label>
                <input
                    type="text"
                    required="required"
                    placeholder="Please enter the exact food name here"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                />
                </div>

                <div className='justify-between'>
                <label>How Much Food</label>
                <div className='flex justify-between'>
                    <label>
                        Weight (kg)
                        <input
                            type="number"
                            step="0.01"
                            value={formData.weight}
                            onChange={(e) => updateFormData('weight', e.target.value)}
                        />
                    </label>
                    <label>
                        Quantity (servings)
                        <input
                            type="number"
                            required="required"
                            value={formData.servingSize}
                            onChange={(e) => updateFormData('servingSize', e.target.value)}
                        />
                    </label>
                </div>
                </div>
                
                <div>
                <div className='justify-between'>
                <label>Produced Time
                    <input
                                type="datetime-local"
                                required="required"
                                value={formData.producedDateTime}
                                onChange={(e) => updateFormData('producedDateTime', e.target.value)}
                            /> 
                    </label>
                </div>
                

                <div className='justify-between'>
                <label>Consume By
                    <input
                        type="datetime-local"
                        required="required"
                        value={formData.consumeByDate}
                        onChange={(e) => updateFormData('consumeByDateTime', e.target.value)}
                    />
                </label>
                </div>
                </div>
                

                <div className='justify-between'>
                <label>Special Tags</label>
                <div className='flex flex-wrap'>
                    <label>
                        <input
                            type="checkbox"
                            value="Halal"
                            checked={formData.tags.includes('Halal')}
                            onChange={(e) => updateFormData('tags', 
                                    e.target.checked ? 
                                    [...formData.tags, e.target.value] : 
                                    formData.tags.filter((item) => item !== e.target.value))}
                        />
                        Halal
                    </label>
                    
                    <label>
                        <input
                            type="checkbox"
                            value="Vegetarian"
                            checked={formData.tags.includes('Vegetarian')}
                            onChange={(e) => updateFormData('tags', 
                                    e.target.checked ? 
                                    [...formData.tags, e.target.value] : 
                                    formData.tags.filter((item) => item !== e.target.value))}
                        />
                        Vegetarian
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Spicy"
                            checked={formData.tags.includes('Spicy')}
                            onChange={(e) => updateFormData('tags', 
                                    e.target.checked ? 
                                    [...formData.tags, e.target.value] : 
                                    formData.tags.filter((item) => item !== e.target.value))}
                        />
                        Spicy
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Gluten-Free"
                            checked={formData.tags.includes('Gluten-Free')}
                            onChange={(e) => updateFormData('tags', 
                                    e.target.checked ? 
                                    [...formData.tags, e.target.value] : 
                                    formData.tags.filter((item) => item !== e.target.value))}
                        />
                        Gluten-Free
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Low-Sugar"
                            checked={formData.tags.includes('Low-Sugar')}
                            onChange={(e) => updateFormData('tags', 
                                    e.target.checked ? 
                                    [...formData.tags, e.target.value] : 
                                    formData.tags.filter((item) => item !== e.target.value))}
                        />
                        Low-Sugar
                    </label>
                </div>
                </div>
                
                
                <div className='items-center justify-between'>
                    <label>Allergens</label>
                    <div className='flex flex-wrap'>
                    <label>
                        <input
                            type="checkbox"
                            value="Peanut"
                            checked={formData.allergies.includes('Peanut')}
                            onChange={(e) => updateFormData('allergies', 
                                    e.target.checked ? 
                                    [...formData.allergies, e.target.value] : 
                                    formData.allergies.filter((item) => item !== e.target.value))}
                        />
                        Peanut
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Milk"
                            checked={formData.allergies.includes('Milk')}
                            onChange={(e) => updateFormData('allergies', 
                                    e.target.checked ? 
                                    [...formData.allergies, e.target.value] : 
                                    formData.allergies.filter((item) => item !== e.target.value))}
                        />
                        Milk
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Soy"
                            checked={formData.allergies.includes('Soy')}
                            onChange={(e) => updateFormData('allergies', 
                                    e.target.checked ? 
                                    [...formData.allergies, e.target.value] : 
                                    formData.allergies.filter((item) => item !== e.target.value))}
                        />
                        Soy
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Eggs"
                            checked={formData.allergies.includes('Eggs')}
                            onChange={(e) => updateFormData('allergies', 
                                    e.target.checked ? 
                                    [...formData.allergies, e.target.value] : 
                                    formData.allergies.filter((item) => item !== e.target.value))}
                        />
                        Eggs
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Fish"
                            checked={formData.allergies.includes('Fish')}
                            onChange={(e) => updateFormData('allergies', 
                                    e.target.checked ? 
                                    [...formData.allergies, e.target.value] : 
                                    formData.allergies.filter((item) => item !== e.target.value))}
                        />
                        Fish
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Seafood"
                            checked={formData.allergies.includes('Seafood')}
                            onChange={(e) => updateFormData('allergies', 
                                    e.target.checked ? 
                                    [...formData.allergies, e.target.value] : 
                                    formData.allergies.filter((item) => item !== e.target.value))}
                        />
                        Seafood
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Wheat"
                            checked={formData.allergies.includes('Wheat')}
                            onChange={(e) => updateFormData('allergies', 
                                    e.target.checked ? 
                                    [...formData.allergies, e.target.value] : 
                                    formData.allergies.filter((item) => item !== e.target.value))}
                        />
                        Wheat
                    </label>
                </div>
                </div>

                <div className='flex justify-end'>
                    <button className="btn btn-accent" type="submit">
                        Save and Continue
                    </button>
                </div>
                
            </form>
        </div>
        </div>
        </>
    );
};
