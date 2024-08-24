import React, { useState } from 'react';
import './form.css';

export default function DonatePage() {
    const [foodType, setFoodType] = useState([]);
    const [foodName, setFoodName] = useState('');
    const [weight, setWeight] = useState('');
    const [quantity, setQuantity] = useState('');
    const [producedDate, setProducedDate] = useState('');
    const [producedTime, setProducedTime] = useState('');
    const [consumeByDate, setConsumeByDate] = useState('');
    const [consumeByTime, setConsumeByTime] = useState('');
    const [specialTags, setSpecialTags] = useState([]);
    const [allergens, setAllergens] = useState([]);

    const handleFoodTypeChange = (e) => {
        const { value, checked } = e.target;
        setFoodType((prev) =>
            checked ? [...prev, value] : prev.filter((item) => item !== value)
        );
    };

    const handleSpecialTagsChange = (e) => {
        const { value, checked } = e.target;
        setSpecialTags((prev) =>
            checked ? [...prev, value] : prev.filter((item) => item !== value)
        );
    };

    const handleAllergensChange = (e) => {
        const { value, selected } = e.target;
        setAllergens(
            Array.from(e.target.selectedOptions, (option) => option.value)
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({
            foodType,
            foodName,
            weight,
            quantity,
            producedDate,
            producedTime,
            consumeByDate,
            consumeByTime,
            specialTags,
            allergens,
        });
    };
    
    return (
        <>
        <p>Donate >> Food Information</p>
        <form className='bg-white ' onSubmit={handleSubmit}>
            <h2>Food Information</h2>
            <div>
                <label>Type</label>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            value="Cooked food"
                            onChange={handleFoodTypeChange}
                        />
                        Cooked food
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Dry food"
                            onChange={handleFoodTypeChange}
                        />
                        Dry food
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Canned food"
                            onChange={handleFoodTypeChange}
                        />
                        Canned food
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Fruit"
                            onChange={handleFoodTypeChange}
                        />
                        Fruit
                    </label>
                </div>
            </div>

            <label>Food Name</label>
            <input
                type="text"
                placeholder="Please enter the exact food name here"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
            />

            <label>How Much Food</label>
            <div>
                <label>
                    Weight (kg)
                    <input
                        type="number"
                        step="0.01"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </label>
                <label>
                    Quantity (servings)
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </label>
            </div>

            <label>Produced Time</label>
            <div>
                <label>
                    Date
                    <input
                        type="date"
                        value={producedDate}
                        onChange={(e) => setProducedDate(e.target.value)}
                    />
                </label>
                <label>
                    Time
                    <input
                        type="time"
                        value={producedTime}
                        onChange={(e) => setProducedTime(e.target.value)}
                    />
                </label>
            </div>

            <label>Consume By</label>
            <div>
                <label>
                    Date
                    <input
                        type="date"
                        value={consumeByDate}
                        onChange={(e) => setConsumeByDate(e.target.value)}
                    />
                </label>
                <label>
                    Time
                    <input
                        type="time"
                        value={consumeByTime}
                        onChange={(e) => setConsumeByTime(e.target.value)}
                    />
                </label>
            </div>

            <label>Special Tags</label>
            <div>
                <label>
                    <input
                        type="checkbox"
                        value="Halal"
                        onChange={handleSpecialTagsChange}
                    />
                    Halal
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="Vegetarian"
                        onChange={handleSpecialTagsChange}
                    />
                    Vegetarian
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="Spicy"
                        onChange={handleSpecialTagsChange}
                    />
                    Spicy
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="Others"
                        onChange={handleSpecialTagsChange}
                    />
                    Others (please specify)
                </label>
            </div>

            <label>Allergens</label>
            <select
                multiple
                value={allergens}
                onChange={handleAllergensChange}
            >
                <option value="Egg">Egg</option>
                <option value="Dairy">Dairy</option>
                <option value="Nuts">Nuts</option>
                <option value="Soy">Soy</option>
            </select>

            <button type="submit">Submit</button>
        </form>
        </>
        
    );
};

