import React from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./page/home-page.jsx";
import AboutPage from "./page/about-page.jsx";
import BlogPage from "./page/blog-page.jsx";
import ServicePage from "./page/service-page.jsx";
import ContactPage from "./page/contact-page.jsx";
import LoginPage from "./page/login-page.jsx";

//import ProductListPage from "./page/product-list-page.jsx";
//import LoginPage from "./page/login-page.jsx";
//import homePage from "./page/home-page.jsx";
//import verifyPage from "./page/verify-page.jsx";
//import CartListPage from "./page/cart-list-page.jsx";
//import VerifyPage from "./page/verify-page.jsx";

const App = () => {
    return (
        <HashRouter>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/service" element={<ServicePage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </HashRouter>
    );
};

export default App;