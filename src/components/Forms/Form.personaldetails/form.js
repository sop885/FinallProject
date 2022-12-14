import React, { useRef, useState, useEffect } from "react"
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Loadk from '../../helpcomponents/button/loadkeep'
import axios from 'axios';
import './form.css'
import validator from 'validator'
import { FormControl } from "react-bootstrap"
import { updateUser } from '../../../redux/actions/userActions';
import { connect, useSelector } from "react-redux"
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom'

// import Date from './Date/date'

// import Date from '../Date/date'
function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}
function mapStateToProps(state) {
    return {
        currentUser: state.users.user
    }
}
export default connect(mapStateToProps)(function F(props) {
    const { currentUser } = props
    const [user, setUser] = useState(currentUser)
    // const [user, setUser] = useState()
    useEffect(() => {

        setUser(currentUser)

    }, [currentUser])
    let navigate = useNavigate()


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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [image, setImage] = useState({ preview: '', data: '' })
    const [status, setStatus] = useState('')
    const [areaList, setAreList] = useState('')
    const [CityList, setCityList] = useState('')
    const checkPassword = useRef()

    const [typeJob, setTypeJob] = useState([{ typeJob: "גננ/ת" }, { typeJob: "גננ/ת חינוך מיוחד" }, { typeJob: "סייע/ת" }, { typeJob: "סייע/ת חינוך מיוחד" }, { typeJob: "מורה" }, { typeJob: "מורה חינוך מיוחד" }, { typeJob: "סייע/ת רפואי/ת" }, { typeJob: "מרצה" },])


    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
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

    useEffect(() => {
        debugger
        setUser(currentUser)
        axios.get("http://localhost:3000/Location/getAllAreas").then((res) => {
            setAreList(res.data)
        })

    }, [])




    const handleSubmit = async (e) => {
        e.preventDefault()
        debugger
        let file = new FormData()
        file.append('file', image.data)

        await axios.get('http://localhost:3000/User/UpdateImageUser', file).then(res => {
            console.log(res.data)
        })
        // if (response) setStatus(response.statusText)
    }

    const handleFileChange = (e) => {
        debugger
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
        setUser({ ...user, [e.target.name]: fileName })
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        formData.append("fileName", e.target.files[0].name);
        //  axios.get('http://localhost:3000/User/UpdateImageUser', formData).then(res => {
        //         console.log(res.data)
        //     })
        // const img = {
        //     preview: URL.createObjectURL(e.target.files[0]),
        //     data: e.target.files[0],
        // }
        // setImage({ ...image, preview: URL.createObjectURL(e.target.files[0]) })
        // setImage({ ...image, data: e.target.files[0] })
    }



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

    function DeleteUser() {
        let UserId = user.UserId


        axios.delete(`http://localhost:3000/User/deleteUser/${UserId}`).then((res) => {
            console.log(res.data)
            // לשלוח לשמירה בסטור
            dispatch(updateUser({}))
            if (!isLoading) {
                handleClick()
            }
            navigate("/signup")

            //  currentUser={user}
            // setUser(currentUser)
            alert("המשתמש נמחק בהצלחה!")
        }).catch(err => console.log(err))



    }



    function updateUsers() {
        debugger
        // בדיקות תקינות - א"א ללכת בלי לגמור למלא הכל.
        // if (user.Password != user.ValidatePass)
        //     alert(" !הסיסמאות לא תואמות, אנא אמת סיסמא שוב")


        // if(user.UserName!=null&&user.Password!=null&&user.ValidatePass!=null&&user.Diploma!=null&&user.Gender!=null&&user.BirthDate!=null&&user.PhoneNumber!=null&&user.AreaCode!=null&&user.CityCode!=null&&user.Mail!=null&&user.Status!=null&&user.Job!=null&&user.Communication!=null&&user.Imag!=null) 
        // {}
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);

        let UserId = user.UserId
        let password = user.Password

        axios.get(`http://localhost:3000/User/CheckPassword/${UserId}/${password}`).then((data) => {
            console.log(data.data)
            if (data.data == "unavailable") {
                setErrorMessage({ ...errorMessage, password: 'הסיסמא הזו כבר קיימת, אנא בחר סיסמא אחרת!' })
                console.log(data.data)

            }
            else {
                if (handleChange()) {
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
                                                                        Object.keys(user).map(key =>
                                                                            formData.append(key, user[key])
                                                                        )
                                                                        axios.put(`http://localhost:3000/User/updateUser/${UserId}`, formData).then((res) => {
                                                                            console.log(res.data)
                                                                            // לשלוח לשמירה בסטור
                                                                            axios.get(`http://localhost:3000/User/CheckConnect/${user.UserName}/${user.Password}`).then((data) => {
                                                                                console.log(data.data)

                                                                                dispatch(updateUser(data.data))
                                                                                if (!isLoading) {
                                                                                    handleClick()
                                                                                }
                                                                            })



                                                                            //  currentUser={user}
                                                                            // setUser(currentUser)

                                                                        })

                                                                        alert("השינויים נשמרו בהצלחה!")
                                                                        return true;

                                                                    }

                }

                return alert("אנא מלא את כל הפרטים הנדרשים!")
            }

        }).catch((err) => {
            console.log(err);
        })
    }


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

    const passref = useRef()
    const passMoreref = useRef()



    // async function check() {
    //     let UserId = user.UserId
    //     let password = user.Password

    //     axios.get(`http://localhost:3000/User/CheckPassword/${UserId}/${password}`).then((data) => {
    //         console.log(data.data)
    //         if (data.data == "unavailable") {
    //             setErrorMessage({ ...errorMessage, password: 'הסיסמא הזו כבר קיימת, !אנא בחר סיסמא אחרת' })
    //             return false
    //         }
    //         return true
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    //     if (handleChange()) {



    //     }
    //     return alert("אנא מלא את כל הפרטים הנדרשים!")

    // }

    function getClassName() {
        if (errorMessage.checkPassword == 'הסיסמא תקינה!') {
            return 'span checkPassword'
        }
        return 'span'
    }
    async function handleChange(e) {

        if (e.target.name === 'Imag') {
            handleFileChange(e)
            // handleSubmit(e)

        }
        else {
            // if (e.target.name === 'ValidatePass') {
            //    if(errorMessage.checkPassword=='הסיסמא תקינה!'){
            //        checkPassword
            //    }
            // }

            console.log(e);
            setUser({ ...user, [e.target.name]: e.target.value })
            user[e.target.name] = e.target.value


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
        }
        return true

    }
    return (
        <div style={{ marginRight: "10%" }}>

            {/* <h3>Switch ברוכים הבאים לאתר</h3>
            <h3>אתר המשרת את הגננות בישראל בניהול מילואי מקום</h3> */}

            <Form className="myform" >
                <br /> <h2 style={{ textAlign: "center", fontSize: "20px", textShadow: "gray 0 1px 2px" }}>:) ברוכים הבאים לאיזור האישי </h2>

                <br /><Form.Label style={{ textShadow: "gray 0 1px 2px", fontSize: "17px", marginRight: "3.5%" }}>."באפשרותך לעדכן את פרטיך בכל עת, לאחר  עדכון הנתונים אנא לחצ/י על "שמור * </Form.Label><br /><br />




                <Row className="mb-3 input" dir="rtl">
                    <Form.Group as={Col} controlId="">
                        <Form.Label >שם מלא</Form.Label>
                        <span className="span" >{errorMessage.name}</span>
                        <Form.Control value={user.UserName} name="UserName" onChange={handleChange} type="" placeholder="הכנס שם פרטי ושם משפחה" />

                    </Form.Group>

                </Row>

                <Row className="mb-3 input" dir="rtl">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>מין</Form.Label>
                        <span className="span" >{errorMessage.gender}</span>
                        <Form.Select value={user.Gender} name="Gender" onChange={handleChange} defaultValue="בחר איזור:">
                            <option></option>
                            <option value="נקבה">נקבה</option>
                            <option value="זכר">זכר</option>

                        </Form.Select>

                    </Form.Group>
                </Row>

                <Row className="mb-3 input" dir="rtl">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="lable">תאריך לידה</Form.Label>
                        <span className="span">{errorMessage.bbirthdate}</span>
                        <Form.Control value={user.BirthDate} name="BirthDate" onChange={handleChange} type="date" formAction='dd/mm/yyyy' placeholder="הכנס תאריך לידה" max={new Date().toISOString().split("T")[0]} />


                    </Form.Group>
                </Row>

                <Row className="mb-3 input" dir="rtl">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label className="lable"> סטטוס</Form.Label>
                        <span className="span" >{errorMessage.status}</span>
                        <Form.Select value={user.Status} name="Status" onChange={handleChange} defaultValue="בחר איזור:">
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
                        <Form.Select value={user.Diploma} name="Diploma" onChange={handleChange} defaultValue="בחר:">
                            <option></option>

                            <option value="יש">יש</option>
                            <option value="אין">אין</option>
                        </Form.Select>
                    </Form.Group>
                </Row>


                <Row className="mb-3 input" dir="rtl">
                    <Form.Group as={Col} controlId="">
                        <Form.Label className="lable">סוג תפקיד</Form.Label>
                        <span className="span" >{errorMessage.job}</span>
                        <Form.Select value={user.Job} name="Job" onChange={handleChange} defaultValue="בחר איזור:">
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
                        <Form.Control value={user.PhoneNumber} name="PhoneNumber" onChange={handleChange} type="phoneNumber" minLength='9' maxLength='10' placeholder="הכנס מספר טלפון" />

                    </Form.Group>
                </Row>

                <Row className="mb-3 input" dir="rtl">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="lable">כתובת מייל</Form.Label>
                        <span className="span">{errorMessage.email}</span>
                        <Form.Control value={user.Mail} name="Mail" onChange={handleChange} type="" placeholder="הכנס כתובת אימייל" />

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
                        <Form.Select value={user.AreaCode} name="AreaCode" onChange={(e) => saveArea(e)} defaultValue="בחר איזור:">
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
                        <Form.Select value={user.CityCode} onChange={handleChange} name="CityCode" defaultValue="בחר עיר:">
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
                        <Form.Select value={user.Communication} name="Communication" onChange={handleChange} defaultValue="בחר איזור:">
                            <option></option>

                            <option>באתר בלבד</option>
                            <option> באתר וב-email</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3 input" >
                    {/* {file && <img src={file.path} width='100' height='100' />} */}
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label className="lable">תמונת פרופיל</Form.Label>
                        {file == undefined && currentUser.Imag !== undefined && currentUser.Imag.path !== '' ? <>
                            <Form.Control name="Imag" onChange={handleChange} type="file" />
                        </>
                            : <Form.Control name="Imag" onChange={handleChange} type="file" />
                        }

                    </Form.Group>
                </Row>

                <Row className="mb-3 input" dir="rtl">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label className="lable">סיסמה</Form.Label>
                        <span className="span" >{errorMessage.password}</span>
                        <Form.Control value={user.Password} name="Password" onChange={handleChange} type="password" maxLength="8" placeholder="הקש סיסמא באורך של 8 מספרים" />

                    </Form.Group>
                </Row>

                <Row className="mb-3 input" dir="rtl">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label className="lable">אימות סיסמה</Form.Label>
                        <span ref={checkPassword} className={getClassName()}>{errorMessage.checkPassword}</span>
                        <Form.Control value={user.Password} name="ValidatePass" onChange={handleChange} type="password" maxLength="8" placeholder="הקש שוב סיסמא" />

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





                <Row className="mb-3 input" style={{ marginRight: "45%", marginBottom: "5%", width: "10%", display: "inline-block" }} >
                    <Button
                        variant="primary"
                        disabled={isLoading}
                        onClick={updateUsers}
                    >
                        {isLoading ? 'Loading…' : 'שמור '}
                    </Button>
                </Row>
                <Row className="mb-3 input" style={{ marginRight: "45%", marginBottom: "5%", width: "10%", display: "inline-block" }} >
                    <Button
                        variant="primary"
                        disabled={isLoading}
                        onClick={handleShow}
                    >
                        {isLoading ? 'Loading…' : 'למחיקת המשתמש '}
                    </Button>
                </Row>
                {/*  */}

            </Form>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: "80%" }}>מחיקת משתמש</Modal.Title>
                </Modal.Header>
                <Modal.Body dir="rtl">
                    האם את/ה בטוח/ה שברצונך לצאת מהמאגר?
                </Modal.Body>
                <div style={{ marginBottom: "5%" }}>
                    <Button style={{ marginLeft: "5%" }} variant="secondary" onClick={handleClose}>
                        לא
                    </Button>
                    <Button style={{ marginLeft: "5%" }} variant="primary" onClick={DeleteUser}>כן</Button>
                </div>
            </Modal>
        </div>
    )

})