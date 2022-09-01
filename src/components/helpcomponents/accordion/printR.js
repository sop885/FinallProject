import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import axios from 'axios';

debugger
const Print = (props) => {
    const { id } = props
    const [rep, setRep] = useState()
    let res
    useEffect(async () => {
        debugger
        res = await axios.get(`http://localhost:3000/Action/findReqUser/${id}`)
        setRep(res.data)
    }, [])
    // 
    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    return (
        <div style={{ marginTop: "3%" }}>
            {rep ? <div>
                <h4>פרטי המבקש</h4>
                <h5 className="contantb">
                    <b>שם:</b > {rep.UserName}<br />
                    <b>טלפון ליצירת קשר:</b> {rep.PhoneNumber}<br />
                    <b>מייל ליצירת קשר:</b> {rep.Mail}<br />
                </h5>
            </div> : ''}


        </div>

    )
}
export default Print;