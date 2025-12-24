import React from 'react';
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollToTop from "../SEO/ScrollToTop";
import FloatingWhatsAppButton from "../WhatsAppIcon/WhatsAppIcon";

const Dashboard = () => {
    return (
        <div style={{ width: "100%", margin: "0", padding: "0", overflowX: "hidden" }}>
            <ScrollToTop />
            <Header />
            <Routes>
                {routes.map(route => {
                    return (
                        <Route
                            key={route.name}
                            path={route.path}
                            element={<route.component />}
                        />
                    );
                })}
            </Routes>
            <Footer />
            <FloatingWhatsAppButton />
        </div>
    );
}

export default Dashboard;
