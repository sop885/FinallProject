import React, { useState, useRef, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "./date.css";
import { connect } from "react-redux";
import axios from "axios";
import { allRequests } from "../../../redux/actions/requestsAction";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/he";

const mapStateToProps = (state) => {
  return {
    request: state.requests.Requests,
    user: state.users.user,
  };
};

function Booking(props) {
  moment.locale("he");

  const localizer = momentLocalizer(moment);

  let Req = [];
  let Dates = [];
  let num;
  let d;
  let detail;
  const [showTime, setShowTime] = useState(false);
  const { request, user, dispatch } = props;
  const [req, setReqs] = useState();
  const [date, setDate] = useState(new Date());
  const [Datess, setDatess] = useState(new Date());
  const [activeDate, setActiveDate] = useState();
  const [current, setCurrent] = useState();
  function getDatesInRange(startDate, endDate) {
    // console.log("_________")
    var sD = new Date(startDate);
    var eD = new Date(endDate);
    // console.log(sD)
    // console.log(eD)
    // console.log("_________")

    // const date = new Date(startDate.getTime());
    // console.log(date)
    const dates = [];
    // console.log(sD < endDate)
    while (sD <= eD) {
      // console.log(sD)
      dates.push(sD);

      sD.setDate(sD.getDate() + 1);
      // console.log("+++")

      // console.log(sD)
    }

    return dates;
  }

  useEffect(() => {
    console.log("first");
    if (!(request && request.length)) {
      axios
        .get(`http://localhost:3000/Action/getUserActions/${user.UserId}`)
        .then((res) => {
          dispatch(allRequests(res.data));
        });
    }
  }, []);
  //מערך של הבקשות שהוא מחליף
  useEffect(() => {
    console.log("second");
    request &&
      request.length &&
      request.map((item, index) => {
        if (item.RequestingUserId != user.UserId) Req.push(item);
      });
    console.log(Req);
    // מכניסים למערך הארועים את כל הבקשות בצורה שתואמת לקלנדר
    // אלה הארועים שיוצגו בקלנדר
    setActiveDate(
      Req.map((e) => {
        return {
          id: e._id,
          title: e.Adress + " " + e.CityName,
          start: e.DateStart,
          end: e.DateEnd,
          ...e,
        };
      })
    );
    setReqs(Req);
  }, [request]);

  //בעת רינדור עוברים על מערך הבקשות ומוסיפים למערך כל התאריכים
  useEffect(() => {
    console.log("third");

    // getDatesInRange(req[0].DateStart,req[0].DateEnd)
    let datesCatch = [];
    req &&
      req.length &&
      req.map((item, index) => {
        console.log("loop");
        let d1 = item.DateStart;
        let d2 = item.DateEnd;
        const dateOneRequest = getDatesInRange(d1, d2);
        dateOneRequest.map((e) => datesCatch.push(e));
        // console.log("end"+d2);

        // לא עובד
        // console.log(getDatesInRange(d1, d2));
        // Dates.push(getDatesInRange(d1, d2))
      });

    console.log(datesCatch);

    // alert("Dates"+Dates)
    // setDatess(Dates)
    // Dates.map((it, index) => {
    //   setShowTime(true)
    // })
  }, [req]);

  // const disabledDates = [

  //   new Date(2022, 7, 10),
  //   new Date(2022, 7, 16),
  // ];
  function getDate(dateString) {
    var date = new Date(dateString);
    const thisDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;

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
    <div className="App" dir="rtl">
      <div>
        {Datess &&
          Datess.length &&
          Datess.map((item, index) => {
            console.log(item);
          })}
      </div>
      {/* <Calendar
        className="calender"
        onChange={change}
         value={date}
        calendarType="Hebrew"
        locale="he"
        navigationAriaLive="polite"
        navigationAriaLabel="Go up"
        maxDetail="month"
        minDetail="month"
      /> */}

      <Calendar
        className="calender"
        events={activeDate}
        startAccessor="start"
        endAccessor="end"
        defaultDate={moment().toDate()}
        localizer={localizer}
        style={{ height: 500 }}
        messages={{
          next: "הבא",
          previous: "הקודם",
          today: "היום",
          month: "חודש",
          week: "שבוע",
          day: "יום",
          agenda: "הבקשות שלי",
        }}
        onSelectEvent={(events, date) => setCurrent(events)}
      />
      {current && (
        <>
          <div>{current.title}</div>
          <div>{new Date(current.start).toISOString().split("T")[0]}</div>
          <div>{new Date(current.end).toISOString().split("T")[0]}</div>
          <div>{`${current.Job} ${current.GenderPlace}`}</div>
        </>
      )}
    </div>
  );
}
export default connect(mapStateToProps)(Booking);
