import React, { useState } from 'react';
import './Style.css'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

// User role is hardcoded inside layout.jsx
export default function Header({ userRole }) {
    const [sidebar, setSidebar] = useState(false);
    
    const toggleSideBar = () => setSidebar(!sidebar);

    return (
        <>
        <header className="header">
            <div className="navbar justify-between">
                <div className='flex-none'>
                    <Link to='#' className='menu-bars'>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={2} 
                            stroke="currentColor" 
                            className="size-8" 
                            onClick={toggleSideBar}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </Link>
                </div>
                <div className='flex-none'>
                    <Link to='/'>
                        <img src="https://foodbank.sg/wp-content/uploads/2021/09/cropped-FoodBank-Logo-copy.png" 
                        alt="Logo" className="h-12 mr-2" />
                    </Link>
                </div>
            </div>
        </header>
        <Sidebar userRole={userRole} showSidebar={sidebar} toggleSidebar={toggleSideBar} />
        </>
    );
}

