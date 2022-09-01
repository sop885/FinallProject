import React, { useEffect, useState } from 'react'
// import Accordion from 'react-bootstrap/Accordion'
// import React, { useState } from 'react';
import './a.css'
import Accordion from './aa';
import P from '../../img/profile.jpg'
import Confirmb from '../button/confirmb'
import { connect } from 'react-redux'
import axios from 'axios';
import his from '../../img/gifHis.gif'
import Print from './printDetails';

const mapStateToProps = (state) => {
    debugger
    return {
        request: state.requests.Requests,
        user: state.users.user
    }
}

const B = (props) => {
    const { request, user } = props
    const [isActive, setIsActive] = useState(false);
    const always1 = "  הבקשה נשלחה בתאריך"
    const always2 = "  בשעה"
    const [rep, setRep] = useState()
    let Req = []; //מערך הבקשות שאני ביקשתי
    let ReqU = []; //מערך כל היוזרים שמחליפים
    let t
    const [req, setReq] = useState()
    const [reqU, setReqU] = useState()
    //איזה request

    async function getReplace(element) {
        console.log("element", element)
        try {
            // let res = await axios.get(`http://localhost:3000/Action/findUser/${element.ReplacesUserId}`)
            // //  let res =await axios.get(`http://localhost:3000/Action/findUser/62c5481e16f17b6ceb86a8f5`)

            // console.log("get replace");
            // console.log(res.data);
            // if (res.data != undefined && res.data != null) {

            // return res.data
            // }
            // return false
        }
        catch {
            return false

        }
    }


    useEffect(async () => {

        request && request.length && request.map(async (item, index) => {
            if (item.RequestingUserId == user.UserId) {
                await Req.push(item)
                // if (item.ReplacesUserId != null) {
                //     t = await getReplace(item)
                //     await ReqU.push(t)


                //סתם ביטלתי
                // if (t != false) {
                //     ReqU = [...ReqU, t]
                // }
                // }
                //Req.push({ replacUser: t, ...item })
                // Req.push({ replacUser: r, ...item })


            }
        });
        //למה צריך

        await setReq(Req)
        //await setReqU(ReqU)

    }, [request])
   
    

    function getDate(dateString) {
        var date = new Date(dateString);
        const thisDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        return thisDate;
    }
    return (

        <div>

            <div className="accordion" dir="rtl">
                {req && req.length ? req.map((item, index) => (
                    <>
                    {item.status == true ?
                        <Accordion className="t" style={{backgroundColor:"green"}} key={index} title={<div><img src={user.Imag} className="imgaco"  /><b>{always1}{item.CurrentDate} | {always2}  {item.CurrentTime}</b></div>}
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
                                        <b style={{ color: "Green" }}>סטטוס: בקשתך אושרה</b><br />

                                        <Print id={item.ReplacesUserId}></Print>
                                    </h5>
                                    
                                    {/* {item.status == true && item.ReplacesUserId != "" && item.ReplacesUserId != null ?
                                } */}
                                    {/* // alert("found" + item.ReplacesUserId) */}
                                    {/* <h3>{setR(item) != null ? "true" : "false"}</h3> */}

                                    {/* // reqU && reqU.length && reqU.map((it, index) => {it._id == item.ReplacesUserId ? */}
                                    {/* //    <p>{it.UserName}</p>
                                        //     :"not found"})
                                        // 
                                        //     
                                        // <div>
                                        //     {console.log("it", it)}
                                        //     <h4>פרטי המחליף</h4>
                                        //     <h5 className="contantb">
                                        //         <b>שם:</b ><br />
                                        //         {/* <b>גיל:</b> {getAge(it.BirthDate)}<br /> */}
                                    {/* <b>טלפון ליצירת קשר:</b> {it.PhoneNumber}<br /> */}
                                    {/* //         {it.Diploma} <b>תעודת הוראה</b> */}
                                    {/* //     </h5> */}
                                    {/* // </div> */}

                                    {/* // : ""  */}
                                </div>}
                                


                        />:
                        <Accordion className="f" key={index} title={<div><img src={user.Imag} className="imgaco"   /><b>{always1}{item.CurrentDate} | {always2}  {item.CurrentTime}</b></div>}
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
                                    <b style={{ color: "red" }}>סטטוס: מחכה לאישור</b>                               
                                </h5>                                
                            </div>}                    
                    />}
                                 </>

                ))
                    : <h1 style={{ marginTop: "5%", fontSize: "30px", textShadow: "gray 0 1px 2px", marginBottom: "5%" }}>עדיין לא ביצעת פעולות באתר, הפעולות שתבצע יופיעו כאן <img src={his} style={{ width: "10%", height: "10%", margin: "0px" }} /></h1>}
                {/* {repU.map()} */}


            </div>

        </div >


    );
};

export default connect(mapStateToProps)(B);



