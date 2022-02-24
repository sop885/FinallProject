import React ,{useState} from "react"
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Load from '../button/load'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import RangeSlider from 'react-bootstrap-range-slider'



const FillReqForm = (props) => {
    const [val,setVal] = useState(50)
    return (
        <div>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="">
                        <Form.Label>התאריך המיועד</Form.Label>
                        <Form.Control type="" placeholder="Enter a date" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="">
                        <Form.Label>עד התאריך</Form.Label>
                        <Form.Control type="" placeholder="Enter a date" />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>איזור המוסד:</Form.Label>
                        <Form.Select defaultValue="בחר איזור:">
                            <option>צפון</option>
                            <option>דרום</option>
                            <option>מרכז</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="">
                        <Form.Label>כתובת</Form.Label>
                        <Form.Control type="" placeholder="Enter an adress" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Label>מגזר המוסד</Form.Label>
                    <Form.Select defaultValue="בחר:">
                        <option>בנים</option>
                        <option>בנות</option>
                        <option>מעורב</option>

                    </Form.Select>

                </Row>
                <Row className="mb-3">
                    <Form.Label>השעות המבוקשות:</Form.Label>

                    <Form.Control type="" placeholder="מהשעה:" />
                    <Form.Control type="" placeholder="עד השעה:" />


                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="">
                        <Form.Label>גילאי הילדים</Form.Label>
                        <Form.Control type="" placeholder="Enter an age" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="">
                        <Form.Label>תעריף לשעה:</Form.Label>
                        <br></br>
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

                <Row>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>התפקיד המבוקש</Form.Label>
                        <Form.Select defaultValue="בחר :">
                            <option>גננ/ת</option>
                            <option>סייע/ת </option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>המין המבוקש</Form.Label>
                        <Form.Select defaultValue="בחר :">
                            <option>זכר</option>
                            <option>נקבה</option>
                            <option>לא משנה</option>

                        </Form.Select>
                    </Form.Group>
                </Row>
                <InputGroup>
                    <InputGroup.Text>הערות:</InputGroup.Text>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
            </Form>
            <button placeholder="המשך"> </button>
        </div>
    )
}
export default FillReqForm;