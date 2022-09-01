import React ,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Date from '../../helpcomponents/Calender/date'
import DateM from '../../helpcomponents/Calender/dateM'
import './formC.css'


const CalenderForm = (props) => {
    
    
    return (
        <div style={{marginRight:"20%"}} className="myformc">       
       {/* <Form> */}
            {/* <Date className="calender" style={{marginRight:"10%",marginBottom:"5%",marginTop:"5%"}}></Date> */}
            <DateM  className="calender" style={{marginRight:"10%",marginBottom:"5%",marginTop:"5%"}}> </DateM>
            {/* <Calendar></Calendar> */}

 
       {/* </Form> */}
             
             
  
             
        </div>
    )
}
export default CalenderForm;
