import Accordion from 'react-bootstrap/Accordion'
import React, { useState } from 'react';
// import './a.css'
// import Accordion from './aa';
import './try.css'
import Calendar from 'react-calendar'


const A = (props) => {

   
        const [date, setDate] = useState([
          new Date(2022, 8, 1),
          new Date(2022, 8, 15),
        ]);
      
        return (
          <div className='app'>
            <h1 className='text-center'>React Calendar with Range</h1>
            <div className='calendar-container'>
              <Calendar
                onChange={setDate}
                // selectRange={true}
                defaultValue={date}                                                     
              />
            </div>
          </div>
        );
      



   

}
export default A;





