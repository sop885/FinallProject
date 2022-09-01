import React, { useState, useRef, useEffect } from "react"
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Loadc from '../../helpcomponents/button/loadcontinue'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import RangeSlider from 'react-bootstrap-range-slider'
import './formFillRequest.css'
import validator from 'validator'
import axios from 'axios';



const FillReqForm = (props) => {
    const [status, setStatus] = useState('')
    const [image, setImage] = useState({ preview: '', data: '' })
    const [val, setVal] = useState(50)
    //זה רק דוגמא לשמות של ערים ואיזורים, בעיקרון צריך לשלוף מהטבלאות את השמות
    const [areaSelected, setAreaSelected] = useState("מרכז")
    const [cities, setCities] = useState([{ cityId: 1, cityName: "אלעד", areaName: "מרכז" }, { cityId: 2, cityName: "רכסים", areaName: "צפון" }, { cityId: 3, cityName: "אשדוד", areaName: "דרום" }])
    const [areas, setAreas] = useState([{ areaId: 1, areaName: "מרכז" }, { areaId: 2, areaName: "דרום" }, { areaId: 3, areaName: "צפון" }])
    //
    const [typeJobSelected, setTypeJobSelected] = useState("גננ/ת")
    const [typeJob, setTypeJob] = useState([{ typeJob: "גננ/ת" }, { typeJob: "גננ/ת חינוך מיוחד" }, { typeJob: "סייע/ת" }, { typeJob: "סייע/ת חינוך מיוחד" }, { typeJob: "מורה" }, { typeJob: "מורה חינוך מיוחד" }, { typeJob: "סייע/ת רפואי/ת" }, { typeJob: "מרצה" },])
    const [ageGroup, setAgeGroup] = useState([{ ageGroup: "גן תת חובה", typeJob: ["גננ/ת חינוך מיוחד", "גננ/ת", "סייע/ת", "סייע/ת רפואי/ת", "סייע/ת חינוך מיוחד"] }, { ageGroup: "גן טרום חובה", typeJob: ["גננ/ת חינוך מיוחד", "גננ/ת", "סייע/ת", "סייע/ת רפואי/ת", "סייע/ת חינוך מיוחד"] }, { ageGroup: "גן חובה", typeJob: ["גננ/ת חינוך מיוחד", "גננ/ת", "סייע/ת", "סייע/ת רפואי/ת", "סייע/ת חינוך מיוחד"] }, { ageGroup: "בית ספר יסודי", typeJob: ["מורה", "סייע/ת רפואי/ת", "מורה חינוך מיוחד"] }, { ageGroup: "תיכון", typeJob: ["מורה", "סייע/ת רפואי/ת", "מורה חינוך מיוחד"] }, { ageGroup: "מכללה", typeJob: ["מרצה"] }, { ageGroup: "אוניברסיטה", typeJob: ["מרצה"] }])
    // const minDate=useRef('2022-03-30')
    const [areaList, setAreList] = useState('')
    const [CityList, setCityList] = useState('')
    const [request, setRequest] = useState({
        ReplacesUserId: null,
        RequestingUserId: null,
        DateStart: null,
        DateEnd: null,
        AreaId: null,
        CityId: null,
        GenderPlace: null,
        ReplaceGender: null,
        Adress: null,
        Job: null,
        AgeGroup: null,
        IsDiploma: null,
        Rate: 50,
        Note: null,
        status: null,
        CurrentDate: null,
        CurrentTime: null,
        AreaName:null,
        CityName:null

    })



    useEffect(() => {
        axios.get("http://localhost:3000/Location/getAllAreas").then((res) => {
            setAreList(res.data)
        })
    }, [])

    function saveArea(e) {
        console.log(e.currentTarget.selectedIndex);
        handleChange(e)

        //setAreaSelected(e.target.value)
        //  handleChange(e.target.name)
        // user[e.target.name] = e.currentTarget.selectedIndex
        axios.get(`http://localhost:3000/City/getCitiesByArea/${e.currentTarget.selectedIndex}`).then((res) => {
            console.log(res);
            setCityList(res.data)
        })
    }
    const [errorMessage, setErrorMessage] = useState({
        fromDate: '',
        toDate: '',
        adress: '',
        area: '',
        city: '',
        job: '',
        age: '',
        diploma: '',
        type: '',
        gender: '',
    })

    // const [rData, setrData] = useState({
    //     minDate: '',
    //     toDate: '',
    //     adress: ''
    // })

    const handleFileChanges = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        setImage(img)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        let file = new FormData()
        file.append('file', image.data)

        const response = await axios.post('http://localhost:3030/image', file)
        if (response) setStatus(response.statusText)
    }
    async function check() {
        debugger
        if (handleChange()) {

            if (request.IsDiploma !== null && request.IsDiploma !== "")
                if (request.AgeGroup !== null && request.AgeGroup !== "")
                    if (request.Job !== null && request.Job !== "")
                        if (request.ReplaceGender !== null && request.ReplaceGender !== "")
                            if (request.GenderPlace !== null && request.GenderPlace !== "")
                                if (request.CityId !== null && request.CityId !== "")
                                    if (request.AreaId !== null && request.AreaId !== "")
                                        if (request.Adress !== null && request.Adress !== "")
                                            if (request.DateEnd !== "" && request.DateEnd !== null)
                                                if (request.DateStart !== "" && request.DateStart !== null)
                                                    return true
        }
        return alert("אנא מלא את כל הפרטים הנדרשים!")


    }
    // function saveArea(areaName) {
    //     setAreaSelected(areaName)
    // }
    function saveTypeJob(e) {
        handleChange(e)
        setTypeJobSelected(e.target.value)
    }


    async function handleChange(e) {

        if (e.target.name === 'Imag') {
            handleFileChanges()
            handleSubmit()
        }

        console.log(e);
        setRequest({ ...request, [e.target.name]: e.target.value })
        request[e.target.name] = e.target.value

        if (e.target.name === 'DateStart') {
            if (request.DateStart === "" || request.DateStart === null) {
                setErrorMessage({ ...errorMessage, fromDate: 'הכנס תאריך!' })
                return false
            } else {
                if (validator.isDate(request.DateStart)) {
                    if (request.DateStart < new Date().toISOString().split("T")[0]) {
                        setErrorMessage({ ...errorMessage, fromDate: 'תאריך לא חוקי!' })
                        return false
                    }
                    else {
                        await setErrorMessage({ errorMessage, fromDate: '' })
                    }
                }
            }
        }

        if (e.target.name === 'DateEnd') {
            if (request.DateEnd === "" || request.DateEnd === null) {
                setErrorMessage({ ...errorMessage, toDate: 'הכנס תאריך!' })
                return false
            }
            else {
                if (validator.isDate(request.DateEnd)) {
                    if (request.DateEnd < request.DateStart) {
                        setErrorMessage({ ...errorMessage, toDate: 'תאריך לא חוקי!' })
                        return false
                    }
                    else {
                        await setErrorMessage({ errorMessage, toDate: '' })
                    }
                }
            }
        }

        if (e.target.name === 'Adress') {
            if (request.Adress === null || request.Adress === "") {
                setErrorMessage({ ...errorMessage, adress: 'הכנס כתובת!' })
                return false
            }
            else {
                await setErrorMessage({ errorMessage, adress: '' })
            }
        }
        if (e.target.name === ' AreaId') {
            if (request.AreaId === null || request.AreaId === "") {
                setErrorMessage({ ...errorMessage, area: 'בחר איזור!' })
                return false
            }
            else {
                await setErrorMessage({ errorMessage, area: '' })
            }
        }
        if (e.target.name === 'CityId') {
            if (request.CityId === null || request.CityId === "") {
                setErrorMessage({ ...errorMessage, city: 'בחר עיר!' })
                return false
            }
            else {
                await setErrorMessage({ errorMessage, city: '' })
            }
        }

        if (e.target.name === 'GenderPlace') {
            if (request.GenderPlace === null || request.GenderPlace === "") {
                setErrorMessage({ ...errorMessage, type: 'בחר ערך!' })
                return false
            }
            else {
                await setErrorMessage({ errorMessage, type: '' })
            }
        }

        if (e.target.name === 'ReplaceGender') {
            if (request.ReplaceGender === null || request.ReplaceGender === "") {
                setErrorMessage({ ...errorMessage, gender: 'בחר ערך!' })
                return false
            }
            else {
                await setErrorMessage({ errorMessage, gender: '' })
            }
        }


        if (e.target.name === 'Job') {
            if (request.Job === null || request.Job === "") {
                setErrorMessage({ ...errorMessage, job: 'בחר ערך!' })
                return false
            }
            else {
                await setErrorMessage({ errorMessage, job: '' })
            }
        }
        if (e.target.name === 'AgeGroup') {
            if (request.AgeGroup === null || request.AgeGroup === "") {
                setErrorMessage({ ...errorMessage, age: 'בחר ערך!' })
                return false
            }
            else {
                await setErrorMessage({ errorMessage, age: '' })
            }
        }

        if (e.target.name === 'IsDiploma') {
            if (request.IsDiploma === null || request.IsDiploma === "") {
                setErrorMessage({ ...errorMessage, diploma: 'בחר ערך!' })
                return false
            }
            else {
                await setErrorMessage({ errorMessage, diploma: '' })
            }
        }






        return true;

    }
    return (

        <div style={{ marginRight: "10%" }}>
            <Form className="myform" >

                <h1 className="input" style={{ marginRight: "43%", fontSize: "20px" }}>פתיחת בקשה </h1>
                <br /><Form.Label style={{ marginRight: "3.5%", textShadow: "gray 0 1px 2px", fontSize: "17px" }}>:על מנת למצוא ממלא/ת מקום המתאימ/ה עבורך אנא מלא/י את הפרטים הבאים</Form.Label><br /><br />

                <Row className="mb-3 input" dir="rtl">
                    <Form.Group as={Col} controlId="">
                        <Form.Label>התאריך המיועד</Form.Label>
                        <span className="spani">{errorMessage.fromDate}</span>
                        <Form.Control name="DateStart" type="date" formAction='dd/mm/yyyy' placeholder="Enter a date" onChange={handleChange} min={new Date().toISOString().split("T")[0]} />

                    </Form.Group>
                </Row>

                <Row className="mb-3 input" dir="rtl">
                    <Form.Group as={Col} controlId="">
                        <Form.Label>עד התאריך</Form.Label>
                        <span className="spani">{errorMessage.toDate}</span>
                        <Form.Control name="DateEnd" type="date" formAction='dd/mm/yyyy' placeholder="Enter a date" onChange={handleChange} min={request.DateStart} />
                    </Form.Group>
                </Row>
                <br />
                <Row className="mb-3 input" dir='rtl'>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>איזור המוסד</Form.Label>
                        <span className="spani">{errorMessage.area}</span>
                        <Form.Select name="AreaId" onChange={(e) => saveArea(e)} defaultValue="בחר איזור:">
                            <option> </option>
                            {areaList && areaList.length && areaList.map((item) => (
                                <option value={item.AreaCode}>{item.AreaName}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3 input" dir='rtl'>
                    <Form.Group as={Col} controlId="">
                        <Form.Label>עיר </Form.Label>
                        <span className="spani">{errorMessage.city}</span>
                        <Form.Select name="CityId" onChange={handleChange} defaultValue="בחר עיר:">
                            <option> </option>

                            {CityList && CityList.length && CityList.map((item) => (
                                <option value={item.CityCode}>{item.CityName}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Row>


                <br />

                <Row className="mb-3 input" dir='rtl'>
                    <Form.Group as={Col} controlId="">
                        <Form.Label>כתובת</Form.Label>
                        <span className="spani">{errorMessage.adress}</span>
                        <Form.Control name="Adress" type="" placeholder="הכנס כתובת" onChange={handleChange} />
                    </Form.Group>
                </Row>
                <Row className="mb-3 input" dir='rtl'>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>התפקיד המבוקש</Form.Label>
                        <span className="spani">{errorMessage.job}</span>
                        <Form.Select name="Job" onChange={(e) => saveTypeJob(e)} defaultValue="בחר תפקיד:">
                            <option></option>
                            {typeJob.map((item) => (
                                <option key={item.typeJob}>{item.typeJob}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Row>

                <br />
                <Row className="mb-3 input" dir='rtl'>
                    <Form.Group as={Col} controlId="">
                        <Form.Label> שכבת גיל</Form.Label>
                        <span className="spani">{errorMessage.age}</span>
                        <Form.Select name="AgeGroup" onChange={handleChange} defaultValue="בחר :">
                            <option></option>
                            {ageGroup.filter(x => x.typeJob.includes(typeJobSelected)).map((item) =>
                                <option key={item.ageGroup}>{item.ageGroup}</option>
                            )}
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3 input" dir='rtl'>
                    <Form.Group as={Col} controlId="">
                        <Form.Label>הרכב המוסד</Form.Label>
                        <span className="spani">{errorMessage.type}</span>
                        <Form.Select name="GenderPlace" onChange={handleChange} defaultValue="בחר:">
                            <option></option>
                            <option>בנים</option>
                            <option>בנות</option>
                            <option>מעורב</option>

                        </Form.Select>
                    </Form.Group>
                </Row>


                <br />
                <Row className="mb-3 input" dir='rtl'>
                    <Form.Group as={Col} controlId="">
                        <Form.Label>מחליף בעל תעודת הוראה </Form.Label>
                        <span className="spani">{errorMessage.diploma}</span>
                        <Form.Select name="IsDiploma" onChange={handleChange} defaultValue="בחר :">
                            <option></option>
                            <option value={"חובה"}>חובה</option>
                            <option value={"לא חובה"}>לא חובה </option>
                        </Form.Select>
                    </Form.Group>
                </Row>


                <Row className="mb-3 input" dir='rtl'>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>מין המחליף המבוקש</Form.Label>
                        <span className="spani">{errorMessage.gender}</span>
                        <Form.Select name="ReplaceGender" defaultValue="בחר :" onChange={handleChange}>
                            <option></option>
                            <option value="זכר">זכר</option>
                            <option value="נקבה">נקבה</option>
                            <option value="לא משנה">לא משנה</option>

                        </Form.Select>
                    </Form.Group>
                </Row>
                <br />
                <Row className="mb-3 input" style={{ marginRight: "25%", marginTop: "2%", textAlign: "center" }}>
                    <Form.Group as={Col} controlId="">
                        <Form.Label>תעריף משוער לשעה</Form.Label> <br />
                        <RangeSlider
                            name="Rate"
                            value={request.Rate}
                            onChange={handleChange}
                            min={30}
                            max={200}
                        // size={'lg'}
                        // tooltip={'on'}
                        />
                    </Form.Group>
                </Row>
                <br />
                <Row className="mb-3 input" style={{ width: "87%" }}>
                    <InputGroup>
                        <FormControl dir="rtl" placeholder=" כאן ניתן לפרט לגבי שעות הפעילות וכו'" as="textarea" name="Note" onChange={handleChange} aria-label="With textarea" />
                        <InputGroup.Text>:הערות</InputGroup.Text>

                    </InputGroup>
                </Row>


                <Row className="mb-3 input" style={{ marginRight: "40%", marginTop: "3%", marginBottom: "5%", width: "15%" }} >
                    <Loadc checkFunc={check} request={request} />
                </Row>
            </Form>

        </div>
    )
}
export default FillReqForm;