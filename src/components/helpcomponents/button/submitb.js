import React, { useState, useEffect } from 'react'
import render from 'dom-serializer';
import Button from 'react-bootstrap/Button'
import './load.css';
import axios from 'axios'
import {connect,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}
function mapStateToProps(state) {
  return {
      requests: state.requests.Requests,
  }
}
export default function  LoadingButton(props) {
  const {selectedUsers}=props;
  const [isLoading, setLoading] = useState(false);
 const action =useSelector(state=>state.requests.Requests)
  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
    console.log(action)
  }, [isLoading]);
  let navigate = useNavigate()
  const handleClick = () =>{

    setLoading(true)
    axios.put(`http://localhost:3000/Action/sendMessages/${action._id}`, selectedUsers).then(res=>{
      console.log(res.data)
      alert("בקשתך נשלחה בהצלחה :)"+'\n'+"עלייך להתעדכן בסטטוס הבקשה בדף ההסטוריה")
      navigate("/home")
    })
  }
  return (
    <div>
      {/* פה אלרט אם אין מחליפים? */}
      
     <Button style={{marginRight:"44%", marginBottom: "5%",marginTop:"3%",width: "13%"}} 
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ?'מבצע שליחה...' 
       : 'לשליחת הבקשה'} 
    </Button>
    </div>
   
  );
}

render(<LoadingButton />);