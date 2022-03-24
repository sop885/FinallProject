import React from "react"
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Loadk from '../button/loadkeep'
import './form.css'
// import Date from './Date/date'

// import Date from '../Date/date'
const F = (props) => {

    return (
        <div style={{marginRight:"32%"}}>
            
            {/* <h3>Switch ברוכים הבאים לאתר</h3>
            <h3>אתר המשרת את הגננות בישראל בניהול מילואי מקום</h3> */}

            <Form className="myform" >
            <br/> <h2  style={{textAlign:"center",fontSize:"20px",textShadow:"gray 0 1px 2px"}}> ברוכים הבאים לאתר switch<br/>:) אנו שמחים שבחרת להצטרף אלינו </h2>

            <br/><Form.Label  style={{textShadow:"gray 0 1px 2px",fontSize:"17px",marginRight:"3.5%"}}>:להרשמה אנא מלא/י את הפרטים הבאים </Form.Label><br/><br/>


               

                <Row className="mb-3" className="input" dir="rtl">
                    <Form.Group as={Col} controlId="">
                        <Form.Label>שם מלא</Form.Label>
                        <Form.Control type="" placeholder="הכנס שם פרטי ושם משפחה" />
                    </Form.Group>
                </Row>

                <Row className="mb-3" className="input" dir="rtl">
              <Form.Group as={Col} controlId="formGridState">
              <Form.Label>מין</Form.Label>
                        <Form.Select defaultValue="בחר איזור:">
                            <option>נקבה</option>
                            <option>זכר</option>
                            
                        </Form.Select>

                    </Form.Group>
             </Row>

                <Row className="mb-3" className="input" dir="rtl">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>תאריך לידה</Form.Label>
                        <Form.Control type="date" formAction='dd/mm/yyyy' placeholder="הכנס תאריך לידה"  max={new Date().toISOString().split("T")[0]} />
                     
                    </Form.Group>
                </Row>

                <Row className="mb-3" className="input" dir="rtl">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label> סטטוס</Form.Label>
                        <Form.Select defaultValue="בחר איזור:">
                            <option>ממלא/ת מקום</option>
                            <option>מחפש/ת ממלא/ת מקום</option>
                        </Form.Select>
                        </Form.Group>
               </Row>

               <Row className="mb-3" className="input" dir="rtl">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>תעודת הוראה</Form.Label>
                        <Form.Select defaultValue="בחר:">
                            <option>יש</option>
                            <option>אין</option>
                        </Form.Select>
                    </Form.Group>
                </Row>


               <Row className="mb-3" className="input" dir="rtl">
               <Form.Group as={Col} controlId="">
               <Form.Label>סוג תפקיד</Form.Label>
                        <Form.Select defaultValue="בחר איזור:">
                            <option>גננ/ת</option>
                            <option>סייע/ת</option>
                        </Form.Select>
                        </Form.Group>
              </Row>

              <Row className="mb-3" className="input" dir="rtl"> 
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>כתובת מייל</Form.Label>
                        <Form.Control type="email" placeholder="הכנס כתובת אימייל" />
                    </Form.Group>
                </Row>

             

                <Row className="mb-3" className="input" dir="rtl">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>מספר טלפון</Form.Label>
                        <Form.Control type="" placeholder="הכנס מספר טלפון" />
                    </Form.Group>
                </Row>
                <Row className="mb-3" className="input" dir="rtl">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>איזור מגורים</Form.Label>
                        <Form.Select defaultValue="בחר איזור:">
                            <option>מרכז</option>
                            <option>צפון</option>
                            <option>דרום</option>
                            
                        </Form.Select>
                    </Form.Group>
                </Row>
                          
               
               
               <Row className="mb-3" className="input" dir="rtl">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>דרכי ההתקשרות </Form.Label>                        
                        <Form.Select defaultValue="בחר איזור:">
                            <option>באתר בלבד</option>
                            <option> באתר וב-email</option>                           
                        </Form.Select>                   
                    </Form.Group>
            </Row>   

               <Row className="mb-3" className="input" dir="rtl">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>סיסמה</Form.Label>
                        <Form.Control type="password" placeholder="הקש סיסמא" />
                    </Form.Group>
                </Row>

                <Row className="mb-3" className="input" dir="rtl">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>אימות סיסמה</Form.Label>
                        <Form.Control type="password" placeholder="הקש שוב סיסמא" />
                    </Form.Group>
                </Row>

            <Row className="mb-3" className="input" dir="rtl">
                    <Form.Group as={Col} controlId="">
                        <Form.Label> שם משתמש ייחודי</Form.Label>
                        <Form.Control type="" placeholder="הכנס שם משתמש" />
                    </Form.Group>
                </Row>

               

            <Row className="mb-3" className="input" >
                    <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>תמונת פרופיל</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
               </Row>
               
            <Row className="mb-3" className="input" >

                  <Form.Group className="mb-3" id="formGridCheckbox">
                 {/* <Form.Check  type="checkbox" label="שמור פרטים לפעם הבאה" />   */}
                 <label>שמור פרטים לפעם הבאה   </label>
                 <Form.Check className="check" type="checkbox"/> 
                </Form.Group>              
                 </Row> 

            <Row  className="mb-3" className="input" style={{marginRight:"45%",marginBottom: "5%",width: "10%"}} >
                   <Loadk/>
                </Row>    
                
                  
            </Form>
           
        </div>
    )
}
export default F;