import React from 'react';
import '../ticketsBoorstrap.css';
import Img1 from '../images/filter-search.svg';
import Instagram from '../images/Instagram.svg';
import Img2 from '../images/Frame 2444.png';
import Img3 from '../images/messages-3.svg';
import WhatsApp from '../images/Whatsapp.svg';
import Facebook from '../images/Facebook logo 2019.svg';
import Twitter from '../images/Twitter.svg';

function Main() {
    return (
        <div className="page main w-75 m-2 p-4 bg-white rounded rounded-15 py-2 pr-3 mt-4" style={{border: '1px solid #e6e6e6', boxShadow: '0px 1px 3px 1px rgba(1, 39, 32, 0.10), 0px 1px 2px 0px rgba(1, 39, 32, 0.05)', marginLeft: '60 + "px" !important'}}>
        <div className="head d-flex justify-content-between align-items-center text-right">
            <div className="text d-flex flex-column">
                <span className="fw-bold" style={{color: '#0f1419', fontSize: 32 + 'px'}}>التذاكر</span>
                <span style={{fontSize: 14 + 'px', color: '#4E5356'}}>اكثر من 500 مستخدم</span>
            </div>
            <button className="d-flex justify-content-center align-items-center rounded rounded-8 border-0" style={{padding: '14px 32px', backgroundColor: '#1d9bf0', gap: '8px;'}}>
                <span className="text-white">انشاء تذكرة</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 18V6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </button>
        </div>
    <table className="table table-borderless">
        <thead>
          <tr className="row text-right">
            <th scope="col" className="col-sm">المنصة</th>
            <th scope="col" className="col-sm">المستخدم</th>
            <th scope="col" className="col-sm">مضمون التذاكر</th>
            <th scope="col" className="col-sm">الحالة</th>
            <th scope="col" className="col-sm">الإجراء</th>
            <td>
                <a href='#' className="filter" style={{textDecoration: 'none', cursor: 'pointer'}}>
                    <span style={{color: '#4E5356'}}>تصنيف حسب</span>
                    <img src={Img1} alt="" />
                  </a>  
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="row text-right">
            <td className="col-sm">
                <div className="social-icon d-flex" style={{gap: '8px'}}>
                    <div className="icon">
                        <img src={Instagram} alt="" />
                    </div>
                    <div className="text fw-bold" style={{color: '#1d9bf0'}}>انستجرام</div>
                </div>
            </td>
            <td className="col-sm">
                <div
                className="id d-flex"
                style={{gap: '8px'}}
            >
                <div className="image">
                <img
                    src={Img2}
                    width="30"
                    height="40"
                    className="rounded"
                />
                </div>
                <div className="text d-flex flex-column justify-content-center align-items-end">
                <span className="d-inline-block text-right fw-bold"
                    >Ahmad Hassan<br
                /></span>
                <span className="d-inline-block" style={{color: '#4e5356'}}>@Ahmad_Omar</span>
                </div>
                </div>
            </td>
            <td className="col-sm">
               <div className="position-relative px-2 pb-3 bg-light rounded rounded-15" style={{paddingTop: '32px'}}>
                        <div className="position-absolute text-white p-1" style={{backgroundColor: '#1d9bf0', top: 0, left: 0, borderRadius: '15px 0 0 0'}}>اقتراح</div>
                        السلام عليكم ، ليش ماتخلون اللي يشترون بلاك كوفي لهم طابور خاص فيهم فمحلاتكم ؟
               </div>
            </td>
            <td className="col-sm">
                <div className="rounded rounded-8 border-0 p-2 text-center" style={{backgroundColor: '#FFD0CC', fontSize: '14px', fontWeight: 400, color: '#B20F00'}}>
                    <span>قيد التنفيذ</span>
                </div>
            </td>
            <td className="col-sm">
                <button className="bg-white d-flex px-3 py-2 rounded rounded-8" style={{border: '1px solid #1d9bf0', gap: '8px'}}>
                    <span style={{color: '#1d9bf0'}}>تواصل</span>
                    <img src={Img3} alt="" />
                </button>
            </td>
          </tr>
          <tr className="row text-right">
            <td className="col">
                <div className="social-icon d-flex" style={{gap: '8px'}}>
                    <div className="icon">
                        <img src={WhatsApp} alt="" />
                    </div>
                    <div className="text fw-bold" style={{color: '#1d9bf0'}}>واتساب</div>
                </div>
            </td>
            <td className="col">
                <div
                className="id d-flex"
                style={{gap: '8px'}}
            >
                <div className="image">
                <img
                    src={Img2}
                    width="30"
                    height="40"
                    className="rounded"
                />
                </div>
                <div className="text d-flex flex-column justify-content-center align-items-end">
                <span className="d-inline-block text-right fw-bold"
                    >Ahmad Khaled<br
                /></span>
                <span className="d-inline-block" style={{color: '#4e5356'}}>+20111111111111</span>
                </div>
                </div>
            </td>
            <td className="col">
                    <div className="position-relative px-2 pb-3 bg-light rounded rounded-15" style={{paddingTop: '32px'}}>
                             <div className="position-absolute text-white p-1" style={{backgroundColor: '#1d9bf0', top: 0, left: 0, borderRadius: '15px 0 0 0'}}>استفسار</div>
                             متى تجي عروووضكم ترى منتظرين
                    </div>
            </td>
            <td className="col">
                <div className="rounded rounded-8 border-0 p-2 text-center" style={{backgroundColor: '#D7F4E3', fontSize: '14px', fontWeight: 400, color: '#227746'}}>
                    <span>تم الحل</span>
                </div>
            </td>
            <td className="col">
                <button className="bg-white d-flex px-3 py-2 rounded rounded-8" style={{border: '1px solid #1d9bf0', gap: '8px'}}>
                    <span style={{color: '#1d9bf0'}}>تواصل</span>
                    <img src={Img3} alt="" />
                </button>
            </td>
          </tr>
          <tr className="row text-right">
            <td className="col">
                <div className="social-icon d-flex" style={{gap: '8px'}}>
                    <div className="icon">
                        <img src={Facebook} alt="" />
                    </div>
                    <div className="text fw-bold" style={{color: '#1d9bf0'}}>فيسبوك</div>
                </div>
            </td>
            <td className="col">
                <div
                className="id d-flex"
                style={{gap: '8px'}}
            >
                <div className="image">
                <img
                    src={Img2}
                    width="30"
                    height="40"
                    className="rounded"
                />
                </div>
                <div className="text d-flex flex-column justify-content-center align-items-end">
                <span className="d-inline-block text-right fw-bold"
                    >Yasir Ahmed<br
                /></span>
                <span className="d-inline-block" style={{color: '#4e5356'}}>momenheshamahmed</span>
                </div>
                </div>
            </td>
            <td className="col">
                    <div className="position-relative px-2 pb-3 bg-light rounded rounded-15" style={{paddingTop: '32px'}}>
                             <div className="position-absolute text-white p-1" style={{backgroundColor: '#1d9bf0', top: 0, left: 0, borderRadius: '15px 0 0 0'}}>شكوى</div>
                             موظف الكاشير اللي عندكم مايبلس قفازات الفرع اللي ف طريق خريص
                    </div>
            </td>
            <td className="col">
                <div className="rounded rounded-8 border-0 p-2 text-center" style={{backgroundColor: '#FFF5CC', fontSize: '14px', fontWeight: 400, color: '#806600'}}>
                    <span>جديد</span>
                </div>
            </td>
            <td className="col">
                <button className="bg-white d-flex px-3 py-2 rounded rounded-8" style={{border: '1px solid #1d9bf0', gap: '8px'}}>
                    <span style={{color: '#1d9bf0'}}>تواصل</span>
                    <img src={Img3} alt="" />
                </button>
            </td>
          </tr>
          <tr className="row text-right">
            <td className="col">
                <div className="social-icon d-flex" style={{gap: '8px'}}>
                    <div className="icon">
                        <img src={Twitter} alt="" />
                    </div>
                    <div className="text fw-bold" style={{color: '#1d9bf0'}}>تويتر</div>
                </div>
            </td>
            <td className="col">
                <div
                className="id d-flex"
                style={{gap: '8px'}}
            >
                <div className="image">
                <img
                    src={Img2}
                    width="30"
                    height="40"
                    className="rounded"
                />
                </div>
                <div className="text d-flex flex-column justify-content-center align-items-end">
                <span className="d-inline-block text-right fw-bold"
                    >Ahmad Ali<br
                /></span>
                <span className="d-inline-block" style={{color: '#4e5356'}}>@Ahmad_Omar</span>
                </div>
                </div>
            </td>
            <td className="col">
                    <div className="position-relative px-2 pb-3 bg-light rounded rounded-15" style={{paddingTop: '32px'}}>
                             <div className="position-absolute text-white p-1" style={{backgroundColor: '#1d9bf0', top: 0, left: 0, borderRadius: '15px 0 0 0'}}>شكوى</div>
                             اتمنى يكون عندكم نظافة للطاولات المحلي
                    </div>
            </td>
            <td className="col">
                <div className="rounded rounded-8 border-0 p-2 text-center" style={{backgroundColor: '#FFD0CC', fontSize: '14px', fontWeight: 400, color: '#B20F00'}}>
                    <span>قيد التنفيذ</span>
                </div>
            </td>
            <td className="col">
                <button className="bg-white d-flex px-3 py-2 rounded rounded-8" style={{border: '1px solid #1d9bf0', gap: '8px'}}>
                    <span style={{color: '#1d9bf0'}}>تواصل</span>
                    <img src={Img3} alt="" />
                </button>
            </td>
          </tr> 
          <tr className="row text-right">
            <td className="col">
                <div className="social-icon d-flex" style={{gap: '8px'}}>
                    <div className="icon">
                        <img src={WhatsApp} alt="" />
                    </div>
                    <div className="text fw-bold" style={{color: '#1d9bf0'}}>واتساب</div>
                </div>
            </td>
            <td className="col">
                <div
                className="id d-flex"
                style={{gap: '8px'}}
            >
                <div className="image">
                <img
                    src={Img2}
                    width="30"
                    height="40"
                    className="rounded"
                />
                </div>
                <div className="text d-flex flex-column justify-content-center align-items-end">
                <span className="d-inline-block text-right fw-bold"
                    >Ahmad Hassan<br
                /></span>
                <span className="d-inline-block" style={{color: '#4e5356'}}>+20111111111111</span>
                </div>
                </div>
            </td>
            <td className="col">
                    <div className="position-relative px-2 pb-3 bg-light rounded rounded-15" style={{paddingTop: '32px'}}>
                             <div className="position-absolute text-white p-1" style={{backgroundColor: '#1d9bf0', top: 0, left: 0, borderRadius: '15px 0 0 0'}}>شكوى</div>
                             ليش مافي الا موظف واحد في محلكم الى بالدمام شارع الظهران !!!!؟؟
                    </div>
            </td>
            <td className="col">
                <div className="rounded rounded-8 border-0 p-2 text-center" style={{backgroundColor: '#D7F4E3', fontSize: '14px', fontWeight: 400, color: '#227746'}}>
                    <span>تم الحل</span>
                </div>
            </td>
            <td className="col">
                <button className="bg-white d-flex px-3 py-2 rounded rounded-8" style={{border: '1px solid #1d9bf0', gap: '8px'}}>
                    <span style={{color: '#1d9bf0'}}>تواصل</span>
                    <img src={Img3} alt="" />
                </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    );
}

export default Main;