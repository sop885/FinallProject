import React, { useEffect, useState } from 'react'
import Table from '../../helpcomponents/Table/table'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import submitb from '../../helpcomponents/button/submitb'
import resetb from '../../helpcomponents/button/resetb'
import './formAfterFilter.css'
import axios from 'axios';
import sad from '../../img/gifSad.gif'
// import { connect } from 'react-redux'
// import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from 'bootstrap'
import { Link } from 'react-router-dom'

// function mapStateToProps(state) {
//     return {
//         requests: state.requests.Requests,
//         user: state.users.user
//     }
// }



const AfterFilterForm = (props) => {

    let Location = useLocation()
    const { users, requestss } = Location?.state;
    console.log(Location?.state);
    const [activeUser, setActiveUser] = useState([])
    const { DateStart: startReq, DateEnd: endReq } = requestss

    function getDatesInRange(startDate, endDate) {
        var sD = new Date(startDate);
        var eD = new Date(endDate);

        const dates = [];
        while (sD <= eD) {
            dates.push(new Date(sD));
            sD.setDate(sD.getDate() + 1);
            console.log("+++")

            console.log(sD)

        }

        return dates;
    }


    useEffect(() => {
        console.log(users);
        let copyUsers = []
        users.map(user => {
            let flagUser = true;
            const { ActionsHistory } = user
            for (let i = 0; i < ActionsHistory.length && flagUser; i++) {
                const act = ActionsHistory[i]
                let d1 = act.DateStart;
                let d2 = act.DateEnd
                if ((d1 >= startReq && d1 <= endReq) || (d2 >= startReq && d2 <= endReq)
                    || getDatesInRange(d1, d2).map(e => e.getTime()).includes(new Date(startReq).getTime()) || getDatesInRange(d1, d2).map(e => e.getTime()).includes(new Date(startReq).getTime()))
                    flagUser = false;
            }
            if (flagUser)
                copyUsers.push(user)

            // if(starreq<=d2&&endreq>=d1)

            // if (( d1>=startReq &&d2<=endReq)||) {
            //     flagUser = false
            // }

            // const dateOneRequest = (getDatesInRange(d1, d2))
            // dateOneRequest.map(e => datesCatch.push(e))
        })
        setActiveUser(copyUsers);
        console.log(activeUser);
    }, [])

    // const { dispatch, requests, user } = props 


    return (
        <div className="myformf" style={{ marginRight: "10%" }}>
            {activeUser.length == 0 ? <h1 style={{ marginTop: "5%", fontSize: "30px", textShadow: "gray 0 1px 2px", marginBottom: "5%" }}> <img src={sad} className="sad" />אין מחליפים הזמינים לבקשתך</h1> :
                <Form >
                    <h2 style={{ marginTop: "3%", marginRight: "5%", fontSize: "20px", textShadow: "gray 0 1px 2px", marginBottom: "2%" }}>
                        :) אלו המחליפים הזמינים לבקשתך<br />אנא סמן את המועמדים הרצויים לשליחת הבקשה</h2>

                    <Table users={activeUser} />
                    {/* <Button>חזור לצפייה בפרטי הבקשה</Button>            */}
                    {/* <Link to="/FillAfter" requestss={requestss} className="back">לחזרה לבקשה</Link> */}
                    {/* <Link to={{
                        pathname: "/FillAfter",
                        state: requestss // your data array of objects
                    }} >לחזרה לבקשה</Link> */}

                </Form>
            }
        </div>

    )
}
export default AfterFilterForm;
// connect(mapStateToProps)