import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        type: [],
        name: '',
        weight: '',
        servingSize: '',
        producedDateTime: '',
        consumeByDateTime: '',
        tags: [],
        allergies: [],
        imageURL: '',
        collectBy: '',
        otherNotes: '',
        storeReheatInstructions: ''
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
