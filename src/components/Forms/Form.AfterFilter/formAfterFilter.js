import React, { useEffect } from 'react'
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

    useEffect(() => {
        console.log(users);
    }, [])

    // const { dispatch, requests, user } = props 
    let Location = useLocation()
    let users = Location.state.data
    let requestss = Location.state.requestss



    return (
        <div className="myformf" style={{ marginRight: "10%" }}>
            {users.length == 0 ? <h1 style={{ marginTop: "5%", fontSize: "30px", textShadow: "gray 0 1px 2px", marginBottom: "5%" }}> <img src={sad} className="sad" />אין מחליפים הזמינים לבקשתך</h1> :
                <Form >
                    <h2 style={{ marginTop: "3%", marginRight: "5%", fontSize: "20px", textShadow: "gray 0 1px 2px", marginBottom: "2%" }}>
                        :) אלו המחליפים הזמינים לבקשתך<br />אנא סמן את המועמדים הרצויים לשליחת הבקשה</h2>

                    <Table users={users} />
                    {/* <Button>חזור לצפייה בפרטי הבקשה</Button>            */}
                    {/* <Link to="/FillAfter" requestss={requestss} className="back">לחזרה לבקשה</Link> */}
                    <Link to={{
                        pathname: "/FillAfter",
                        state: requestss // your data array of objects
                    }} >לחזרה לבקשה</Link>

                </Form>
            }
        </div>

    )
}
export default AfterFilterForm;
// connect(mapStateToProps)