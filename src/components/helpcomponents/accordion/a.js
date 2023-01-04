import React, { useEffect, useState } from 'react'
// import Accordion from 'react-bootstrap/Accordion'
// import React, { useState } from 'react';
import './a.css'
import Accordion from './aa';
import P from '../../img/profile.jpg'
import Confirmb from '../button/confirmb'
import { connect } from 'react-redux'
import axios from 'axios';
import mess from '../../img/gifMess.gif'
import Messageb from '../../helpcomponents/accordion/abirthday'
import PrintR from './printR'

const mapStateToProps = (state) => {
    debugger
    return {
        request: state.requests.Requests,
        user: state.users.user
    }
}

const A = (props) => {
    const { request, user } = props
    console.log(request);
    const [isActive, setIsActive] = useState(false);
    const always1 = "  הבקשה התקבלה בתאריך"
    const always2 = "  בשעה"
    const Req = [];
    const [req, setReq] = useState([])
    //איזה request 
    useEffect(async () => {
        debugger
        request && request.length && request.map(async (item, index) => {
            if (item.RequestingUserId !== user.UserId && item.status !== true) { await Req.push(item) }

        });
        await setReq(Req)
    }, [request])

    // function isBd(dateString) {
    //     var today = new Date();
    //     var birthDate = new Date(dateString);
    //     if (today.getMonth == birthDate.getMonth && today.getDay == birthDate.getDay)
    //         return true;
    //     return false;
    // }
    // const b = isBd(user.BirthDate)
    function isBd(dateString) {
        var current = new Date();
        const currentDate = `${current.getDate()}/${current.getMonth() + 1}`;
        var birthDate = new Date(dateString);
        const Datebirth = `${birthDate.getDate()}/${birthDate.getMonth() + 1}`;
        if (currentDate == Datebirth)
            return true;
        return false;
    }
    function getTime(time) {
        var timen = new Date(time);
        const thisTime = timen.getHours() + ':' + timen.getMinutes() + ':' + timen.getSeconds();
        return thisTime;
    }
    function getDate(dateString) {
        var date = new Date(dateString);
        const thisDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        return thisDate;
    }

    const [flag, setFlag] = useState(true);
    console.log(req);
    return (
        <div>
            <div className="accordion" dir="rtl">

                {req && req.length ? req.map((item, index) =>
                    <>
                        {/* {item.status != true ? setFlag(false):''} */}
                        {/* {item.status != true ? */}
                        <Accordion className="t" style={{ backgroundColor: "green" }}
                            key={index} title={<div>
                                {/* <img src={user.Imag===undefined&&user.Imag.path==''?P:`http://localhost:3000/${user.Imag.path}`} className="imgaco" /> */}
                                <b>{user.UserName}|{always1}  {item.CurrentDate} | {always2}  {item.CurrentTime}</b>
                            </div>}
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

                                    <PrintR id={item.RequestingUserId}></PrintR>


                                    <br></br>
                                    {item.status == true ? 'confirmed' : <Confirmb item={item} />}
                                </div>}
                        />
                        {/* : ''} */}

                    </>
                )
                    : <h1 style={{ marginTop: "5%", fontSize: "30px", textShadow: "gray 0 1px 2px", marginBottom: "5%" }}> אין עדיין הודעות שנשלחו אליך<img src={mess} style={{ width: "10%", height: "10%", marginRight: "1%" }} /></h1>}
                {/* {flag==true && isBd(user.BirthDate) == false ?<h1 style={{ marginTop: "5%", fontSize: "30px", textShadow: "gray 0 1px 2px", marginBottom: "5%" }}> אין עדיין הודעות שנשלחו אליך<img src={mess} style={{ width: "10%", height: "10%", marginRight: "1%" }} /></h1>:''} */}
            </div>

        </div>


    );
};

export default connect(mapStateToProps)(A);



