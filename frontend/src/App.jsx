// import { UserContextProvider } from './utils/UserContext'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Layout from './utils/Layout'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DonatePage from './pages/DonatePage'
import GuidelinesPage from './pages/GuidelinesPage'

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
                    <Route path="/donate" element={<DonatePage />} />
                    <Route path="/guidelines" element={GuidelinesPage}/>
                    <Route path='*' element={<h1>Not Found</h1>} />
                </Route>
            </Routes>
        // </UserContextProvider>
    )
}

