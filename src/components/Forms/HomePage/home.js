import React,{useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import p2 from '../../pictures/p2.png'
import here from '../../img/gifHere.png'

// className="title"
import './home.css'

const HomePage = (props) => {
const {token}=props

// useEffect(() => {
//     axios.get(`http://localhost:3000/createUser`,{
//         headers:{'authorization':token}
//     }).then((res) => {
//         debugger
//     })
// }, [])

    return (
        <div style={{marginRight:"17%",backgroundColor: (222, 235, 247)}}>
              <Form className="myformh" >
        {/* <div className="imghome" col><img src={p2} ></img></div> */}
        <div style={{textAlign:"center"}}> 
                  <h2 style={{marginTop:"3%",marginBottom:"3%",padding:"10%",}}><b>switchברוכים הבאים ל
                  </b><br/><br/>אתר המשרת את עובדי ההוראה בישראל בניהול מילואי מקום בלחיצת כפתור
                  <br/><br/> <img src={here} style={{width:"10%",height:"10%",margin:"0px"}}/>לפתיחת בקשה <Link  to="/formFillRequest" >לחץ כאן</Link>  </h2></div>
                                   
             </Form>
            
        </div>
    )
}
export default HomePage;