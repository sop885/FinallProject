import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import './history.css'
import { connect } from 'react-redux'
import { allRequests } from '../../../redux/actions/requestsAction'
import axios from 'axios'
import History from '../../helpcomponents/accordion/b'
import Agree from '../../helpcomponents/accordion/agree' //לבדוק אם עובד
import Calendar from 'react-calendar';


function mapStateToProps(state) {
    return {
        requests: state.requests.Requests,
        user: state.users.user
    }
}

const HistoryForm = (props) => {
    const { requests, user, dispatch } = props


    useEffect(() => {
        debugger
        console.log('', user)
        // if (!requests || requests.length == 0) {
        axios.get(`http://localhost:3000/Action/getUserActions/${user.UserId}`).then((res) => {
            dispatch(allRequests(res.data))
        });
        // }
    }, [])



    return (<div>
        <div style={{
            position: "fixed",
            width: "30%",
            height: "30%",
            left: 0,
            bottom: "160px"
        }}>
            <Calendar
                className="calender"
                value={new Date()}
                calendarType="Hebrew"
                locale="he"
                navigationAriaLive="polite"
                navigationAriaLabel="Go up"
                maxDetail="month"
                minDetail="month"

            /></div>
        <div style={{ marginRight: "15%" }} className="myformh">
            <br /> <h2 style={{ textAlign: "center", fontSize: "20px", textShadow: "gray 0 1px 2px" }}> הסטוריה</h2>
            <h3 ><b>בקשות שפתחתי</b></h3>
            <History></History>
            <h3><b>בקשות שאישרתי</b></h3>
            <Agree></Agree>

        </div>
    </div>
    )
}
export default connect(mapStateToProps)(HistoryForm);