import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    additionalNotes: "",
    allergies: [],
    collectBy: "",
    closeAt: "",
    collectionAddress: "",
    consumedBy: "",
    donorContact: "",
    imageURL: "",
    name: "",
    openAt: "",
    producedDatetime: "",
    region: "",
    servingSize: "",
    storeReheatInstructions: "",
    tags: [],
    type: "",
    weight: "",
  });

  const updateFormData = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
