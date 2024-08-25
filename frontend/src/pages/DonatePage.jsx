// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './form.css';

// export default function DonatePage() {
//     const navigate = useNavigate();
//     const [foodType, setFoodType] = useState([]);
//     const [foodName, setFoodName] = useState('');
//     const [weight, setWeight] = useState('');
//     const [quantity, setQuantity] = useState('');
//     const [producedDate, setProducedDate] = useState('');
//     const [producedTime, setProducedTime] = useState('');
//     const [consumeByDate, setConsumeByDate] = useState('');
//     const [consumeByTime, setConsumeByTime] = useState('');
//     const [specialTags, setSpecialTags] = useState([]);
//     const [allergens, setAllergens] = useState([]);

//     const handleFoodTypeChange = (e) => {
//         const { value, checked } = e.target;
//         setFoodType((prev) =>
//             checked ? [...prev, value] : prev.filter((item) => item !== value)
//         );
//     };

//     const handleSpecialTagsChange = (e) => {
//         const { value, checked } = e.target;
//         setSpecialTags((prev) =>
//             checked ? [...prev, value] : prev.filter((item) => item !== value)
//         );
//     };

//     const handleAllergensChange = (e) => {
//         const { value, checked } = e.target;
//         setAllergens((prev) =>
//             checked ? [...prev, value] : prev.filter((item) => item !== value)
//         );
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log({
//             foodType,
//             foodName,
//             weight,
//             quantity,
//             producedDate,
//             producedTime,
//             consumeByDate,
//             consumeByTime,
//             specialTags,
//             allergens,
//         });
//         navigate('/donate/additional-information');
//     };
    
//     return (
//         <>
//         <div className='flex flex-col items-center w-full'>
//         <div className='flex items-center space-x-2 mt-4'>
//             <p className='text-2xl font-bold'> Donate >> Food Information</p>
//             <div className="dropdown dropdown-end">
//             <div tabIndex={0} role="button" className="btn btn-circle btn-ghost btn-xs text-info">
//                 <svg
//                 tabIndex={0}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 className="h-4 w-4 stroke-current">
//                 <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                 </svg>
//             </div>
//             <div
//                 tabIndex={0}
//                 className="card compact dropdown-content bg-base-100 rounded-box z-[1] w-64 shadow">
//                 <div tabIndex={0} className="card-body">
//                 <h2 className="card-title">Donation Guidelines</h2>
//                 <p>1. The food must not be unsafe and unsuitable at the time it was donated
//                     <br/>
//                     <br/>2. The food donor must inform the recipient of any particular handling requirements to ensure the food remains safe to consume
//                     <br/>
//                     <br/>3. The food donor must inform the recipient of any time limitwithin which the food remains safe and unsuitable
//                     <br/>
//                     <br/>4. The donor must take all reasonable measures to comply with food safety and hygiene requirements up to the point of donation
//                 </p>
//                 </div>
//             </div>
//             </div>
//         </div>
        
        
//         <div className='flex justify-center'>
//             <form className='bg-white form-content' onSubmit={handleSubmit}>
//                 <h2 className='text-2xl font-bold mb-8'>Food Information</h2>
//                 <div className='justify-between'>
//                     <label>Type</label>
//                     <div>
//                         <label>
//                             <input
//                                 type="checkbox"
//                                 value="Cooked food"
//                                 onChange={handleFoodTypeChange}
//                             />
//                             Cooked food
//                         </label>
//                         <label>
//                             <input
//                                 type="checkbox"
//                                 value="Dry food"
//                                 onChange={handleFoodTypeChange}
//                             />
//                             Dry food
//                         </label>
//                         <label>
//                             <input
//                                 type="checkbox"
//                                 value="Canned food"
//                                 onChange={handleFoodTypeChange}
//                             />
//                             Canned food
//                         </label>
//                         <label>
//                             <input
//                                 type="checkbox"
//                                 value="Fruit"
//                                 onChange={handleFoodTypeChange}
//                             />
//                             Fruit
//                         </label>
//                     </div>
//                 </div>

//                 <div className='justify-between'>
//                 <label>Food Name</label>
//                 <input
//                     type="text"
//                     required="required"
//                     placeholder="Please enter the exact food name here"
//                     value={foodName}
//                     onChange={(e) => setFoodName(e.target.value)}
//                 />
//                 </div>
                
//                 <div className='justify-between'>
//                 <label>How Much Food</label>
//                 <div className='flex justify-between'>
//                     <label>
//                         Weight (kg)
//                         <input
//                             type="number"
//                             step="0.01"
//                             value={weight}
//                             onChange={(e) => setWeight(e.target.value)}
//                         />
//                     </label>
//                     <label>
//                         Quantity (servings)
//                         <input
//                             type="number"
//                             required="required"
//                             value={quantity}
//                             onChange={(e) => setQuantity(e.target.value)}
//                         />
//                     </label>
//                 </div>
//                 </div>
                

//                 <div className='justify-between'>
//                 <label>Produced Time</label>
//                 <div>
//                     <label>
//                         Date
//                         <input
//                             type="date"
//                             required="required"
//                             value={producedDate}
//                             onChange={(e) => setProducedDate(e.target.value)}
//                         />
//                     </label>
//                     <label>
//                         Time
//                         <input
//                             type="time"
//                             required="required"
//                             value={producedTime}
//                             onChange={(e) => setProducedTime(e.target.value)}
//                         />
//                     </label>
//                 </div>
//                 </div>
                

//                 <div className='justify-between'>
//                 <label>Consume By</label>
//                 <div>
//                     <label>
//                         Date
//                         <input
//                             type="date"
//                             required="required"
//                             value={consumeByDate}
//                             onChange={(e) => setConsumeByDate(e.target.value)}
//                         />
//                     </label>
//                     <label>
//                         Time
//                         <input
//                             type="time"
//                             required="required"
//                             value={consumeByTime}
//                             onChange={(e) => setConsumeByTime(e.target.value)}
//                         />
//                     </label>
//                 </div>
//                 </div>
                
//                 <div className='justify-between'>
//                 <label>Special Tags</label>
//                 <div>
//                     <label>
//                         <input
//                             type="checkbox"
//                             value="Halal"
//                             onChange={handleSpecialTagsChange}
//                         />
//                         Halal
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             value="Vegetarian"
//                             onChange={handleSpecialTagsChange}
//                         />
//                         Vegetarian
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             value="Spicy"
//                             onChange={handleSpecialTagsChange}
//                         />
//                         Spicy
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             value="Gluten-Free"
//                             onChange={handleSpecialTagsChange}
//                         />
//                         Gluten-Free
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             value="Low-Sugar"
//                             onChange={handleSpecialTagsChange}
//                         />
//                         Low-Sugar
//                     </label>
//                 </div>
//                 </div>
                
                
//                 <div className='items-center justify-between'>
//                     <label>Allergens</label>
//                     <div>
//                     <label>
//                         <input
//                             type="checkbox"
//                             value="Peanut"
//                             onChange={handleAllergensChange}
//                         />
//                         Peanut
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             value="Milk"
//                             onChange={handleAllergensChange}
//                         />
//                         Milk
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             value="Soy"
//                             onChange={handleAllergensChange}
//                         />
//                         Soy
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             value="Eggs"
//                             onChange={handleAllergensChange}
//                         />
//                         Eggs
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             value="Fish"
//                             onChange={handleAllergensChange}
//                         />
//                         Fish
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             value="Seafood"
//                             onChange={handleAllergensChange}
//                         />
//                         Seafood
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             value="Wheat"
//                             onChange={handleAllergensChange}
//                         />
//                         Wheat
//                     </label>
//                 </div>
//                 </div>
                
//                 <div className='flex justify-end'>
//                     <button className="btn btn-accent" type="submit">
//                         Save and Continue</button>
//                 </div>
                
//             </form>
//         </div>
        
//         </div>
//         </>
//     );
// };

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
            <p className='text-2xl font-bold'> Donate >> Food Information</p>
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
                <div className='justify-between'>
                    <label>Type</label>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                value="Cooked food"
                                checked={formData.foodType.includes('Cooked food')}
                                onChange={(e) => updateFormData('foodType', 
                                    e.target.checked ? 
                                    [...formData.foodType, e.target.value] : 
                                    formData.foodType.filter((item) => item !== e.target.value))}
                            />
                            Cooked food
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Dry food"
                                checked={formData.foodType.includes('Dry food')}
                                onChange={(e) => updateFormData('foodType', 
                                    e.target.checked ? 
                                    [...formData.foodType, e.target.value] : 
                                    formData.foodType.filter((item) => item !== e.target.value))}
                            />
                            Dry food
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Canned food"
                                checked={formData.foodType.includes('Canned food')}
                                onChange={(e) => updateFormData('foodType', 
                                    e.target.checked ? 
                                    [...formData.foodType, e.target.value] : 
                                    formData.foodType.filter((item) => item !== e.target.value))}
                            />
                            Canned food
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Fruit"
                                checked={formData.foodType.includes('Fruit')}
                                onChange={(e) => updateFormData('foodType', 
                                    e.target.checked ? 
                                    [...formData.foodType, e.target.value] : 
                                    formData.foodType.filter((item) => item !== e.target.value))}
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
                    value={formData.foodName}
                    onChange={(e) => updateFormData('foodName', e.target.value)}
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
                            value={formData.quantity}
                            onChange={(e) => updateFormData('quantity', e.target.value)}
                        />
                    </label>
                </div>
                </div>
                
                <div className='justify-between'>
                <label>Produced Time</label>
                <div>
                    <label>
                        Date
                        <input
                            type="date"
                            required="required"
                            value={formData.producedDate}
                            onChange={(e) => updateFormData('producedDate', e.target.value)}
                        />
                    </label>
                    <label>
                        Time
                        <input
                            type="time"
                            required="required"
                            value={formData.producedTime}
                            onChange={(e) => updateFormData('producedTime', e.target.value)}
                        />
                    </label>
                </div>
                </div>
                

                <div className='justify-between'>
                <label>Consume By</label>
                <div>
                    <label>
                        Date
                        <input
                            type="date"
                            required="required"
                            value={formData.consumeByDate}
                            onChange={(e) => updateFormData('consumeByDate', e.target.value)}
                        />
                    </label>
                    <label>
                        Time
                        <input
                            type="time"
                            required="required"
                            value={formData.consumeByTime}
                            onChange={(e) => updateFormData('consumeByTime', e.target.value)}
                        />
                    </label>
                </div>
                </div>

                <div className='justify-between'>
                <label>Special Tags</label>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            value="Halal"
                            checked={formData.specialTags.includes('Halal')}
                            onChange={(e) => updateFormData('specialTags', 
                                    e.target.checked ? 
                                    [...formData.specialTags, e.target.value] : 
                                    formData.specialTags.filter((item) => item !== e.target.value))}
                        />
                        Halal
                    </label>
                    
                    <label>
                        <input
                            type="checkbox"
                            value="Vegetarian"
                            checked={formData.specialTags.includes('Vegetarian')}
                            onChange={(e) => updateFormData('specialTags', 
                                    e.target.checked ? 
                                    [...formData.specialTags, e.target.value] : 
                                    formData.specialTags.filter((item) => item !== e.target.value))}
                        />
                        Vegetarian
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Spicy"
                            checked={formData.specialTags.includes('Spicy')}
                            onChange={(e) => updateFormData('specialTags', 
                                    e.target.checked ? 
                                    [...formData.specialTags, e.target.value] : 
                                    formData.specialTags.filter((item) => item !== e.target.value))}
                        />
                        Spicy
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Gluten-Free"
                            checked={formData.specialTags.includes('Gluten-Free')}
                            onChange={(e) => updateFormData('specialTags', 
                                    e.target.checked ? 
                                    [...formData.specialTags, e.target.value] : 
                                    formData.specialTags.filter((item) => item !== e.target.value))}
                        />
                        Gluten-Free
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Low-Sugar"
                            checked={formData.specialTags.includes('Low-Sugar')}
                            onChange={(e) => updateFormData('specialTags', 
                                    e.target.checked ? 
                                    [...formData.specialTags, e.target.value] : 
                                    formData.specialTags.filter((item) => item !== e.target.value))}
                        />
                        Low-Sugar
                    </label>
                </div>
                </div>
                
                
                <div className='items-center justify-between'>
                    <label>Allergens</label>
                    <div>
                    <label>
                        <input
                            type="checkbox"
                            value="Peanut"
                            checked={formData.allergens.includes('Peanut')}
                            onChange={(e) => updateFormData('allergens', 
                                    e.target.checked ? 
                                    [...formData.specialTags, e.target.value] : 
                                    formData.specialTags.filter((item) => item !== e.target.value))}
                        />
                        Peanut
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Milk"
                            checked={formData.allergens.includes('Milk')}
                            onChange={(e) => updateFormData('allergens', 
                                    e.target.checked ? 
                                    [...formData.specialTags, e.target.value] : 
                                    formData.specialTags.filter((item) => item !== e.target.value))}
                        />
                        Milk
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Soy"
                            checked={formData.allergens.includes('Soy')}
                            onChange={(e) => updateFormData('allergens', 
                                    e.target.checked ? 
                                    [...formData.specialTags, e.target.value] : 
                                    formData.specialTags.filter((item) => item !== e.target.value))}
                        />
                        Soy
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Eggs"
                            checked={formData.allergens.includes('Eggs')}
                            onChange={(e) => updateFormData('allergens', 
                                    e.target.checked ? 
                                    [...formData.specialTags, e.target.value] : 
                                    formData.specialTags.filter((item) => item !== e.target.value))}
                        />
                        Eggs
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Fish"
                            checked={formData.allergens.includes('Fish')}
                            onChange={(e) => updateFormData('allergens', 
                                    e.target.checked ? 
                                    [...formData.specialTags, e.target.value] : 
                                    formData.specialTags.filter((item) => item !== e.target.value))}
                        />
                        Fish
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Seafood"
                            checked={formData.allergens.includes('Seafood')}
                            onChange={(e) => updateFormData('allergens', 
                                    e.target.checked ? 
                                    [...formData.specialTags, e.target.value] : 
                                    formData.specialTags.filter((item) => item !== e.target.value))}
                        />
                        Seafood
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Wheat"
                            checked={formData.allergens.includes('Wheat')}
                            onChange={(e) => updateFormData('allergens', 
                                    e.target.checked ? 
                                    [...formData.specialTags, e.target.value] : 
                                    formData.specialTags.filter((item) => item !== e.target.value))}
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
