import React,{useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import './history.css'
import {connect} from 'react-redux'
import { allRequests } from '../../../redux/actions/requestsAction'
import axios from 'axios'
import History from '../../helpcomponents/accordion/b'
import Agree from '../../helpcomponents/accordion/agree' //לבדוק אם עובד


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
        console.log('',user)
        // if (!requests || requests.length == 0) {
            axios.get(`http://localhost:3000/Action/getUserActions/${user.UserId}`).then((res) => {
                dispatch(allRequests(res.data))
            });
        // }
    },[])

    

    return (
        <div style={{marginRight:"15%"}} className="myformh">      
        <h3 ><b>בקשות שפתחתי</b></h3> 
         <History></History>
        <h3><b>בקשות שאישרתי</b></h3> 
         <Agree></Agree>
             
        </div>
    )
}
export default connect(mapStateToProps)(HistoryForm);