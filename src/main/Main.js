import React, { useEffect } from 'react';
import PageHeader from "./PageHeader";
import Menu from "./Menu";
import PageRouter from "./PageRouter";
import Footer from "./Footer";

import './Main.css';

function Main(props) {
    return (
        <div className="main">
            <PageHeader />
            <Menu />
            <PageRouter/>
            <Footer />
        </div>
    );
}

export default Main;

