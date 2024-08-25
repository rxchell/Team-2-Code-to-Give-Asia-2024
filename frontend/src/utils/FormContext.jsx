// FormContext.jsx
import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        foodType: [],
        foodName: '',
        weight: '',
        quantity: '',
        producedDate: '',
        producedTime: '',
        consumeByDate: '',
        consumeByTime: '',
        specialTags: [],
        allergens: [],
        foodPhoto: null,
        collectByDate: '',
        collectByTime: '',
        notes: ''
    });

    const updateFormData = (key, value) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value
        }));
    };

    return (
        <FormContext.Provider value={{ formData, updateFormData }}>
            {children}
        </FormContext.Provider>
    );
};
