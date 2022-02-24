import React from "react"
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Load from '../button/load'

// import Date from '../Date/date'
const F = (props) => {

    return (
        <div>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="">
                        <Form.Label>הכנס שם משתמש</Form.Label>
                        <Form.Control type="" placeholder="Enter UserName" />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>הכנס סיסמה:</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>אמת סיסמה:</Form.Label>
                        <Form.Control type="password" placeholder="Check Password" />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>בחר סטטוס</Form.Label>
                        <Form.Select defaultValue="בחר איזור:">
                            <option>ממלא/ת מקום</option>
                            <option>מעוניין במילואי מקום</option>
                        </Form.Select>

                        <Form.Select defaultValue="בחר איזור:">
                            <option>גננ/ת</option>
                            <option>סייע/ת</option>
                        </Form.Select>

                        <Form.Select defaultValue="בחר איזור:">
                            <option>זכר</option>
                            <option>נקבה</option>
                        </Form.Select>

                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>תעודת הוראה</Form.Label>
                        <Form.Select defaultValue="בחר:">
                            <option>יש</option>
                            <option>אין</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>כתובת מייל</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>פלאפון:</Form.Label>
                        <Form.Control type="" placeholder="Enter Phone" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>פלאפון:</Form.Label>
                        <Form.Control type="" placeholder="Enter Phone" />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>איזור מגורים</Form.Label>
                        <Form.Select defaultValue="בחר איזור:">
                            <option>צפון</option>
                            <option>דרום</option>
                            <option>מרכז</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group controlId="formFile" className="mb-3">

                        <Form.Control type="file" />
                    </Form.Group>
               </Row>
                <Row>  
            </Row>          

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="שמור פרטים לפעם הבאה" />
                </Form.Group>
                
                <Load></Load>
            </Form>
        </div>
    )
}
export default F;