import React, { useRef, useState,useEffect } from "react"
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Loadk from '../../helpcomponents/button/loadkeep'
import axios from 'axios';
import './form.css'
import validator from 'validator'
// import Date from './Date/date'

// import Date from '../Date/date'
const F = (props) => {

    // let FullName = useRef()
    // let area = useRef()
    // let mail = useRef()
    // let phoneNumber = useRef()
    // let job = useRef()
    // let diploma = useRef()
    // let status = useRef()
    // let dateOfBirth = useRef()
    // let Gender = useRef()
    // let img = useRef()
    // let passwordAgain = useRef()
    // let password = useRef()
    // let communication = useRef()
    // let city = useRef()
    const [image, setImage] = useState({ preview: '', data: '' })
    const [status, setStatus] = useState('')
    const [areaList,setAreList]=useState('')
    useEffect(() => {
            axios.get("http://localhost:3000/Location/getAllAreas").then((res)=>{
                setAreList(res.data)
                


            })
        }, [])




    const handleSubmit = async (e) => {
        e.preventDefault()
        let file = new FormData()
        file.append('file', image.data)

        const response = await axios.post('http://localhost:3030/image', file)
        if (response) setStatus(response.statusText)
    }

    const handleFileChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        setImage(img)
    }


    const [errorMessage, setErrorMessage] = useState({
        name: '',
        bbirthdate: '',
        email: '',
        phon: '',
        password:''
    })

 
    const [areaSelected, setAreaSelected] = useState("מרכז")
    const [cities, setCities] = useState([{ cityId: 1, cityName: "אלעד", areaName: "מרכז" }, { cityId: 2, cityName: "רכסים", areaName: "צפון" }, { cityId: 3, cityName: "אשדוד", areaName: "דרום" }])
    const [areas, setAreas] = useState([{ areaId: 1, areaName: "מרכז" }, { areaId: 2, areaName: "דרום" }, { areaId: 3, areaName: "צפון" }])
    function saveArea(areaName) {
        setAreaSelected(areaName)
        // handleChange(areaName)
        user[areaName] = areaName
    }
    function handleChange(e) {
        if (e.target.name == 'Imag') {
            handleFileChange()
            handleSubmit()
        }
        console.log(e);
        user[e.target.name] = e.target.value

    }
    //
    const passref = useRef()
    const passMoreref = useRef()


    let user = {
        UserName: null,
        Password: null,
        Diploma: null,
        Gender: null,
        BirthDate: null,
        PhoneNumber: null,
        AreaCode: null,
        CityCode: null,
        Mail: null,
        Status: null,
        Job: null,
        Imag: null,
        Communication: null,
        ActionsHistory: null,
        ValidatePass: null


    }

    async function check() {
        debugger
        var regex = /\d/g;
        if (user.UserName === "") {
            setErrorMessage({ ...errorMessage, name: '!הכנס שם מלא' })
            return false
        }
        else{
            if (regex.test(user.UserName)) {
                
                setErrorMessage({ ...errorMessage, name: 'הכנס שם ללא מספרים' })
                return false
            }
        }
        if (user.BirthDate === "") {
            setErrorMessage({ ...errorMessage, bbirthdate: '!הכנס תאריך' })
            return false
        } else {
            if (validator.isDate(user.BirthDate)) {
                if (user.BirthDate< new Date().toISOString().split("T")[0]) {
                    setErrorMessage({ ...errorMessage, bbirthdate: '!תאריך לא חוקי' })
                    return false
                }
                else {
                    setErrorMessage({ ...errorMessage, bbirthdate: '' })

                }
            } else {
                setErrorMessage({ ...errorMessage, bbirthdate: '!תאריך לא חוקי' })
                return false
            }
        }
        if (user.Mail === "") {
            setErrorMessage({ ...errorMessage, email: '!הכנס מייל' })
            return false
        }
        if (user.Password === "") {
            setErrorMessage({ ...errorMessage, password: '!הכנס סיסמא' })
            return false
        }
        if (user.PhoneNumber === "") {
            setErrorMessage({ ...errorMessage, phon: '!הכנס מספר טלפון' })
            return false
        }
        return true
    }
    return (
        <div style={{ marginRight: "10%" }}>

            {/* <h3>Switch ברוכים הבאים לאתר</h3>
            <h3>אתר המשרת את הגננות בישראל בניהול מילואי מקום</h3> */}

            <Form className="myform" >
                <br /> <h2 style={{ textAlign: "center", fontSize: "20px", textShadow: "gray 0 1px 2px" }}>:) ברוכים הבאים לאיזור האישי </h2>

                <br /><Form.Label style={{ textShadow: "gray 0 1px 2px", fontSize: "17px", marginRight: "3.5%" }}>באפשרותך לשנות את פרטיך בכל עת על ידי שמירת השינויים </Form.Label><br /><br />




                <Row className="mb-3 input" dir="rtl">
                    <Form.Group as={Col} controlId="">
                        <Form.Label>שם מלא</Form.Label>
                        <Form.Control name="UserName" onChange={handleChange} type="" placeholder="הכנס שם פרטי ושם משפחה" />
                        <span style={{
                            color: 'red',
                        }}>{errorMessage.name}</span>
                    </Form.Group>
                </Row>

                <Row className="mb-3 input" dir="rtl">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>מין</Form.Label>
                        <Form.Select name="Gender" onChange={handleChange} defaultValue="בחר איזור:">
                            <option></option>
                            <option>נקבה</option>
                            <option>זכר</option>

                        </Form.Select>

                    </Form.Group>
                </Row>

                <Row className="mb-3 input" dir="rtl">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>תאריך לידה</Form.Label>
                        <Form.Control name="BirthDate" onChange={handleChange} type="date" formAction='dd/mm/yyyy' placeholder="הכנס תאריך לידה" max={new Date().toISOString().split("T")[0]} />
                        <span style={{
                            color: 'red',
                        }}>{errorMessage.bbirthdate}</span>

                    </Form.Group>
                </Row>

                <Row className="mb-3 input" dir="rtl">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label> סטטוס</Form.Label>
                        <Form.Select name="Status" onChange={handleChange} defaultValue="בחר איזור:">
                            <option></option>

                            <option>ממלא/ת מקום</option>
                            <option>מחפש/ת ממלא/ת מקום</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3 input" dir="rtl">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>תעודת הוראה</Form.Label>
                        <Form.Select name="Diploma" onChange={handleChange} defaultValue="בחר:">
                            <option></option>

                            <option>יש</option>
                            <option>אין</option>
                        </Form.Select>
                    </Form.Group>
                </Row>


                <Row className="mb-3 input" dir="rtl">
                    <Form.Group as={Col} controlId="">
                        <Form.Label>סוג תפקיד</Form.Label>
                        <Form.Select name="Job" onChange={handleChange} defaultValue="בחר איזור:">
                            <option></option>

                            <option>גננ/ת</option>
                            <option>סייע/ת</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3 input" dir="rtl">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>מספר טלפון</Form.Label>
                        <Form.Control name="PhoneNumber" onChange={handleChange} type="" placeholder="הכנס מספר טלפון" />
                        <span style={{
                            color: 'red',
                        }}>{errorMessage.phon}</span>
                    </Form.Group>
                </Row>

                <Row className="mb-3 input" dir="rtl">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>כתובת מייל</Form.Label>
                        <Form.Control name="Mail" onChange={handleChange} type="email" placeholder="הכנס כתובת אימייל" />
                        <span style={{
                            color: 'red',
                        }}>{errorMessage.email}</span>
                    </Form.Group>
                </Row>




                {/* <Row className="mb-3 input" dir="rtl">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>איזור מגורים</Form.Label>
                        <Form.Select ref={area} defaultValue="בחר איזור:">
                            <option>מרכז</option>
                            <option>צפון</option>
                            <option>דרום</option>

                        </Form.Select>
                    </Form.Group>
                </Row> */}
                <br />
                <Row className="mb-3 input" dir='rtl'>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>איזור מגורים</Form.Label>
                        <Form.Select name="AreaCode" onChange={(e) => saveArea(e.target.value)} defaultValue="בחר איזור:">
                            <option></option>

                            {areaList&&areaList.length&&areaList.map((item) => (
                                <option onSelect={getCities} key={item.AreaCode}>{item.AreaName}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3 input" dir='rtl'>
                    <Form.Group as={Col} controlId="">
                        <Form.Label>עיר </Form.Label>
                        <Form.Select onChange={handleChange} name="CityCode" defaultValue="בחר עיר:">
                            <option> </option>

                            {/* {cities.filter(x => x.areaName === areaSelected).map((item) =>
                                <option key={item.cityId}>{item.cityName}</option>
                            )} */}
                        </Form.Select>
                    </Form.Group>
                </Row>



                {/* {area.current.value ? area.current.value : ""} */}


                <Row className="mb-3 input" dir="rtl">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>דרכי ההתקשרות </Form.Label>
                        <Form.Select name="Communication" onChange={handleChange} defaultValue="בחר איזור:">
                            <option></option>

                            <option>באתר בלבד</option>
                            <option> באתר וב-email</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3 input" dir="rtl">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>סיסמה</Form.Label>
                        <Form.Control name="Password" onChange={handleChange} type="password" placeholder="הקש סיסמא" />
                        <span style={{
                            color: 'red',
                        }}>{errorMessage.password}</span>
                    </Form.Group>
                </Row>

                <Row className="mb-3 input" dir="rtl">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>אימות סיסמה</Form.Label>
                        <Form.Control name="ValidatePass" onChange={handleChange} type="password" placeholder="הקש שוב סיסמא" />
                        {/* <span style={{
                            color: 'red',
                        }}>{errorMessage.fromDate}</span> */}
                    </Form.Group>
                </Row>

                <Row className="mb-3 input" >
                    {image.path && <img src={image.path} width='100' height='100' />}
                    <Form.Group onSubmit={handleSubmit} controlId="formFile" className="mb-3">
                        <Form.Label>תמונת פרופיל</Form.Label>
                        <Form.Control name="Imag" onChange={handleChange} type="file" />


                    </Form.Group>
                </Row>

                <Row className="mb-3 input" >

                </Row>
                {/*                
            <Row className="mb-3 input" >

                  <Form.Group className="mb-3" id="formGridCheckbox">                
                 <label>שמור פרטים לפעם הבאה</label>
                 <Form.Check className="check" type="checkbox"/> 
                </Form.Group>              
                 </Row>  */}





                <Row className="mb-3 input" style={{ marginRight: "45%", marginBottom: "5%", width: "10%" }} >
                    <Loadk user={user} checkFunc={check}/>
                </Row>
                {/*  */}

            </Form>

        </div>
    )
}
export default F;