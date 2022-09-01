import React, { useState, useEffect } from 'react'
import render from 'dom-serializer';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import './load.css'
import { connect } from 'react-redux'

import { updateUser, createUser } from '../../../redux/actions/userActions';
import { CalendarWeekCell } from '@progress/kendo-react-dateinputs';


function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default connect()(function LoadingButton(props) {
  const [isLoading, setLoading] = useState(false);
  const [checkAll,setCheckAll]=useState(false)
  const { dispatch, user, checkFunc } = props

  useEffect(() => {

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }

  }, [isLoading]);


 async function saveNewUser() {
    
   // בדיקות תקינות - א"א ללכת בלי לגמור למלא הכל.
    if (user.Password != user.ValidatePass)
      alert(" לא תואמות")
    // if(user.UserName!=null&&user.Password!=null&&user.ValidatePass!=null&&user.Diploma!=null&&user.Gender!=null&&user.BirthDate!=null&&user.PhoneNumber!=null&&user.AreaCode!=null&&user.CityCode!=null&&user.Mail!=null&&user.Status!=null&&user.Job!=null&&user.Communication!=null&&user.Imag!=null) 
    // {}
 
    // החלפה של דיפלומה
    debugger
    // let ok =await checkFunc()
    if (checkFunc()==true) {
      debugger
      axios.post("http://localhost:3000/User/createUser", user).then((res) => {
        console.log(res.data)
        // לשלוח לשמירה בסטור
        dispatch(createUser(user));
        if (!isLoading) {
          handleClick()
        }
      })
    }
  }


  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={saveNewUser}
    >
      {isLoading ? 'Loading…' : 'שמור '}
    </Button>
  );
})

