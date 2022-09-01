import React, { useState,useRef,useEffect } from 'react';
import Calendar from 'react-calendar'
  ;
import 'react-calendar/dist/Calendar.css';
import './date.css'


const Calender = (props) => {
  const [value, setValue] = useState(new Date());
  const [date, setDate] = useState(new Date())
  const [showTime, setShowTime] = useState(false)
  const [daysCatch, setdaysCatch] = useState([])
  const candr=useRef()
  // const day = date.toDateString()
  

  useEffect(()=>{
    daysCatch.forEach(element => {
      // למצוא איך לעבור על התאריכים בקלנדר כדי להשוות את הערך למה שקיים עכשיו בלולאה
      
     // .react-calendar__tile--hasActive {

      
      

      
    });


  },[daysCatch])

  const fillArray = (e) => {
    console.log(e);
    setDate(e)
    setdaysCatch([...daysCatch, e])



  }

  return (
    <>

      <Calendar ref={candr} className="calender" onChange={fillArray} value={date} onClickDay={() => setShowTime(true)} />
      <div>
        {/* {date.length > 0 ? (
          <p>
            <span>Start:</span>
            {date[0].toDateString()}
            &nbsp;
            &nbsp;
            <span>End:</span>{date[1].toDateString()}
          </p>
        ) : ( */}
        <div>
          <span>Date:</span>{date.toDateString()}
          {daysCatch&&daysCatch.length&&daysCatch.map((item) => {
            <li>
            {item.toDateString()}
          </li>
          })}
        </div> 



  

      </div>
    </>
  );
}


export default Calender;