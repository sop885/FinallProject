import React, { useState, useRef, useEffect } from 'react';
import Calendar from 'react-calendar'
  ;
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
  //חישוב הבדל מספר ימים להדגיש
  function datediff(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }
  //להוסיף מספר ימים לתאריך ומחזיר תאריך גדול במספר הימים
  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  //בעת רינדור עוברים על מערך הבקשות ומוסיפים למערך כל התאריכים
  useEffect(() => {
    req && req.length && req.map((item, index) => {
      // Dates.push(item.DateStart)  
      // {item.DateEnd!=item.DateStart ? :null}
      // alert("item.DateStart  "+ getDate( item.DateStart))
      // alert("item.end  "+ getDate(item.DateEnd) )

      num = datediff(item.DateStart, item.DateEnd)
      for (let index = 0; index < num; index++) {
        d = addDays(item.DateStart, index)
        Dates.push(d)
      }
    })
    setDatess(Dates)
    Dates.map((it, index) => {
      setShowTime(true)
    })
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
    alert("here  it's going to be the datails from"+
    // detail.DateStart+
    // "and"+ detail.AreaName+
     getDate(e) + " until " + getDate(addDays(e, 2)))
  }

  return (
    <div className="App">
      <div>{Dates && Dates.length && Dates.map((item, index) => { console.log(item) })}</div>
      <Calendar
        className="calender"
        onChange={change}
        value={date}
        calendarType="Hebrew"
        locale="he"
        navigationAriaLive="polite"
        // selectRange={true}
        navigationAriaLabel="Go up"
        maxDetail="month"
        minDetail="month"
      //   tileDisabled={({date, view}) =>
      //   (view === 'month') && // Block day tiles only
      //   disabledDates.some(disabledDate =>
      //     (date.getFullYear() === disabledDate.getFullYear() &&
      //     date.getMonth() === disabledDate.getMonth() &&
      //     date.getDate() === disabledDate.getDate()) 
      //   )
      // }
      // onClickDay={() => setShowTime(true)}

      />
      {/* {date.length > 0 ? (
   <p>
     <span>Start:</span>{' '} {date[0].toDateString()}
     &nbsp; to &nbsp;
     <span>End:</span> {date[1].toDateString()}
   </p>
        ) : (
   <p>
     <span>Default selected date:</span>{' '} {date.toDateString()}
   </p>
        )} */}

    </div>
  );
}
export default connect(mapStateToProps)(Booking);