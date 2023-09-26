import React from 'react';
import '../ticketsBoorstrap.css';
import Img1 from '../images/socialmedia advertising digitalmarketing branding facebook twitter 21.svg';
import Img2 from '../images/arrow-circle-down.svg';
import Img3 from '../images/arrow-down123.svg';
import Img4 from '../images/file.png';
import Img5 from '../images/arrow-up123.svg';
import Img6 from '../images/Frame 2444.png';
import Img7 from '../images/Oval2.svg';
import Img8 from '../images/Oval3.svg';
import Img9 from '../images/Oval4.svg';

function Performance() {
    return(
        <div className="page main mt-3 px-4">
        <div className="mb-3">
        <button className="btn d-flex justify-content-between align-items-center text-center px-4 py-2 rounded rounded-8 m-1" style={{backgroundColor: 'white', color: '#1d9bf0', border: '1px solid #1d9bf0'}}>
            <div className="d-flex align-items-center justify-content-center ml-3" style={{gap: '5px'}}>
            <span style={{fw: 600}}>جميع المنصات</span>
            <img src={Img1} alt="" />
            </div>
            <div>
                <img src={Img2} alt="" />
            </div>
        </button>
        </div>
        <div className="cards d-flex justify-content-between align-items-center flex-wrap">
            <div className="card rounded rounded-15 p-3 ml-5" style={{width: '325px', boxShadow: '0px 1px 3px 1px rgba(1, 39, 32, 0.10), 0px 1px 2px 0px rgba(1, 39, 32, 0.05)'}}>
                <div className="card-body p-0">
                    <div className="badge rounded rounded-8 mb-1" dir="ltr" style={{backgroundColor: '#FFD0CC', color: '#B20F00', gap: '8px', width: 'fit-content', left: 0}}>
                        <img src={Img3} alt="" />
                        <span className="ml-2 d-inline-block">2%</span>
                    </div>
                        <div className="d-flex justify-content-start align-items-center text-right mb-3" style={{gap: '8px', right: 0}}>
                            <img src={Img4} alt="" />
                            <span className="fw-bold" style={{fontSize: '14px'}}>عدد الشكاوي</span>
                        </div>
                        <div className="text-right fw-bold" style={{color: '#1d9bf0', fontSize: '24px'}}>5,153 شكوى</div>
                </div>
            </div>
            <div className="card rounded rounded-15 p-3 ml-5" style={{width: '325px', boxShadow: '0px 1px 3px 1px rgba(1, 39, 32, 0.10), 0px 1px 2px 0px rgba(1, 39, 32, 0.05)'}}>
                <div className="card-body p-0">
                    <div className="badge rounded rounded-8 mb-1" dir="ltr" style={{backgroundColor: '#D7F4E3', color: '#227746', gap: '8px', width: 'fit-content', left: 0}}>
                        <img src={Img5} alt="" />
                        <span className="ml-2 d-inline-block">25%</span>
                    </div>
                        <div className="d-flex justify-content-start align-items-center text-right mb-3" style={{gap: '8px', right: 0}}>
                            <img src={Img4} alt="" />
                            <span className="fw-bold" style={{fontSize: '14px'}}>عدد الإستفسارات</span>
                        </div>
                        <div className="text-right fw-bold" style={{color: '#1d9bf0', fontSize: '24px'}}>4,303 إستفسار</div>
                </div>
            </div>
            <div className="card rounded rounded-15 p-3 ml-5" style={{width: '325px', boxShadow: '0px 1px 3px 1px rgba(1, 39, 32, 0.10), 0px 1px 2px 0px rgba(1, 39, 32, 0.05)'}}>
                <div className="card-body p-0">
                    <div className="badge rounded rounded-8 mb-1" dir="ltr" style={{backgroundColor: '#D7F4E3', color: '#227746', gap: '8px', width: 'fit-content', left: 0}}>
                        <img src={Img5} alt="" />
                        <span className="ml-2 d-inline-block">15%</span>
                    </div>
                        <div className="d-flex justify-content-start align-items-center text-right mb-3" style={{gap: '8px', right: 0}}>
                            <img src={Img4} />
                            <span className="fw-bold" style={{fontSize: '14px'}}>عدد الإقتراحات</span>
                        </div>
                        <div className="text-right fw-bold" style={{color: '#1d9bf0', fontSize: '24px'}}>4,303 إقتراح</div>
                </div>
            </div>
        </div>
    <div className="d-flex justify-content-between align-items-center mt-5">
        <div className="table-responsive text-right fw-bold bg-white p-2 rounded rounded-15" style={{width: '65%', boxShadow: '0px 1px 3px 1px rgba(1, 39, 32, 0.10), 0px 1px 2px 0px rgba(1, 39, 32, 0.05)'}}>
            <p className="text-right fw-bold mt-2" style={{color: '#1d9bf0'}}>تحليل الموظفين</p>
            <table className="table table-borderless">
                <tr className="border-top border-bottom">
                    <th scope="col" style={{color: '#4E5356'}}>الموظف</th>
                    <th scope="col" style={{color: '#4E5356'}}>متوسط ساعات الرد</th>
                    <th scope="col" style={{color: '#4E5356'}}>متوسط ساعات الحل</th>
                </tr>
                <tr>
                    <td>
                        <div className="id d-flex" style={{gap: '8px'}}>
                            <div className="image">
                            <img src={Img6} width="30" height="40" className="rounded" />
                            </div>
                            <div className="text d-flex flex-column justify-content-center align-items-start">
                            <span className="d-inline-block text-right fw-bold">Ahmad Khalid<br /></span>
                            <span className="d-inline-block fw-normal" style={{color: '#4e5356'}}>مدير تسويق</span>
                            </div>
                            </div>
                    </td>
                    <td>5 ساعة \ 22 عميل</td>
                    <td>24 ساعة \ 22 تذكرة</td>
                </tr>
                <tr>
                    <td>
                        <div className="id d-flex" style={{gap: '8px'}}>
                            <div className="image">
                            <img src={Img6} width="30" height="40" className="rounded" />
                            </div>
                            <div className="text d-flex flex-column justify-content-center align-items-start">
                            <span className="d-inline-block text-right fw-bold">Yasir Ahmed<br /></span>
                            <span className="d-inline-block fw-normal" style={{color: '#4e5356'}}>اخصائي سوشيال ميديا</span>
                            </div>
                            </div>
                    </td>
                    <td>25 ساعة \ 22 عميل</td>
                    <td>34 ساعة \ 22 تذكرة  </td>
                </tr>
                <tr>
                    <td>
                        <div className="id d-flex" style={{gap: '8px'}}>
                            <div className="image">
                            <img src={Img6} width="30" height="40" className="rounded" />
                            </div>
                            <div className="text d-flex flex-column justify-content-center align-items-start">
                            <span className="d-inline-block text-right fw-bold">Ahmad Ali<br /></span>
                            <span className="d-inline-block fw-normal" style={{color: '#4e5356'}}>مصمم جرافيك</span>
                            </div>
                            </div>
                    </td>
                    <td>32 ساعة \ 22 عميل</td>
                    <td>44 ساعة \ 22 تذكرة</td>
                </tr>
                <tr>
                    <td>
                        <div className="id d-flex" style={{gap: '8px'}}>
                            <div className="image">
                            <img src={Img6} width="30" height="40" className="rounded" />
                            </div>
                            <div className="text d-flex flex-column justify-content-center align-items-start">
                            <span className="d-inline-block text-right fw-bold">Ahmad Khalid<br /></span>
                            <span className="d-inline-block fw-normal" style={{color: '#4e5356'}}>مدير تسويق</span>
                            </div>
                            </div>
                    </td>
                    <td>5 ساعة \ 22 عميل</td>
                    <td>24 ساعة \ 22 تذكرة</td>
                </tr>
                <tr>
                    <td>
                        <div className="id d-flex" style={{gap: '8px'}}>
                            <div className="image">
                            <img src={Img6} width="30" height="40" className="rounded" />
                            </div>
                            <div className="text d-flex flex-column justify-content-center align-items-start">
                            <span className="d-inline-block text-right fw-bold">Ahmed Hassan<br /></span>
                            <span className="d-inline-block fw-normal" style={{color: '#4e5356'}}>خبير تسويق</span>
                            </div>
                            </div>
                    </td>
                    <td>65 ساعة \ 22 عميل</td>
                    <td>54 ساعة \ 22 تذكرة</td>
                </tr>
                <tr>
                    <td>
                        <div className="id d-flex" style={{gap: '8px'}}>
                            <div className="image">
                            <img src={Img6} width="30" height="40" className="rounded" />
                            </div>
                            <div className="text d-flex flex-column justify-content-center align-items-start">
                            <span className="d-inline-block text-right fw-bold">Ahmed Hassan<br /></span>
                            <span className="d-inline-block fw-normal" style={{color: '#4e5356'}}>خبير تسويق</span>
                            </div>
                            </div>
                    </td>
                    <td>88 ساعة \ 22 عميل</td>
                    <td>64 ساعة \ 22 تذكرة</td>
                </tr>
                <tr>
                    <td>
                        <div className="id d-flex" style={{gap: '8px'}}>
                            <div className="image">
                            <img src={Img6} width="30" height="40" className="rounded" />
                            </div>
                            <div className="text d-flex flex-column justify-content-center align-items-start">
                            <span className="d-inline-block text-right fw-bold">Ahmed Hassan<br /></span>
                            <span className="d-inline-block fw-normal" style={{color: '#4e5356'}}>خبير تسويق</span>
                            </div>
                            </div>
                    </td>
                    <td>90 ساعة \ 22 عميل</td>
                    <td>27ساعة \ 22 تذكرة</td>
                </tr>
                <tr>
                    <td>
                        <div className="id d-flex" style={{gap: '8px'}}>
                            <div className="image">
                            <img src={Img6} width="30" height="40" className="rounded" />
                            </div>
                            <div className="text d-flex flex-column justify-content-center align-items-start">
                            <span className="d-inline-block text-right fw-bold">Ahmed Hassan<br /></span>
                            <span className="d-inline-block fw-normal" style={{color: '#4e5356'}}>خبير تسويق</span>
                            </div>
                            </div>
                    </td>
                    <td>90 ساعة \ 22 عميل</td>
                    <td>27ساعة \ 22 تذكرة</td>
                </tr>
                <tr>
                    <td>
                        <div className="id d-flex" style={{gap: '8px'}}>
                            <div className="image">
                            <img src={Img6} width="30" height="40" className="rounded" />
                            </div>
                            <div className="text d-flex flex-column justify-content-center align-items-start">
                            <span className="d-inline-block text-right fw-bold">Ahmed Hassan<br /></span>
                            <span className="d-inline-block fw-normal" style={{color: '#4e5356'}}>خبير تسويق</span>
                            </div>
                            </div>
                    </td>
                    <td>90 ساعة \ 22 عميل</td>
                    <td>27ساعة \ 22 تذكرة</td>
                </tr>
                <tr>
                    <td>
                        <div className="id d-flex" style={{gap: '8px'}}>
                            <div className="image">
                            <img src={Img6} width="30" height="40" className="rounded" />
                            </div>
                            <div className="text d-flex flex-column justify-content-center align-items-start">
                            <span className="d-inline-block text-right fw-bold">Ahmed Hassan<br /></span>
                            <span className="d-inline-block fw-normal" style={{color: '#4e5356'}}>خبير تسويق</span>
                            </div>
                            </div>
                    </td>
                    <td>90 ساعة \ 22 عميل</td>
                    <td>27ساعة \ 22 تذكرة</td>
                </tr>
            </table>
        </div>

                <div className="d-flex flex-column justify-content-center align-items-center bg-white w-25" style={{boxShadow: '0px 1px 3px 1px rgba(1, 39, 32, 0.10), 0px 1px 2px 0px rgba(1, 39, 32, 0.05)'}}>
                <div className="card px-3 my-4 border-0 rounded-0">
                    <div className="fw-bold" style={{color: '#4e5356'}}>متوسط ساعات الرد</div>
                    <div style={{width: '130px', height: '130px', backgroundColor: '#EBF9F1'}} className="rounded-circle position-relative">
                        <img src={Img7} className="position-absolute" style={{right: 0}} />
                        <span className="position-absolute fw-bold" style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>67%</span>
                    </div>
                </div>
                <div className="card px-3 my-4 border-0 rounded-0">
                    <div className="fw-bold" style={{color: '#4e5356'}}>متوسط ساعات الحل</div>
                    <div style={{width: '130px', height: '130px', backgroundColor: '#FFF1F0'}} className="rounded-circle position-relative">
                        <img src={Img8} className="position-absolute" style={{right: 0}} />
                        <span className="position-absolute fw-bold" style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>15%</span>
                    </div>
                </div>
                <div className="card px-3 my-4 border-0 rounded-0">
                    <div className="fw-bold" style={{color: '#4e5356'}}>متوسط ساعات الرد</div>
                    <div style={{width: '130px', height: '130px', backgroundColor: '#FFF1F0'}} className="rounded-circle position-relative">
                        <img src={Img9} className="position-absolute" style={{right: 0}} />
                        <span className="position-absolute fw-bold" style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>45%</span>
                    </div>
                </div>
            </div>
    </div>

        </div>
    );
} 

export default Performance;