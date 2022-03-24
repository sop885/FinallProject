import React ,{useState,useRef} from "react"
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Loadc from '../button/loadcontinue'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import RangeSlider from 'react-bootstrap-range-slider'
import './formFillRequest.css'


const FillReqForm = (props) => {
    const [val,setVal] = useState(50)
    const [minDate,setMinDate] = useState('')
    // const minDate=useRef('2022-03-30')
    function check() {
        debugger
        console.log(minDate.current.value)
    }
    return (
        
        <div style={{marginRight:"32%"}}>
            <Form className="myform" >
                
             <h1 className="input" style={{marginRight:"40%",fontSize:"20px"}}>פתיחת בקשה </h1>
            <br/><Form.Label  style={{marginRight:"3.5%",textShadow:"gray 0 1px 2px",fontSize:"17px"}}>:אנא מלא/י את הפרטים הבאים</Form.Label><br/><br/>

                <Row className="mb-3" className="input">
                    <Form.Group as={Col} controlId="">
                        <Form.Label>התאריך המיועד</Form.Label>                
                         <Form.Control  type="date" formAction='dd/mm/yyyy' placeholder="Enter a date" onChange={(e)=>setMinDate(e.target.value)}   min={new Date().toISOString().split("T")[0]}/>
                    </Form.Group>
                </Row>

                <Row className="mb-3" className="input">
                    <Form.Group as={Col} controlId="">
                        <Form.Label>עד התאריך</Form.Label>
                        <Form.Control type="date" formAction='dd/mm/yyyy' placeholder="Enter a date"  min={minDate}/>
                    </Form.Group>
                </Row>
                <br/>
                <Row className="input" dir='rtl'>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>איזור המוסד</Form.Label>
                        <Form.Select defaultValue="בחר איזור:">
                            <option>צפון</option>
                            <option>דרום</option>
                            <option>מרכז</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3" className="input" dir='rtl'>
                    <Form.Group as={Col} controlId="">
                        <Form.Label>כתובת</Form.Label>
                        <Form.Control type="" placeholder="הכנס כתובת" />
                    </Form.Group>
                </Row>
                <br/>

                <Row className="mb-3" className="input" dir='rtl'>
                <Form.Group as={Col} controlId="">
                    <Form.Label>מגזר המוסד</Form.Label>
                    <Form.Select defaultValue="בחר:">
                        <option>בנים</option>
                        <option>בנות</option>
                        <option>מעורב</option>

                    </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3" className="input" dir='rtl'>
                    <Form.Group as={Col} controlId="">
                        <Form.Label>גילאי הילדים</Form.Label>
                        <Form.Control type="number" min="3" max="8" placeholder="הכנס גיל" />
                    </Form.Group>
                </Row>
                <br/>

                <Row className="mb-3" className="input"> 
                <Form.Group as={Col} controlId="">
                    <Form.Label>שעת התחלת הפעילות במוסד </Form.Label>
                    <Form.Control type="time" placeholder="מהשעה:" />  
                    </Form.Group>                                           
                </Row>

                <Row className="mb-3" className="input"> 
                <Form.Group as={Col} controlId="">              
                <Form.Label>שעת סיום הפעילות במוסד </Form.Label>
                    <Form.Control type="time" placeholder="עד השעה:" /> 
                   </Form.Group>                                            
                </Row>
                   <br/>     
               

                <Row className="mb-3" className="input" dir='rtl'>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>התפקיד המבוקש</Form.Label>
                        <Form.Select defaultValue="בחר :">
                            <option>גננ/ת</option>
                            <option>סייע/ת </option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3" className="input" dir='rtl'>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>המין המבוקש</Form.Label>
                        <Form.Select defaultValue="בחר :">
                            <option>זכר</option>
                            <option>נקבה</option>
                            <option>לא משנה</option>

                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-3" className="input" style={{marginRight:"25%",marginTop:"2%",textAlign:"center"}}>
                    <Form.Group as={Col} controlId="">
                        <Form.Label>תעריף משוער לשעה</Form.Label> <br/>                      
                        <RangeSlider
                            value={val}
                            onChange={(e) => setVal(e.target.value)}
                            min={30}
                            max={200}
                            // size={'lg'}
                            // tooltip={'on'}
                        />
                    </Form.Group>
                </Row>
                <br/>
                <Row className="mb-3" className="input" style={{width:"87%"}}>
                <InputGroup>                                 
                     <FormControl as="textarea" aria-label="With textarea" />
                      <InputGroup.Text>:הערות</InputGroup.Text>
                      
                </InputGroup>
                </Row>
                

                <Row  className="mb-3" className="input" style={{marginRight:"45%",  marginTop:"3%",marginBottom: "5%",width: "10%"}} >
                   <Loadc/>
                </Row>                 
            </Form>
                 
        </div>
    )
}
export default FillReqForm;