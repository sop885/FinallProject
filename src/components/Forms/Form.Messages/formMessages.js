import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Message from '../../helpcomponents/accordion/a'
import Messageb from '../../helpcomponents/accordion/abirthday'
import { connect } from 'react-redux'
import { allRequests } from '../../../redux/actions/requestsAction'
import axios from 'axios';
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
        <div style={{ marginRight: "15%" }} className="myformm">
            {isBd(user.BirthDate) == true ? <Messageb></Messageb> : 

                <Message></Message>
            }



        </div>
    )
})
export default MessageForm;