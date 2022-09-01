import React, { useEffect,useState } from 'react'
import Form from 'react-bootstrap/Form'
import axios from 'axios';

debugger
const Print = (props) => {
     const {id}=props
     const [rep, setRep] = useState()
     let res
    useEffect(async()=>{
        debugger
       res = await axios.get(`http://localhost:3000/Action/findUser/${id}`)
       setRep(res.data)
    },[])
    // 
    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    return (
        <div className="myformf" style={{marginRight:"10%"}}>      
           <Form>
                
                                        {rep?<div>
                                           
                                             <h4>פרטי המחליף</h4>
                                             <h5 className="contantb">
                                                 <b>שם:</b >{rep.UserName}<br />
                                                 <b>גיל:</b> {getAge(rep.BirthDate)}
                                              <b>טלפון ליצירת קשר:</b> {rep.PhoneNumber}<br /> 
                                             {rep.Diploma} <b>תעודת הוראה</b> 
                                            </h5> 
                                     </div>:'' } 

           </Form>
       </div>
      
    )}
export default Print;