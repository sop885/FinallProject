import React, { useState, useRef, useEffect } from 'react';
import Calendar from 'react-calendar'  ;
import 'react-calendar/dist/Calendar.css';
import './date.css'
import { connect } from 'react-redux'
import axios from 'axios';
import { allRequests } from '../../../redux/actions/requestsAction'

const mapStateToProps = (state) => {
  debugger
  return {
    request: state.requests.Requests,
    user: state.users.user
  }
}

function Booking(props) {

  let Req = [];
  let Dates = [];
  let num;
  let d;
  let detail;
  const [showTime, setShowTime] = useState(false)
  const { request, user, dispatch } = props;
  const [req, setReqs] = useState()
  const [date, setDate] = useState(new Date());
  const [Datess, setDatess] = useState(new Date());


   function getDatesInRange(startDate, endDate) {
    const date = new Date(startDate.getTime());
  
    const dates = [];
  
    while (date <= endDate) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
  
    return dates;
  }

  useEffect(() => {
    if (!(request && request.length)) {
      axios.get(`http://localhost:3000/Action/getUserActions/${user.UserId}`).then((res) => {
        dispatch(allRequests(res.data))
      });

    }
 }, [])
  //מערך של הבקשות שהוא מחליף
  useEffect(() => {

    request && request.length && request.map((item, index) => {
      if (item.RequestingUserId != user.UserId)
        Req.push(item)
    });
    setReqs(Req)
  }, [request])
 
  //בעת רינדור עוברים על מערך הבקשות ומוסיפים למערך כל התאריכים
  useEffect(() => {
    req && req.length && req.map((item, index) => {
     

    const d1= item.DateStart;
    const d2 = item.DateEnd
    console.log(getDatesInRange(d1, d2));
    Dates.push(getDatesInRange(d1, d2)) 
    })
    // alert("Dates"+Dates)
    // setDatess(Dates)
    // Dates.map((it, index) => {
    //   setShowTime(true)
    // })  
  
  
  
  }, [req])


  // const disabledDates = [

  //   new Date(2022, 7, 10),
  //   new Date(2022, 7, 16),
  // ];
  function getDate(dateString) {

    var date = new Date(dateString);
    const thisDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;       
    
    return thisDate;
}

  function change(e) {

    setDate(e);
    setShowTime(true);
  //   {req && req.length && req.map((item, index) => {
  //    if(item.DateStart==e)
  //    detail=item
  //  })} ;
    // alert("here  it's going to be the datails from"+
    // detail.DateStart+
    // "and"+ detail.AreaName+
    //  getDate(e) + " until " + getDate(addDays(e, 2)))
  }
    const [dater, setDater] = useState([
      new Date(2022, 9, 1),
      new Date(2022, 9, 10),
    ]);
  return (
    <div className="App" dir='rtl'>
      <div>{Datess && Datess.length && Datess.map((item, index) => { console.log(item) })}</div>
      <Calendar
        className="calender"
        onChange={change}
        value={date}
        calendarType="Hebrew"
        locale="he"
        navigationAriaLive="polite"
        navigationAriaLabel="Go up"
        maxDetail="month"
        minDetail="month"
        defaultValue={dater}               
      />
    

    </div>
  );
}
export default connect(mapStateToProps)(Booking);