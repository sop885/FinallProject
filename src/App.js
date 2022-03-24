import React, { useEffect, useState, useRef } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/header';
import Acoordion from './components/accordion/a';
import LoadingButton from './components/button/loadkeep';
import Tbl from './components/Table/table';
import Form from './components/Form.personaldetails/form'
import FillReq from './components/Form.FillRequest/formFillRequest'
import Login from './components/Connect/ConnectForm'
import Date from './Calender/date'




function App() {

  const [modalShow, setModalShow] = useState(false);
//  const current=new Date().toLocaleString() + '';

//  const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

//  const min=
  useEffect(() => {
    setModalShow(true)
  }, [])
  return (
    <div className="App">
      {/* <Header></Header> */}
      <br></br>
      <h4>תוצאות סינון ופרטיהם</h4>
      {/* <Acoordion /> */}
      <br></br>
      <h4>כפתור מילוי פרטים</h4>
      {/* <LoadingButton /> */}
      <br></br>
      <h4>טבלה</h4>
      {/* <Tbl></Tbl> */}
      <br></br>
      <h4>מילוי טופס פרטים אישיים</h4>
      {/* <Form></Form> */}
      <br></br>
      <h4>מילוי בקשה</h4>
      {/* <FillReq></FillReq> */}
      <br></br>

      {/* <Login
        show={modalShow}
        onHide={() => setModalShow(false)}
        ></Login>    */}
   
        {/* <input type="date"   min={new Date().toISOString().split("T")[0]} /> */}
       
       <Date></Date>
    </div>
  );
}

export default App;
