import React, { useEffect, useState, useRef } from "react"
import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom';
// import {Provider} from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/helpcomponents/Header/header';
import Acoordion from './components/helpcomponents/accordion/a';
import LoadingButton from './components/helpcomponents/button/loadkeep';
import Tbl from './components/helpcomponents/Table/table';
import AfterFilter from './components/Forms/Form.AfterFilter/formAfterFilter'
import { Outlet } from 'react-router-dom'
import Login from './components/Forms/Connect/ConnectForm'
import Date from './components/helpcomponents/Calender/date'
import Waiting from './components/helpcomponents/waitingMess/table'
import Help from './components/helpcomponents/help/h'
import Try from './components/try'
import { breakStatement } from "@babel/types";
import HomePage from "./components/Forms/HomePage/home";
import Ifacebook from "./components/img/facebook.png"
import Iinstagram from "./components/img/instagram.jpg"
import Itwitter from "./components/img/twitter.png"
import Iwhatsapp from "./components/img/whatsapp.jpg"
import Iyoutube from "./components/img/youtube.png"
import S from './components/Forms/Form.signup/signup'
import { useLocation } from 'react-router-dom'
import help from "./components/img/help.png"

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [active, setActive] = useState(false)
  const [token, setToken] = useState()
  const location = useLocation()

  const [data, setData] = useState()

  //  const current=new Date().toLocaleString() + '';

  //  const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;


  //  const min=
  useEffect(() => {
    debugger
    { (window.location.pathname == "/") ? (window.location.pathname = "/home") : <></> }
    setModalShow(true)
  }, [])

  useEffect(() => {
    debugger
    // { (window.location.pathname == "/") ? (window.location.pathname = "/home") : <></> }
    if (window.location.pathname == "/") {
      window.location.pathname = "/home"
      setModalShow(true)
    }


  }, [data, location.state])

  // if(!token)
  // {
  // return <Login 
  // setToken={setToken}show={modalShow}
  // onHide={() => setModalShow(false)}
  //  />
  // }

  return (
    <div className="App">
      {/* <S /> */}
      {/* <Provider store={store}> */}

      {/* <Link to="/formMessages">הודעות ממתינות</Link> |{" "}
      <Link to="/formAfterFilter">סינון תוצאות </Link> |{" "}
      <Link to="/formFillRequest">פתיחת בקשה</Link> |{" "}
      <Link to="/form">דף התחברות</Link> |{" "} */}



      {/* </Provider> */}

      {/* <AfterFilter></AfterFilter> */}
      <Header></Header>
      <Outlet></Outlet>
      {/* <HomePage token={token}></HomePage> */}
      {/* <MessageForm></MessageForm> */}
      {/* <AfterFilter></AfterFilter> */}
      {/* <br></br> */}
      {/* <h4>תוצאות סינון ופרטיהם</h4> */}
      {/* <Acoordion /> */}
      {/* <br></br> */}
      {/* <h4>כפתור מילוי פרטים</h4> */}
      {/* <LoadingButton /> */}
      {/* <br></br> */}
      {/* <h4>טבלה</h4> */}
      {/* <Tbl></Tbl> */}
      {/* <br></br> */}
      {/* <h4>מילוי טופס פרטים אישיים</h4> */}
      {/* <Form></Form> */}
      <br></br>
      {/* <h4>מילוי בקשה</h4> */}
      {/* <FillReq></FillReq> */}
      {/* <h4> הודעות ממתינות</h4> */}
      {/* <Waiting></Waiting> */}
      <br></br>

      <Login 
        show={modalShow}
        onHide={() => setModalShow(false)}
      ></Login>
      <S></S>
      {/* <input type="date" min={new Date().toISOString().split("T")[0]}   /> */}

      {/* <Date></Date> */}
      {/* <Try></Try> */}
      {/* <Help></Help> */}


      <footer class="footer">
       
        :הצטרפו אלינו גם ב
        <div>
          <a href="  https://www.youtube.com/?gl=IL&tab=m1"><img class="icon" src={Iyoutube} /></a>
          <a href="https://www.google.com/search?rlz=1C1CHZN_iwIL933IL933&sxsrf=ALeKk00TZGSB5t2RMguYkzvEzR1lC04f4g:1611227069662&q=%D7%98%D7%95%D7%95%D7%99%D7%98%D7%A8&stick=H4sIAAAAAAAAAONgFuLSz9U3yMitTCsuU4Kw8wzLktO1-Jzzc3Pz84IzU1LLEyuLF7HyXJ9xfSoQzgTSK3awMgIA0nAhlzwAAAA&sa=X&ved=2ahUKEwj1347J8KzuAhXLURUIHc6yD9IQxA0wGHoECBkQCw"><img class="icon" src={Itwitter} /></a>
          <a href="https://www.google.com/search?q=whatsapp&rlz=1C1CHZN_iwIL933IL933&sxsrf=ALeKk02VIYbHnF6Ytd2S5ZPnjM1_nVlb_Q:1611227241337&tbm=isch&source=iu&ictx=1&fir=PlSaDgZmDTCuDM%252C00-gcH5I-Kz02M%252C_&vet=1&usg=AI4_-kRp2tVIL0b8bBaKSnbg41PnJHMINQ&sa=X&ved=2ahUKEwiM8fya8azuAhUwRxUIHW3NCw8Q_h16BAg3EAE#imgrc=PlSaDgZmDTCuDM"><img class="icon" src={Iwhatsapp} /></a>
          <a href="https://www.google.com/search?rlz=1C1CHZN_iwIL933IL933&sxsrf=ALeKk00TZGSB5t2RMguYkzvEzR1lC04f4g:1611227069662&q=%D7%90%D7%99%D7%A0%D7%A1%D7%98%D7%92%D7%A8%D7%9D&stick=H4sIAAAAAAAAAONgFuLSz9U3yMitTCsuUwKz03MKsnJytPic83Nz8_OCM1NSyxMrixexClyfcH3m9QXXF16fcX3S9RXX5-5gZQQAFI4I9UAAAAA&sa=X&ved=2ahUKEwj1347J8KzuAhXLURUIHc6yD9IQxA0wGHoECBkQBQ"> <img class="icon" src={Iinstagram} /></a>
          <a href="https://www.google.com/search?q=facebook&rlz=1C1CHZN_iwIL933IL933&sxsrf=ALeKk00TZGSB5t2RMguYkzvEzR1lC04f4g:1611227069662&tbm=isch&source=iu&ictx=1&fir=0Zni4S2hbbNyaM%252CnWdUUqE0KjBDMM%252C%252Fm%252F0hmyfsv&vet=1&usg=AI4_-kQ2CTQXc_SfaTqmIGWnyP_EibV8QA&sa=X&ved=2ahUKEwj1347J8KzuAhXLURUIHc6yD9IQ_B16BAggEAI#imgrc=0Zni4S2hbbNyaM"> <img class="icon" src={Ifacebook} /></a>
          <img style={{ width: "2%", height: "2%", float: "left",marginTop:"1%" }} src={help}></img>
        </div>
       
        {/* כל הזכויות שמורות להילה לוי&copy; */}
      </footer>
     
    </div>
  );
}

export default App;
