import React from 'react';
import '../ticketsBoorstrap.css';
import { Link, useLocation } from 'react-router-dom';
import Img1 from '../images/sticker.svg';
import Img2 from '../images/data-2.svg';
import Img3 from '../images/chart.svg';

function Sidebar() {
    const location = useLocation();
    return(
        <div className="d-flex flex-column bg-white m-0 pt-4 align-items-start" style={{width: '20%'}}>
            <ul className="nav nav-pills flex-column fw-bold">
            <li className="nav-item mb-3">
            <Link to={"/"} className={`nav-link ${location.pathname === "/" ? 'active' : ''}`} style={{color: '#A4A6A8', width: 'fit-content'}}>
                <span className="icon position-relative rounded-circle ml-1" style={{backgroundColor: '#ECF7F2', width: 30 + 'px', height: 30 + 'px'}}>
                    <img src={Img1} alt=""/>
                </span>
            التذاكر
            </Link>
        </li>
        <li className="nav-item mb-3">
            <Link to={"./Performance.js"} className={`nav-link ${location.pathname === "/Performance.js" ? 'active' : ''}`} style={{color: '#A4A6A8', width: 'fit-content'}}>
                <span className="icon position-relative rounded-circle ml-1" style={{backgroundColor: '#E1EBEF'}}>
                    <img src={Img2} alt=""/>
                </span>
            مؤشرات الاداء
            </Link>
        </li>
        <li className="nav-item mb-3">
            <Link to={"./Analysis.js"} className={`nav-link ${location.pathname === "/Analysis.js" ? 'active' : ''}`} style={{color: '#A4A6A8', width: 'fit-content'}}>
                <span className="icon position-relative rounded-circle ml-1" style={{backgroundColor: '#FFF9E7'}}>
                    <img src={Img3} alt="" />
                </span>
            تحليل المنصات
            </Link>
        </li>
            </ul>
        </div>
    );
}

export default Sidebar;