import React ,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Date from '../../helpcomponents/Calender/date'
import DateM from '../../helpcomponents/Calender/dateM'
import './formC.css'
import Try from'../../helpcomponents/Calender/try'

const CalenderForm = (props) => {
    
    
    return (
        <div style={{marginRight:"20%"}} className="myformc">  
           <br /> <h2 style={{ textAlign: "center", fontSize: "20px", textShadow: "gray 0 1px 2px" }}> לוח השנה שלי</h2>         
            {/* <Form> */}
            {/* <Date className="calender" style={{marginRight:"10%",marginBottom:"5%",marginTop:"5%"}}></Date> */}
            {/* <DateM  className="calender" style={{marginRight:"10%",marginBottom:"5%",marginTop:"5%"}}> </DateM> */}
            <Try></Try>
            {/* <Calendar></Calendar> */}

 
       {/* </Form> */}
             
             
  
             
        </div>
    )
}
export default CalenderForm;
