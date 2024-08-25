import { Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


export default function CreateNewBeneficiaryPage() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    area: '',
    address: '',
    postalCode: '',
    quotaPerWeek: '',
    foodAllergy: '',
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
    quotaPerWeek: '',
    foodAllergy: '',
    contactNumber: '',
    contactEmail: '',
    terms: '',
  });

  const [popupAccepted, setPopupAccepted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};

    if (!formData.terms) {
      newErrors.terms = 'You must agree to the terms and conditions.';
    }


    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Perform registration logic here
    //   try {
    //     await axios.post('/register', {
    //         organisationName,
    //         password,
    //         area,
    //         address,
    //         postalCode,
    //         quotaPerWeek,
    //         foodAllergy,
    //         contactNumber,
    //         contactEmail,
    //     });
    //     // alert('Registration successful! You can log in now.');
    //     // toast('🦄 Wow so easy!', {
    //     //     position: "top-right",
    //     //     autoClose: 5000,
    //     //     hideProgressBar: false,
    //     //     closeOnClick: true,
    //     //     pauseOnHover: true,
    //     //     draggable: true,
    //     //     progress: undefined,
    //     //     theme: "light",
    //     //     transition: Bounce,
    //     // });
    // } catch (error) {
    //     alert('Registration failed. Please try again.');
    // }
    //   alert('Registration successful!');
    }
  }
  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-50">
      <div className="w-full max-w-3xl p-8 bg-white rounded shadow-lg">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">Create New Beneficiary</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information Section */}
          <div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="organisationName" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.organisationName && <p className="text-red-500 text-xs mt-1">{errors.organisationName}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              <div>
                <label htmlFor="area" className="block text-sm font-medium text-gray-700">
                  Area/ Region
                </label>
                <input
                  type="text"
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.area && <p className="text-red-500 text-xs mt-1">{errors.area}</p>}
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
              </div>

              <div>
                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                  Postal code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.postalCode && <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>}
              </div>

              <div>
                <label htmlFor="operationHour" className="block text-sm font-medium text-gray-700">
                  Quota for each week
                </label>
                <input
                  type="text"
                  id="quotaPerWeek"
                  name="quotaPerWeek"
                  value={formData.quotaPerWeek}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.operationHour && <p className="text-red-500 text-xs mt-1">{errors.operationHour}</p>}
              </div>

              <div>
                <label htmlFor="entityNature" className="block text-sm font-medium text-gray-700">
                  Food Allergy Information
                </label>
                <textarea
                  id="foodAllergy"
                  name="foodAllergy"
                  value={formData.foodAllergy}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.entityNature && <p className="text-red-500 text-xs mt-1">{errors.entityNature}</p>}
              </div>

            </div>
          </div>

          <div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div>
                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                  Contact number
                </label>
                <input
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>}
              </div>

              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
                  Contact email
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.contactEmail && <p className="text-red-500 text-xs mt-1">{errors.contactEmail}</p>}
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center mt-6">
            <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={formData.terms}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-green-500"
                required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                By submitting this form, you agree that FoodBank may collect, use and disclose your personal data, as provided in this application form, or (if applicable) obtained by our organisation as a result of your membership, for the following purposes in accordance with the Personal Data Protection Act 2012:
                (a) the processing of this account registration; and
                (b) the administration of the account with our organisation.
            </label>
            {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms}</p>}
            </div>

          {/* Register Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Create New Account
            </button>
          </div>
        </form>


      </div>
    </div>
  );
}

// export default function RegisterPage() {
//     return (
//         <h1>RegisterPage</h1>
//     );
// };