import { Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';

// export default function RegisterPage() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     async function registerUser(e) {
//         e.preventDefault();
//         try {
//             await axios.post('/register', {
//                 name,
//                 email,
//                 password,
//             });
//             alert('Registration successful! You can log in now.');
//             // toast('🦄 Wow so easy!', {
//             //     position: "top-right",
//             //     autoClose: 5000,
//             //     hideProgressBar: false,
//             //     closeOnClick: true,
//             //     pauseOnHover: true,
//             //     draggable: true,
//             //     progress: undefined,
//             //     theme: "light",
//             //     transition: Bounce,
//             // });
//         } catch (error) {
//             alert('Registration failed. Please try again.');
//         }
//     }

//     return (
//         // <div className="mt-4 grow flex items-center justify-around">
//         //     <div className="mb-64">
//         //         <h1 className="text-4xl text-center mb-4">Register</h1>
//         //         <form className="max-w-md mx-auto" onSubmit={registerUser}>
//         //             <input 
//         //                 type="text" 
//         //                 placeholder="John Doe" 
//         //                 value={name} 
//         //                 onChange={e => setName(e.target.value)} 
//         //             />
//         //             <input 
//         //                 type="email" 
//         //                 placeholder="your@email.com" 
//         //                 value={email}
//         //                 onChange={e => setEmail(e.target.value)}
//         //             />
//         //             <input 
//         //                 type="password" 
//         //                 placeholder="password" 
//         //                 value={password}
//         //                 onChange={e => setPassword(e.target.value)}
//         //             />
//         //             <button className="primary">Register</button>
//         //             <div className="text-center py-2 text-gray-500">
//         //                 Already a member? <Link to={'/login'} className="underline text-black">Login</Link>
//         //             </div>
//         //         </form>
//         //     </div>
//         // </div>
//         <div className="mt-4 grow flex items-center justify-around p-20 ">
//             <div className="p-20 bg-[#522985] rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[8.7px]">
//                 <h1 className="text-4xl text-center mb-4 text-light">Register</h1>
//                 <form className="max-w-md mx-auto" onSubmit={registerUser}>
//                     <input
//                         type="text"
//                         placeholder="John Doe"
//                         value={name}
//                         onChange={e => setName(e.target.value)}
//                     />
//                     <input
//                         type="email"
//                         placeholder="john@email.com"
//                         value={email}
//                         onChange={e => setEmail(e.target.value)}
//                     />
//                     <input
//                         type="password"
//                         placeholder="password"
//                         value={password}
//                         onChange={e => setPassword(e.target.value)}
//                     />
//                     <button className="primary text-light mt-8">Register</button>
//                     <div className="text-center py-2 text-gray-400">
//                         Already a member? <Link to={'/login'} className="underline text-gray-300">Login</Link>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default function RegisterPage() {
//     return (
//         <h1>RegisterPage</h1>
//     );
// };

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    organisationName: '',
    password: '',
    area: '',
    address: '',
    postalCode: '',
    operationHour: '',
    entityNature: '',
    uploadCertificate: null,
    accountType: '',
    contactPerson: '',
    contactNumber: '',
    contactEmail: '',
    terms: false,
  });

  const [errors, setErrors] = useState({
    organisationName: '',
    password: '',
    area: '',
    address: '',
    postalCode: '',
    operationHour: '',
    entityNature: '',
    contactPerson: '',
    contactNumber: '',
    contactEmail: '',
    terms: '',
  });

  const [showPopup, setShowPopup] = useState(false);
  const [popupAccepted, setPopupAccepted] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked, files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  }

  function handlePopupChange(e) {
    setPopupAccepted(e.target.checked);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};

    Object.keys(formData).forEach(field => {
      if (!formData[field] && field !== 'uploadCertificate') {
        newErrors[field] = `${field.replace(/([A-Z])/g, ' $1').toUpperCase()} is required.`;
      }
    });

    if (!formData.terms) {
      newErrors.terms = 'You must agree to the terms and conditions.';
    }

    if (formData.accountType === 'donor') {
        if (!popupAccepted) {
          setShowPopup(true);
          return;
        }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Perform registration logic here
      try {
        await axios.post('/register', {
            organisationName,
            password,
            area,
            address,
            postalCode,
            operationHour,
            entityNature,
            uploadCertificate,
            accountType,
            contactPerson,
            contactNumber,
            contactEmail,
        });
        alert('Registration successful! You can log in now.');
        // toast('🦄 Wow so easy!', {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        //     transition: Bounce,
        // });
    } catch (error) {
        alert('Registration failed. Please try again.');
    }
      alert('Registration successful!');
    }
  }

  function handlePopupSubmit() {
    if (popupAccepted) {
      setShowPopup(false);
      handleSubmit({ preventDefault: () => {} }); // Call handleSubmit again
    }
  }

  function handlePopupClose() {
    setShowPopup(false);
  }

  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-50">
      <div className="w-full max-w-3xl p-8 bg-white rounded shadow-lg">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="organisationName" className="block text-sm font-medium text-gray-700">
                  Organisation name
                </label>
                <input
                  type="text"
                  id="organisationName"
                  name="organisationName"
                  placeholder="Please enter the full name of your organisation"
                  value={formData.organisationName}
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
                  Operation hour
                </label>
                <input
                  type="text"
                  id="operationHour"
                  name="operationHour"
                  value={formData.operationHour}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.operationHour && <p className="text-red-500 text-xs mt-1">{errors.operationHour}</p>}
              </div>

              <div>
                <label htmlFor="entityNature" className="block text-sm font-medium text-gray-700">
                  Entity nature
                </label>
                <input
                  type="text"
                  id="entityNature"
                  name="entityNature"
                  value={formData.entityNature}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.entityNature && <p className="text-red-500 text-xs mt-1">{errors.entityNature}</p>}
              </div>

              <div>
                <label htmlFor="uploadCertificate" className="block text-sm font-medium text-gray-700">
                  Upload entity certificate
                </label>
                <input
                  type="file"
                  id="uploadCertificate"
                  name="uploadCertificate"
                  onChange={handleChange}
                  className="mt-1 block w-full text-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Account type
                </label>
                <div className="mt-1 flex items-center">
                  <input
                    id="donor"
                    name="accountType"
                    type="radio"
                    value="donor"
                    checked={formData.accountType === 'donor'}
                    onChange={handleChange}
                    className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    required
                  />
                  <label htmlFor="donor" className="ml-3 block text-sm font-medium text-gray-700">
                    Donor
                  </label>
                </div>
                <div className="mt-1 flex items-center">
                  <input
                    id="beneficiary"
                    name="accountType"
                    type="radio"
                    value="beneficiary"
                    checked={formData.accountType === 'beneficiary'}
                    onChange={handleChange}
                    className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    required
                  />
                  <label htmlFor="beneficiary" className="ml-3 block text-sm font-medium text-gray-700">
                    Beneficiary Agency
                  </label>
                </div>
                {errors.accountType && <p className="text-red-500 text-xs mt-1">{errors.accountType}</p>}
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">
                  Contact person
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.contactPerson && <p className="text-red-500 text-xs mt-1">{errors.contactPerson}</p>}
              </div>

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
              Register
            </button>
          </div>
        </form>

        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="relative bg-white p-6 rounded-lg shadow-lg">
              <button
                onClick={handlePopupClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-900"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <h3 className="text-lg font-semibold text-gray-900">For Donors:</h3>
              <p className="mt-2 text-sm text-gray-700">
                The Good Samaritan Food Donation Bill was passed in Parliament on 6 August to provide liability waiver for food donors as long as they fulfil the following four conditions:
                <ol className="list-decimal list-inside mt-2 text-sm text-gray-700">
                  <li>The food must not be unsafe and unsuitable at the time it was donated.</li>
                  <li>The food donor must inform the recipient of any particular handling requirements to ensure the food remains safe to consume.</li>
                  <li>The food donor must inform the recipient of any time limit within which the food remains safe and suitable.</li>
                  <li>The donor must take all reasonable measures to comply with food safety and hygiene requirements up to the point of donation.</li>
                </ol>
              </p>
              <div className="mt-4 flex items-center">
                <input
                  id="popupAccept"
                  type="checkbox"
                  checked={popupAccepted}
                  onChange={handlePopupChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label htmlFor="popupAccept" className="ml-2 block text-sm text-gray-900">
                  I have read and understood the above information.
                </label>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={handlePopupSubmit}
                  className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
