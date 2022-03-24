import React from "react"
import { Modal,Button } from "react-bootstrap"
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './ConnectForm.css'
import p1 from '../pictures/p1.png'
export default  function Login(props){

    return (

        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" >
                    <img src={p1} className="psize" ></img>
                </Modal.Title>
                 
            </Modal.Header>
           <hr style={{color:"lightblue",marginTop:"0%",height:"2px"}}></hr>
            <Modal.Body>
                <h3 className="titlt">Switch ברוכים הבאים לאתר </h3>
                <h5 className="titlt">אתר המשרת את הגננות בישראל בניהול מילואי מקום</h5> 

              
                <h6 className="connecting" >להתחברות:</h6>
                           
               <Form className="connecting">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="">
                        <Form.Label style={{color:"black"}}>הכנס שם משתמש:</Form.Label>
                        <Form.Control className="iwidth" type="" placeholder="Enter UserName" />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label style={{color:"black"}}>הכנס סיסמה:</Form.Label>
                        <Form.Control className="iwidth" type="password" placeholder="Enter Password" />
                    </Form.Group>
                </Row>
                <label><u style={{color:"rgba(13, 88, 252, 0.822)"}}>לשחזור סיסמה</u></label>
                </Form> 
             
                
            </Modal.Body> 
            {/* <Modal.Footer> */}
                <Button onClick={props.onHide} className="button" style={{width:"10%",}}><b> כניסה</b></Button>          
            {/* </Modal.Footer>  */}
               <br/>               
                <h5 className="right">?עוד לא חבר<br/><u style={{color:"rgba(13, 88, 252, 0.822)"}}>הירשם כאן</u></h5>
              
        </Modal>
    )
}