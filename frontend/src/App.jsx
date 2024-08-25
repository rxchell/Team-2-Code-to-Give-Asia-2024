// import { UserContextProvider } from './utils/UserContext'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Layout from './utils/Layout'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DonorRecordPage from './pages/DonorRecordPage'
import BeneficiaryRecordPage from './pages/BeneficiaryRecordPage'
import AdminRecordPage from './pages/AdminRecordPage'
import FoodDonationListingPage from './pages/FoodDonationListingPage'
import FoodOrderPage from './pages/FoodOrderPage'

// import DonorRecordPage from './pages/DonorRecordPage'
// import BeneficiaryRecordPage from './pages/BeneficiaryRecordPage'
// import AdminRecordPage from './pages/AdminRecordPage'
// import FoodDonationListingPage from './pages/FoodDonationListingPage'
import GuidelinesPage from './pages/GuidelinesPage'
import AdditionalInfoPage from './pages/AdditionalInfoPage'
import DonatePage from './pages/DonatePage'
import AgencyManagePage from './pages/AgencyManagePage'
import { FormProvider } from './utils/FormContext'

// axios.defaults.baseURL = "http://localhost:3000/";
// axios.defaults.withCredentials = true;

export default function App() {
    return (
        // <UserContextProvider>
        <FormProvider>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/donor/home" element={<DonorRecordPage />} />
                    <Route path="/user/home" element={<FoodDonationListingPage />} />
                    <Route path="/user/record" element={<BeneficiaryRecordPage />} />
                    <Route path="/admin/home" element={<AdminRecordPage />} />
                    <Route path="/agency/manage-user" element={<AgencyManagePage />} />
                    <Route path="/donate" element={<DonatePage />} />
                    <Route path="/donate/additional-information" element={<AdditionalInfoPage />} />
                    <Route path="/guidelines" element={GuidelinesPage}/>
                    <Route path="/user/home/food-order" element={<FoodOrderPage />} />
                    {/* <Route path="/user/home/food-order/:id" element={<FoodOrderPage />} /> */}
                    <Route path='*' element={<h1>Not Found</h1>} />
                </Route>
            </Routes>
        </FormProvider>
            
        // </UserContextProvider>
    )
}

