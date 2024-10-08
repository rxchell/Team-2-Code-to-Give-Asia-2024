import { useNavigate, Navigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";

export default function CreateNewBeneficiaryPage() {
    const [redirect, setRedirect] = useState(false);
    const [formData, setFormData] = useState({
    name: '',
    password: '',
    area: '',
    address: '',
    postalCode: '',
    quota: '',
    allergy: '',
    contactNumber: '',
    contactEmail: '',
    terms: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    password: '',
    area: '',
    address: '',
    postalCode: '',
    quota: '',
    allergy: '',
    contactNumber: '',
    contactEmail: '',
    terms: '',
  });

  function handleChange(e) {
    const { name, value, type, checked} = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};

    // Basic validation
    Object.keys(formData).forEach(field => {
      if (!formData[field]) {
        newErrors[field] = `${field.replace(/([A-Z])/g, ' $1').toUpperCase()} is required.`;
      }
    });

    if (!formData.terms) {
      newErrors.terms = 'You must agree to the terms and conditions.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Perform registration logic here
      const {
        name,
        password,
        area,
        address,
        postalCode,
        quota,
        allergy,
        contactEmail,
        contactNumber
      } = formData;
      try {
            await axios.post('/registerBeneficiary', {
                name,
                password,
                area,
                address,
                postalCode,
                quota,
                allergy,
                contactEmail,
                contactNumber
            });
            // setUser(data);
            alert('Registration successful!');
            setRedirect(true);
        } catch (error) {
            alert('Registration failed. Please try again.');
        }
      alert('Registration successful!');
    }
  }

  const navigate = useNavigate();
  function handleCancel() {
    navigate("/agency/manage-user");
  }

  if (redirect) {
    return <Navigate to={'/agency/manage-user'} />
}

  return (
    <div className="flex m-6 min-h-screen flex-col">
      <div className="my-4 text-xl font-semibold text-gray-800 mx-auto">
        Manage Beneficiary Accounts &gt;&gt; Create new account
      </div>
      <div className="w-full max-w-3xl p-8 px-12 bg-white rounded shadow-lg mx-auto">
      {/* <div className="w-full max-w-3xl p-8 bg-white rounded shadow-lg"> */}


        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
            <div className="mt-4">
              <div className="flex items-center space-x-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 flex-none">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Please enter the full name of beneficiary"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-64 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div className="flex items-center space-x-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 flex-none">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-64 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              <div className="flex items-center space-x-4">
                <label htmlFor="area" className="block text-sm font-medium text-gray-700 flex-none">
                  Area/ Region
                </label>
                <input
                  type="text"
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-64 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.area && <p className="text-red-500 text-xs mt-1">{errors.area}</p>}
              </div>

              <div className="flex items-center space-x-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 flex-none">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-64 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
              </div>

              <div className = "flex items-center space-x-4">
                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 flex-none">
                  Postal code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-64 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.postalCode && <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>}
              </div>

              <div className = "flex items-center space-x-4">
                <label htmlFor="quota" className="block text-sm font-medium text-gray-700 flex-none">
                  Quota per week
                </label>
                <input
                  type="text"
                  id="quota"
                  name="quota"
                  value={formData.quota}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-64 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.quota && <p className="text-red-500 text-xs mt-1">{errors.quota}</p>}
              </div>

              <div className = "flex items-center space-x-4">
                <label htmlFor="allergy" className="block text-sm font-medium text-gray-700 flex-none">
                  Food allergies
                </label>
                <input
                  type="text"
                  id="allergy"
                  name="allergy"
                  value={formData.allergy}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-64 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.allergy && <p className="text-red-500 text-xs mt-1">{errors.allergy}</p>}
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
            <div className="mt-4">
              <div className = "flex items-center space-x-4">
                <label htmlFor="contactNumber" className="text-sm font-medium text-gray-700 flex-none">
                  Contact number
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className="mt-1 w-64 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>}
              </div>

              <div className="flex items-center space-x-4">
                <label htmlFor="contactEmail" className="text-sm font-medium text-gray-700 flex-none">
                  Contact email
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  required
                  className="mt-1 w-64  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.contactEmail && <p className="text-red-500 text-xs mt-1">{errors.contactEmail}</p>}
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center mt-6">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              checked={formData.terms}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              By clicking, you acknowledge and agree that we may collect, process, and use your personal data in
              accordance with our Privacy Policy. Your continued use of the site constitutes your acceptance of our
              Terms & Conditions.
            </label>
            {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms}</p>}
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="mt-6 flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleCancel}
              className="py-2 px-16 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
            >
              Back
            </button>
            <button
              type="submit"
              className="py-2 px-8 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Create beneficiary account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}