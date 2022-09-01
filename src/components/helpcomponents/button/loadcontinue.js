import React, { useState, useEffect } from 'react'
import render from 'dom-serializer';
import Button from 'react-bootstrap/Button'
import './load.css'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { allRequests } from '../../../redux/actions/requestsAction'
import axios from 'axios';




function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}
function mapStateToProps(state) {
  return {
    User: state.users.user
  }
}

export default connect(mapStateToProps)(function LoadingButton(props) {
  const [isLoading, setLoading] = useState(false);
  const { dispatch, checkFunc, request, User } = props;
  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);


  const handleClick = () => setLoading(true);
  let navigate = useNavigate()

  async function button() {
    debugger
    let CurrentDate2 = new Date().toISOString().split("T")[0]
    let CurrentTime2 = new Date().toLocaleTimeString()
    let CurrentRequest = { ...request }
    CurrentRequest["CurrentDate"] = CurrentDate2;
    CurrentRequest["CurrentTime"] = CurrentTime2;
    // CurrentRequest["CityName"]=null;
    // CurrentRequest["AreaName"]=null;
    let users = []
    let ok = await checkFunc()
    if (ok) {
      // CurrentRequest.RequestingUserId = User.userId
      axios.post(`http://localhost:3000/Action/createRequest/${CurrentRequest.RequestingUserId}`, CurrentRequest).then((res) => {
        dispatch(allRequests(res.data.action));
        console.log(res.data);
        users = res.data.arr

        // if (users === null)
        //   alert("לא נמצאו מחליפים הזמינים לבקשתך ):")
        // else {
          if (!isLoading) {
            handleClick()
          }

          navigate("/formAfterFilter", { state: { data: users } })
        // }


      })
    }
  }

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={button}

    >
      {isLoading ? 'Loading…' : 'המשך'}
    </Button>
  );
})

// render(<LoadingButton />);