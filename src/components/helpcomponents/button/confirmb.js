import React, { useState, useEffect } from 'react'
import render from 'dom-serializer';
import Button from 'react-bootstrap/Button'
import './load.css'
import axios from 'axios';
import { connect } from 'react-redux';
import {confirmReq} from '../../../redux/actions/requestsAction'
import Message from '../../helpcomponents/accordion/a'

function mapStateToProps(state) {
  return {
    request: state.requests.Requests,
    user: state.users.user
  }
}

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default connect(mapStateToProps)(function LoadingButton(props) {
  const [isLoading, setLoading] = useState(false);

  const { item ,user,request,dispatch} = props;
  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
  //check
  function clickk() {
    debugger
    axios.put(`http://localhost:3000/Action/UpdateActionStatus/${item._id}`,user).then((res) => {
        console.log(res.data)
        // לשלוח לשמירה בסטור
        dispatch(confirmReq(item))
        if (!isLoading) {
          handleClick()
        }    
      })
   
  }
  return (
    <Button style={{ width: "14%", marginRight: "83%", marginBottom: "1%" }}
      variant="primary"
      disabled={isLoading}
      onClick={clickk}

    >
      {isLoading ? 'Loading…' : 'לאישור הבקשה'}
    </Button>
  );
})

//render(connect(mapStateToProps)(<LoadingButton />));