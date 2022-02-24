import React ,{useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/header';
import Acoordion from './components/accordion/a';
import LoadingButton from './components/button/load';
import Tbl from './components/Table/table';
import Form from './components/Form.personaldetails/form'
import FillReq from './components/Form.FillRequest/formFillRequest'
import DatePicker from "react-datepicker";

function App() {

const [date,setDate] = useState(new Date())
  return (
    <div className="App">
    {/* <Header></Header> 
      <br></br>
     <Acoordion />
     <LoadingButton />
     <Tbl></Tbl> 
     <Form></Form> 
     <FillReq></FillReq>
     <DatePicker selected={date} onChange={(date) => setDate(date.target.value)} />     */}
    </div>
  );
}

export default App;
 