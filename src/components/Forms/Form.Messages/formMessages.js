import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Message from '../../helpcomponents/accordion/a'
import Messageb from '../../helpcomponents/accordion/abirthday'
import { connect } from 'react-redux'
import { allRequests } from '../../../redux/actions/requestsAction'
import axios from 'axios';
import Calendar from 'react-calendar';

import './formMessages.css'


function mapStateToProps(state) {
    return {
        requests: state.requests.Requests,
        user: state.users.user
    }
}

const MessageForm =connect(mapStateToProps)( (props) => {
    const { dispatch, requests, user } = props
    const [b, setB] = useState()


    // function isBd(dateString) {
    //     var today = new Date();
    //     var birthDate = new Date(dateString);
    //     if (today.getMonth == birthDate.getMonth && today.getDay == birthDate.getDay)
    //         return true;
    //     return false;
    // }

    // const b = isBd(user.BirthDate)


    useEffect(() => {
        
        // if (!requests || requests.length == 0) {
        axios.get(`http://localhost:3000/Action/getUserActions/${user.UserId}`).then((res) => {
            dispatch(allRequests(res.data))
        });
        // }
    }, [])
    function isBd(dateString) {
        var current = new Date();
        const currentDate = `${current.getDate()}/${current.getMonth() + 1}`;
        var birthDate = new Date(dateString);
        const Datebirth = `${birthDate.getDate()}/${birthDate.getMonth() + 1}`;       
        if (currentDate==Datebirth)
            return true;
        return false;
    }





    return (
<div>
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
        <div style={{ marginRight: "15%" }} className="myformm">
            <br /> <h2 style={{ textAlign: "center", fontSize: "20px", textShadow: "gray 0 1px 2px" }}> הודעות</h2>          
            {isBd(user.BirthDate) == true ? <Messageb></Messageb> : 

                <Message></Message>
            }



        </div></div>
    )
})
export default MessageForm;