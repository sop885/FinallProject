import React, { useEffect, useState } from 'react'
// import Accordion from 'react-bootstrap/Accordion'
// import React, { useState } from 'react';
import './a.css'
import Accordion from './aa';

import Confirmb from '../button/confirmb'
import { connect } from 'react-redux'
import axios from 'axios';
import mess from '../../img/gifMess.gif'
import PrintR from './printR';
const mapStateToProps = (state) => {
    debugger
    return {
        request: state.requests.Requests,
        user: state.users.user
    }
}
function getDate(dateString) {
    var date = new Date(dateString);
    const thisDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;       
    
    return thisDate;
}
const A = (props) => {
    const { request, user } = props
    const [isActive, setIsActive] = useState(false);
    const always1 = "  הבקשה אושרה בתאריך"
    const always2 = "  בשעה"
    const Req = [];
    const [reqs, setReqs] = useState()
    //איזה request 
    useEffect(() => {
         debugger
        request && request.length && request.map((item, index) => {
            if (item.ReplacesUserId == user._id)
                Req.push(item)
        });
        setReqs(Req)
    }, [request])

    // useEffect(() => {
    //     debugger
    //             request && request.length && request.map((item, index) => {
    //                 if (item.ReplacesUserId == user._id)
    //                     Req.push(item)
    //             });
    //             setReqs(Req)
    //         }, [])
    function getTime(time) {
        var timen = new Date(time);
        const thisTime = timen.getHours() + ':' + timen.getMinutes() + ':' + timen.getSeconds();          
        return thisTime;
    }

    return (
        <div>
            
            <div className="accordion" dir="rtl">
                {reqs && reqs.length && reqs.map((item, index) => (
                    
                    <Accordion key={index} title={<div><img src={user.Imag} className="imgaco" /> <b>{user.UserName}|{always1}  {item.CurrentDate} | {always2}  {item.CurrentTime}</b></div>}
                        content={
                            <div>
                                <h4>פרטי הבקשה</h4>
                                <h5 className="contantb">
                                    <b>מתאריך:</b>  {getDate(item.DateStart)}<br />
                                    <b>עד תאריך:</b> {getDate(item.DateEnd)} <br />
                                    <b> התפקיד הנדרש:</b> {item.Job}<br />
                                    <b> שכבת גיל:</b> {item.AgeGroup}<br />
                                    <b>הרכב המגזר:</b>  {item.GenderPlace}<br />
                                    <b>אזור מוסד:</b>  {item.AreaName}<br />
                                    <b>עיר:</b> {item.CityName}<br></br>
                                    <b> כתובת:</b> {item.Adress}<br />
                                    <b> שכר שעתי ממוצע:</b> {item.Rate}<br />
                                    <b> הערות: </b> {item.Note}<br />
                                </h5>
                          {/* <PrintR id={item.RequestingUserId}></PrintR> */}

                               
                                </div>
                                
                            } />
                               
                ))
                  }
            </div>

        </div>


    );
};

export default connect(mapStateToProps)(A);



