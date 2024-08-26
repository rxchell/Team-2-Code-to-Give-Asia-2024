import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function Layout() {
    const location = useLocation();
    const [sidebar, setSidebar] = useState(false);

    const roleRouteMap = {
        beneficiary: ['/user/home', '/user/record', '/user/home/food-order'],
        agency: ['/agency/manage-user/add-user', '/agency/manage-user'],
        donor: ['/donate', '/guidlines', '/donor/home', '/donate/additional-information'],
        admin: ['/admin/home']
    };

    // routes where Sidebar should not be shown
    const noSidebarRoutes = ['/login', '/register'];

    const showSidebar = !noSidebarRoutes.includes(location.pathname);

    const showMenuBars = !noSidebarRoutes.includes(location.pathname);

    const toggleSidebar = () => setSidebar(!sidebar);

    const getUserRole = (path) => {
        for (const [role, routes] of Object.entries(roleRouteMap)) {
            if (routes.includes(path)) {
                return role;
            }
        }
        return 'donor';
    };

    const userRole = getUserRole(location.pathname);

    return (
        <div className="p-0 flex flex-col min-h-screen w-full bg-[#F4F5F4]">
            <Header toggleSidebar={toggleSidebar} showMenuBars={showMenuBars}/>
            {showSidebar && <Sidebar userRole={userRole} showSidebar={sidebar} toggleSidebar={toggleSidebar} />}
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

