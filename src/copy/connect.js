import React, { useState, useRef } from "react"
import { Modal, Button } from "react-bootstrap"
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './ConnectForm.css'
import { Link, useNavigate } from 'react-router-dom'
import p1 from '../../pictures/p1.png'
import Signup from '../Form.signup/signup'
import axios from 'axios';
import { connect } from 'react-redux'
import { setRequests } from '../../../redux/actions/requestsAction'
import { createUser } from '../../../redux/actions/userActions'



export default connect()(function Login(props) {
    let navigate = useNavigate()
    const { dispatch, onHide } = props
    const [modalShow, setModalShow] = useState(true);

    const name = useRef('');
    const pass = useRef('')
debugger
    async function close() {
        
        await onHide(false)
        await setModalShow(false)
        await navigate("/signup")


    }
    // function open() {
    //     setModalShow(false)


    // }
    function checkIfValid() {
        if (name.current.value == null || name.current.value == "") {
            alert("הכנס שם משתמש!")
            return false
        }

        if (pass.current.value == null || pass.current.value == "") {
            alert("הכנס סימסמא!")
            return false
        }


        axios.get(`http://localhost:3000/User/CheckConnect/${name.current.value}/${pass.current.value}`).then((data) => {
            console.log(data.data)

            if (data.data === "unvalid")
                alert("משתמש זה אינו קיים, אנא נסה שוב!")

            else click(data.data)
        }
        )
    }
    function click(data) {
        //לשמור את היוזר בתוך הסטור
        let requests = []
        dispatch(createUser(data));
        //   dispatch(updateUser(data.data));
        let cities = [], areas = []
        axios.get(`http://localhost:3000/Action/getUserActions/${data.UserId}`).then((resr) => {
            //     //למלא עם מה שחוזר איפשהו
            axios.get(`http://localhost:3000/City/getAllCity`).then((resC) => {
                //         console.log(res);
                cities = resC.data
                axios.get("http://localhost:3000/Location/getAllAreas").then((resA) => {
                    areas = resA.data
                    requests = resr.data.map(element => {
                        element.CityName = cities[element.CityId - 1].CityName
                        element.AreaName = areas[element.AreaId - 1].AreaName
                        // if (element.ReplacesUserId != null) {
                        //     axios.get(`http://localhost:3000/Action/findUser/${element._id}`).then((resa) => {
                        //         element.ReplacesUserId = resa.data
                        //     })
                        // }
                        return element
                    });
                })
            })
            requests.map(e => {
                dispatch(setRequests(e));
            })

            props.onHide()
        }).catch((err) => {
            console.log(err);
        })
    }
    // closeButton
    return (
        <>
            <Modal keyboard="false" backdrop="static" {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header >
                    <Modal.Title id="contained-modal-title-vcenter" >
                        <img src={p1} className="psize" ></img>
                    </Modal.Title>

                </Modal.Header >
                <hr style={{ color: "lightblue", marginTop: "0%", height: "2px" }}></hr>
                <Modal.Body >
                    <h3 className="titlt">Switch-ברוכים הבאים ל</h3>
                    <h5 className="titlt">אתר המשרת את עובדי ההוראה בישראל בניהול מילואי מקום</h5>


                    <h6 className="connecting" ><b>להתחברות:</b></h6>

                    <Form className="connecting">
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="">
                                <Form.Label style={{ color: "black" }}>הכנס שם משתמש:</Form.Label>
                                <Form.Control ref={name} className="iwidth" type="" placeholder="Enter UserName" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label style={{ color: "black" }}>הכנס סיסמה:</Form.Label>
                                <Form.Control ref={pass} className="iwidth" type="password" placeholder="Enter Password" maxLength="8" />
                            </Form.Group>
                        </Row>
                        <label><u style={{ color: "rgba(13, 88, 252, 0.822)" }}>לשחזור סיסמה</u></label>
                    </Form>


                </Modal.Body>
                {/* <Modal.Footer> */}
                <Button onClick={checkIfValid} className="button" style={{ width: "10%", }}><b> כניסה</b></Button>
                {/* </Modal.Footer>  */}
                <br />
                <div ><h5 className="right" >?עוד לא חבר<br /><u style={{ color: "rgba(13, 88, 252, 0.822)" }}>
                    <Button className="b" onClick={close} ><u>הירשם כאן</u></Button>
                </u></h5></div>

            </Modal>
            {/* {!modalShow? <Signup>
         show={modalShow}
        onHide={() => setModalShow(false)}></Signup>:''} */}
        </>
    )
})