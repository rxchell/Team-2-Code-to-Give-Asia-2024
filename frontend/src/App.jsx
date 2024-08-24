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

// axios.defaults.baseURL = "http://localhost:3000/";
// axios.defaults.withCredentials = true;

export default function App() {
    return (
        // <UserContextProvider>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/donor/record" element={<DonorRecordPage />} />
                    <Route path="/user/record" element={<BeneficiaryRecordPage />} />
                    <Route path="/admin/record" element={<AdminRecordPage />} />
                    <Route path='*' element={<h1>Not Found</h1>} />
                </Route>
            </Routes>
        // </UserContextProvider>
    )
}

