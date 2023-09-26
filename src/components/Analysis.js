import React from "react";
import '../ticketsBoorstrap.css';

function Analysis() {
    return(
        <div className="page px-3 py-4 bg-white w-75 rounded rounded-15 m-4" style={{boxShadow: '0px 1px 3px 1px rgba(1, 39, 32, 0.10), 0px 1px 2px 0px rgba(1, 39, 32, 0.05)'}}>
            <div className="d-flex flex-column justify-content-between align-content-center" style={{height: '500px'}}>
                <div className="d-flex flex-column justify-content-end" style={{gap: '4px'}}>
                    <p className="h2 fw-bold" style={{color: '#1D9BF0'}}>الكلمات الاكثر تداولا</p>
                    <p style={{color: '#4E5356'}}>اكثر الكلمات تداولاُ عبر المنصات</p>
                </div>
                <div>
                    <div className="d-flex justify-content-between" style={{color: '#1D9BF0'}}>
                        <p className="h5 fw-bold">افضل مافي دانكن ان البلاك كوفي على طول يجهز</p>
                        <p className="h5 fw-bold">983,721</p>
                    </div>
                    <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div>
                <div className="d-flex justify-content-between" style={{color: '#1D9BF0'}}>
                    <p className="h5 fw-bold">متي بيعملو دونتس بالتمر؟</p>
                    <p className="h5 fw-bold">506,731</p>
                </div>
                <div class="progress">
                <div class="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            <div>
            <div className="d-flex justify-content-between" style={{color: '#1D9BF0'}}>
                <p className="h5 fw-bold">دانكن هو الافضل في سرعة تقديم الطلبات</p>
                <p className="h5 fw-bold">120,521</p>
            </div>
            <div class="progress">
            <div class="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div>
        <div className="d-flex justify-content-between" style={{color: '#1D9BF0'}}>
            <p className="h5 fw-bold">هل بيفتحو فرع جديد؟</p>
            <p className="h5 fw-bold">78,820</p>
        </div>
        <div class="progress">
        <div class="progress-bar" role="progressbar" style={{width: '40%'}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
    <div>
    <div className="d-flex justify-content-between" style={{color: '#1D9BF0'}}>
        <p className="h5 fw-bold">دانكن دونتس كافيه</p>
        <p className="h5 fw-bold">10,534</p>
    </div>
    <div class="progress">
    <div class="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</div>
            </div>
        </div>
    );
}

export default Analysis;