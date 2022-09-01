import React, { useEffect, useRef, useState } from "react"
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Loadk from '../../helpcomponents/button/loadkeep'
import { Link, useNavigate } from 'react-router-dom'
import { Modal } from "react-bootstrap"
import './signup.css'
import p1 from '../../pictures/p1.png'
import profil from '../../img/profile.jpg'
import axios from 'axios'
import { createUser } from '../../../redux/actions/userActions';
import validator from 'validator'
// import Date from './Date/date'


// import Date from '../Date/date'
const S = (props) => {
    const [modalShow, setModalShow] = useState(true);
    const [image, setImage] = useState({ preview: '', data: '' })
    const [status, setStatus] = useState('')
    const [areaList, setAreList] = useState('')
    const [CityList, setCityList] = useState('')
    const checkPassword = useRef()
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [user, setUser] = useState(
        {
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
            Imag: profil,
            Communication: null,
            ActionsHistory: null,
            ValidatePass: null
        }
    )

    const uploadFile = async (e) => {

        // try {
        //     const res = await axios.post(
        //         "http://localhost:3030/User/createUser",
        //         formData
        //     );
        //     console.log(res);
        // } catch (ex) {
        //     console.log(ex);
        // }
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     let file = new FormData()
    //     file.append('file', image.data)

    //     const response = await axios.post('http://localhost:3030/image', file)
    //     if (response) setStatus(response.statusText)
    // }

    //     const handleFileChange = (e) => {
    //         const img = {
    //             preview: URL.createObjectURL(e.target.files[0]),
    //             data: e.target.files[0],

    //         }
    //         setFileName(e.target.files[0].name);
    //     setImage(img)
    // }
    const handleClick = () => setLoading(true);
    function saveArea(e) {
        console.log(e.currentTarget.selectedIndex);

        setAreaSelected(e.target.value)
        handleChange(e.target.name)
        setUser({ ...user, [e.target.name]: e.currentTarget.selectedIndex })
        user[e.target.name] = e.currentTarget.selectedIndex
        axios.get(`http://localhost:3000/City/getCitiesByArea/${e.currentTarget.selectedIndex}`).then((res) => {
            console.log(res);
            setCityList(res.data)
        })
    }
    useEffect(() => {
        debugger
        setUser(user)
        axios.get("http://localhost:3000/Location/getAllAreas").then((res) => {
            setAreList(res.data)
        })
    }, [])
    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    const forceUpdate = React.useCallback(
        () => {
            if (window.location.href.indexOf("signup") > -1) {

                setShowC(true)
            }
            debugger


            //setModalShow("!modalShow")
            console.log(modalShow)

        }, []);

    let navigate = useNavigate()
    const [showC, setShowC] = useState(false)
    // const { onHide } = props

    useEffect(() => {
        debugger
        // setModalShow(true)
        forceUpdate()
        // setS()

    }, [])


    async function setS() {
        debugger
        await setShowC(true)
        console.log(showC)

    }
    // function close() {
    //     setShowC(false)
    //     //setModalShow(false)

    //     navigate("/app")

    // }
    const [errorMessage, setErrorMessage] = useState({
        name: '',
        bbirthdate: '',
        email: '',
        phon: '',
        password: '',
        checkPassword: '',
        gender: '',
        status: '',
        diploma: '',
        job: '',
        area: '',
        city: '',
        connect: ''

    })
    const [typeJob, setTypeJob] = useState([{ typeJob: "גננ/ת" }, { typeJob: "גננ/ת חינוך מיוחד" }, { typeJob: "סייע/ת" }, { typeJob: "סייע/ת חינוך מיוחד" }, { typeJob: "מורה" }, { typeJob: "מורה חינוך מיוחד" }, { typeJob: "סייע/ת רפואי/ת" }, { typeJob: "מרצה" },])
    const [areaSelected, setAreaSelected] = useState("מרכז")
    const [cities, setCities] = useState([{ cityId: 1, cityName: "אלעד", areaName: "מרכז" }, { cityId: 2, cityName: "רכסים", areaName: "צפון" }, { cityId: 3, cityName: "אשדוד", areaName: "דרום" }])
    const [areas, setAreas] = useState([{ areaId: 1, areaName: "מרכז" }, { areaId: 2, areaName: "דרום" }, { areaId: 3, areaName: "צפון" }])
    const [isLoading, setLoading] = useState(false);
    const [checkAll, setCheckAll] = useState(false)
    const { dispatch } = props
    useEffect(() => {

        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }

    }, [isLoading]);
    function saveNewUser() {

        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);

        // בדיקות תקינות - א"א ללכת בלי לגמור למלא הכל.
        // if (user.Password != user.ValidatePass)
        //     alert(" !הסיסמאות לא תואמות, אנא אמת סיסמא שוב")
        // if(user.UserName!=null&&user.Password!=null&&user.ValidatePass!=null&&user.Diploma!=null&&user.Gender!=null&&user.BirthDate!=null&&user.PhoneNumber!=null&&user.AreaCode!=null&&user.CityCode!=null&&user.Mail!=null&&user.Status!=null&&user.Job!=null&&user.Communication!=null&&user.Imag!=null) 
        // {}


        let password = user.Password

        axios.get(`http://localhost:3000/User/CheckPasswordSign/${password}`).then((data) => {
            console.log(data.data)
            if (data.data == "unavailable") {
                setErrorMessage({ ...errorMessage, password: 'הסיסמא הזו כבר קיימת, אנא בחר סיסמא אחרת!' })
                console.log(data.data)

            }
            else {
                // if (handleChange()) {
                    if (user.ValidatePass !== null && user.ValidatePass !== "")
                        if (user.Password !== null && user.Password !== "")
                            if (user.Mail !== null && user.Mail !== "")
                                if (user.PhoneNumber !== null && user.PhoneNumber !== "")
                                    if (user.BirthDate !== null && user.BirthDate !== "")
                                        if (user.UserName !== null && user.UserName !== "")
                                            if (user.Job !== null && user.Job !== "")
                                                if (user.Communication !== null && user.Communication !== "")
                                                    if (user.Status !== null && user.Status !== "")
                                                        if (user.CityCode !== null && user.CityCode !== "")
                                                            if (user.AreaCode !== null && user.AreaCode !== "")
                                                                if (user.Gender !== null && user.Gender !== "")
                                                                    if (user.Diploma !== null && user.Diploma !== "") {
                                                                        setErrorMessage({ errorMessage, password: '' })
                                                                        formData.append({ "user": user })

                                                                        axios.post("http://localhost:3000/User/createUser", formData).then((res) => {
                                                                            console.log(res.data)
                                                                            // לשלוח לשמירה בסטור
                                                                            dispatch(createUser(user))
                                                                            if (!isLoading) {
                                                                                handleClick()
                                                                            }

                                                                        })
                                                                        alert(" הרשמתך בוצעה בהצלחה!")
                                                                        setShowC(false)
                                                                        navigate("/", { state: { data: true } })
                                                                        return true;


                                                                    }

                // }

                return alert("אנא מלא את כל הפרטים הנדרשים!")
            }

        }).catch((err) => {
            console.log(err);
        })



    }
    const passref = useRef()
    const passMoreref = useRef()





    function getClassName() {
        if (errorMessage.checkPassword == 'הסיסמא תקינה!') {
            return 'span checkPassword'
        }
        return 'span'
    }
    async function handleChange(e) {

        console.log(e);
        

        if (e.target.name === 'Imag') {
            setFile(e.target.files[0]);
            setFileName(e.target.files[0].name);
            setUser({ ...user, [e.target.name]: fileName })
        }
        else {

            setUser({ ...user, [e.target.name]: e.target.value })
            user[e.target.name] = e.target.value
        }

        if (e.target.name === 'Diploma') {
            if (user.Diploma === null || user.Diploma === "") {
                setErrorMessage({ ...errorMessage, diploma: 'בחר ערך!' })
                return false
            }
            else {
                await setErrorMessage({ errorMessage, diploma: '' })
            }
        }


        if (e.target.name === 'Gender') {
            if (user.Gender === null || user.Gender === "") {
                setErrorMessage({ ...errorMessage, gender: 'בחר ערך!' })
                return false
            }
            else {
                await setErrorMessage({ errorMessage, gender: '' })
            }
        }

        if (e.target.name === 'AreaCode') {
            if (user.AreaCode === null || user.AreaCode === "") {
                setErrorMessage({ ...errorMessage, area: 'בחר ערך!' })
                return false
            }
            else {
                await setErrorMessage({ errorMessage, area: '' })
            }
        }

        if (e.target.name === 'CityCode') {
            if (user.CityCode === null || user.CityCode === "") {
                setErrorMessage({ ...errorMessage, city: 'בחר ערך!' })
                return false
            }
            else {
                await setErrorMessage({ errorMessage, city: '' })
            }
        }

        if (e.target.name === 'Status') {
            if (user.Status === null || user.Status === "") {
                setErrorMessage({ ...errorMessage, status: 'בחר ערך!' })
                return false
            }
            else {
                await setErrorMessage({ errorMessage, status: '' })
            }
        }

        if (e.target.name === 'Communication') {
            if (user.Communication === null || user.Communication === "") {
                setErrorMessage({ ...errorMessage, connect: 'בחר ערך!' })
                return false
            }
            else {
                await setErrorMessage({ errorMessage, connect: '' })
            }
        }

        if (e.target.name === 'Job') {
            if (user.Job === null || user.Job === "") {
                setErrorMessage({ ...errorMessage, job: 'בחר ערך!' })
                return false
            }
            else {
                await setErrorMessage({ errorMessage, job: '' })
            }
        }

        if (e.target.name === 'UserName') {
            var regex = /\d/g;

            if (user.UserName === null || user.UserName === "") {
                setErrorMessage({ ...errorMessage, name: 'הכנס שם!' })
                return false
            }
            else {
                if (regex.test(user.UserName)) {

                    setErrorMessage({ ...errorMessage, name: 'הכנס שם ללא מספרים!' })
                    return false
                }
                else {
                    await setErrorMessage({ errorMessage, name: '' })

                }
            }

        }



        if (e.target.name === 'BirthDate') {
            if (user.BirthDate === null || user.BirthDate === "") {
                setErrorMessage({ ...errorMessage, bbirthdate: 'הכנס תאריך!' })
                return false
            } else {
                if (validator.isDate(user.BirthDate)) {
                    if (user.BirthDate > new Date().toISOString().split("T")[0]) {
                        setErrorMessage({ ...errorMessage, bbirthdate: 'תאריך לא חוקי!' })
                        return false
                    }
                    else {
                        setErrorMessage({ errorMessage, bbirthdate: '' })

                    }
                }

            }
        }




        if (e.target.name === 'PhoneNumber') {
            if (user.PhoneNumber === null || user.PhoneNumber === "") {
                setErrorMessage({ ...errorMessage, phon: 'הכנס טלפון!' })
                return false
            }
            else {

                if (!(user.PhoneNumber.match(/^[0-9]+$/))) {


                    setErrorMessage({ ...errorMessage, phon: 'הכנס מספרים בלבד!' })
                    return false
                }
                if ((user.PhoneNumber.length < 9)) {

                    setErrorMessage({ ...errorMessage, phon: 'המספר קצר מדי!' })
                    return false
                }

                else {
                    await setErrorMessage({ errorMessage, phon: '' })

                }
            }
        }


        if (e.target.name === 'Mail') {
            if (user.Mail === null || user.Mail === "") {
                setErrorMessage({ ...errorMessage, email: 'הכנס מייל!' })
                return false
            }
            else {

                if (!(user.Mail.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))) {

                    setErrorMessage({ ...errorMessage, email: 'כתובת מייל לא חוקית!' })
                    return false
                }
                else {
                    await setErrorMessage({ errorMessage, email: '' })

                }
            }

        }


        if (e.target.name === 'Password') {

            if (user.Password === null || user.Password === "") {
                setErrorMessage({ ...errorMessage, password: 'הכנס סיסמא!' })
                return false
            }
            if ((user.Password.length != 8)) {

                setErrorMessage({ ...errorMessage, password: 'הסיסמא קצרה מידי, אנא הכנס 8 ספרות!' })
                return false
            }
            // //בדיקה האם הסיסמא קיימת כבר במאגר הסיסמאות
            // if ((user.Password.match())) {


            //     setErrorMessage({ ...errorMessage, password: 'הסיסמא הזו קיימת כבר, אנא הכנס סיסמא אחרת!' })
            //     return false
            // }

            if (!(user.Password.match(/^[0-9]+$/))) {


                setErrorMessage({ ...errorMessage, password: 'הכנס מספרים בלבד!' })
                return false
            }

            else {
                await setErrorMessage({ errorMessage, password: '' })

            }

        }


        if (e.target.name === 'ValidatePass') {

            if (user.ValidatePass === null || user.ValidatePass === "") {
                setErrorMessage({ ...errorMessage, checkPassword: 'הכנס סיסמא!' })
                return false
            }
            else {
                if
                    ((user.Password !== user.ValidatePass)) {

                    setErrorMessage({ ...errorMessage, checkPassword: 'סיסמא שגויה!' })
                    return false
                }
                else {

                    await setErrorMessage({ errorMessage, checkPassword: 'הסיסמא תקינה!' })

                }


            }

        }
        return true

    }
    return (
        <>
            <div style={{ marginRight: "10%" }}>

                {/* <h3>Switch ברוכים הבאים לאתר</h3>
            <h3>אתר המשרת את הגננות בישראל בניהול מילואי מקום</h3> */}
                {showC &&
                    <Modal show={modalShow} {...props} size="lg" keyboard="false" backdrop="static" aria-labelledby="contained-modal-title-vcenter" centered >
                        <Modal.Header >
                            <Modal.Title id="contained-modal-title-vcenter" >
                                <img src={p1} className="psizee" />
                                <h3 style={{ textAlign: "center", fontSize: "20px", textShadow: "gray 0 1px 2px", display: "inline-block", marginTop: "2%", marginRight: "2%" }}>switch ברוכים הבאים לאתר <br /><br />:) אנו שמחים שבחרת להצטרף אלינו </h3>

                            </Modal.Title>
                        </Modal.Header>
                        <hr style={{ color: "lightblue", marginTop: "0%", height: "2px" }}></hr>
                        <Modal.Body>


                            <Form className="myforms" >

                                <Form.Label style={{ textShadow: "gray 0 1px 2px", fontSize: "17px", marginRight: "3.5%" }}>:להרשמה אנא מלא/י את הפרטים הבאים </Form.Label><br /><br />
                                <Row className="mb-3 input" dir="rtl">
                                    <Form.Group as={Col} controlId="">
                                        <Form.Label >שם מלא</Form.Label>
                                        <span className="span" >{errorMessage.name}</span>
                                        <Form.Control name="UserName" onChange={handleChange} type="" placeholder="הכנס שם פרטי ושם משפחה" />

                                    </Form.Group>

                                </Row>

                                <Row className="mb-3 input" dir="rtl">
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>מין</Form.Label>
                                        <span className="span" >{errorMessage.gender}</span>
                                        <Form.Select name="Gender" onChange={handleChange} defaultValue="בחר איזור:">
                                            <option></option>
                                            <option>נקבה</option>
                                            <option>זכר</option>

                                        </Form.Select>

                                    </Form.Group>
                                </Row>

                                <Row className="mb-3 input" dir="rtl">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label className="lable">תאריך לידה</Form.Label>
                                        <span className="span">{errorMessage.bbirthdate}</span>
                                        <Form.Control name="BirthDate" onChange={handleChange} type="date" formAction='dd/mm/yyyy' placeholder="הכנס תאריך לידה" max={new Date().toISOString().split("T")[0]} />


                                    </Form.Group>
                                </Row>

                                <Row className="mb-3 input" dir="rtl">
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label className="lable"> סטטוס</Form.Label>
                                        <span className="span" >{errorMessage.status}</span>
                                        <Form.Select name="Status" onChange={handleChange} defaultValue="בחר איזור:">
                                            <option></option>

                                            <option>ממלא/ת מקום</option>
                                            <option>מחפש/ת ממלא/ת מקום</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3 input" dir="rtl">
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label className="lable">תעודת הוראה</Form.Label>
                                        <span className="span" >{errorMessage.diploma}</span>
                                        <Form.Select name="Diploma" onChange={handleChange} defaultValue="בחר:">
                                            <option></option>

                                            <option>יש</option>
                                            <option>אין</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>


                                <Row className="mb-3 input" dir="rtl">
                                    <Form.Group as={Col} controlId="">
                                        <Form.Label className="lable">סוג תפקיד</Form.Label>
                                        <span className="span" >{errorMessage.job}</span>
                                        <Form.Select name="Job" onChange={handleChange} defaultValue="בחר איזור:">
                                            <option></option>

                                            {typeJob.map((item) => (
                                                <option key={item.typeJob}>{item.typeJob}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3 input" dir="rtl">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label className="lable">מספר טלפון</Form.Label>
                                        <span className="span">{errorMessage.phon}</span>
                                        <Form.Control name="PhoneNumber" onChange={handleChange} type="phoneNumber" minLength='9' maxLength='10' placeholder="הכנס מספר טלפון" />

                                    </Form.Group>
                                </Row>

                                <Row className="mb-3 input" dir="rtl">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label className="lable">כתובת מייל</Form.Label>
                                        <span className="span">{errorMessage.email}</span>
                                        <Form.Control name="Mail" onChange={handleChange} type="" placeholder="הכנס כתובת אימייל" />

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
                                        <Form.Label className="lable">איזור מגורים</Form.Label>
                                        <span className="span" >{errorMessage.area}</span>
                                        <Form.Select name="AreaCode" onChange={(e) => saveArea(e)} defaultValue="בחר איזור:">
                                            <option></option>

                                            {areaList && areaList.length && areaList.map((item) => (
                                                <option value={item.AreaCode}>{item.AreaName}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3 input" dir='rtl'>
                                    <Form.Group as={Col} controlId="">
                                        <Form.Label className="lable">עיר </Form.Label>
                                        <span className="span" >{errorMessage.city}</span>
                                        <Form.Select onChange={handleChange} name="CityCode" defaultValue="בחר עיר:">
                                            <option> </option>

                                            {CityList && CityList.length && CityList.map((item) => (
                                                <option value={item.CityCode}>{item.CityName}</option>
                                            ))}
                                            {/* {cities.filter(x => x.areaName === areaSelected).map((item) =>
                                <option key={item.cityId}>{item.cityName}</option>
                            )} */}
                                        </Form.Select>
                                    </Form.Group>
                                </Row>



                                {/* {area.current.value ? area.current.value : ""} */}


                                <Row className="mb-3 input" dir="rtl">
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label className="lable">דרכי ההתקשרות </Form.Label>
                                        <span className="span" >{errorMessage.connect}</span>
                                        <Form.Select name="Communication" onChange={handleChange} defaultValue="בחר איזור:">
                                            <option></option>

                                            <option>באתר בלבד</option>
                                            <option> באתר וב-email</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3 input" >
                                    {image.preview && <img src={image.preview} width='100' height='100' />}
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label className="lable">*תמונת פרופיל</Form.Label>
                                        <Form.Control name="Imag" onChange={handleChange} type="file" />


                                    </Form.Group>
                                </Row>

                                <Row className="mb-3 input" dir="rtl">
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label className="lable">סיסמה</Form.Label>
                                        <span className="span" >{errorMessage.password}</span>
                                        <Form.Control name="Password" onChange={handleChange} type="password" maxLength="8" placeholder="הקש סיסמא באורך של 8 מספרים" />

                                    </Form.Group>
                                </Row>

                                <Row className="mb-3 input" dir="rtl">
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label className="lable">אימות סיסמה</Form.Label>
                                        <span ref={checkPassword} className={getClassName()}>{errorMessage.checkPassword}</span>
                                        <Form.Control name="ValidatePass" onChange={handleChange} type="password" maxLength="8" placeholder="הקש שוב סיסמא" />

                                    </Form.Group>
                                </Row>

                                <Row className="mb-3 input" dir="rtl" >
                                    <Form.Label className="lable">*לא חובה</Form.Label>
                                </Row>



                                <Button className="button" style={{ width: "10%", marginRight: "43%", marginBottom: "5%" }} onClick={saveNewUser}>שמור</Button>
                            </Form>


                        </Modal.Body>







                    </Modal>}


            </div>
        </>
    )
}
export default S;