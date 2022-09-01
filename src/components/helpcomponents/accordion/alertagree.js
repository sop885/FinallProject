// import React, { useEffect, useState } from 'react'
// // import Accordion from 'react-bootstrap/Accordion'
// // import React, { useState } from 'react';
// import './a.css'
// import Accordion from './aa';
// import P from '../../img/profile.jpg'
// import Confirmb from '../button/confirmb'
// import { connect } from 'react-redux'
// import axios from 'axios';
// import mess from '../../img/gifMess.gif'
// import Messageb from '../../helpcomponents/accordion/abirthday'
// import { Link } from 'react-router-dom'

// const mapStateToProps = (state) => {
//     debugger
//     return {
//         request: state.requests.Requests,
//         user: state.users.user
//     }
// }

// const A = (props) => {
//     const { request, user } = props
//     const [isActive, setIsActive] = useState(false);
//     let always1 = "  הבקשה התקבלה בתאריך"
//     let always2 = "  בשעה"
//     let Req = [];
//     const [reqs, setReqs] = useState()
//     //איזה request 
//     useEffect(() => {

//         request && request.length && request.map((item, index) => {
//             if (item.RequestingUserId != user.UserId)
//                 Req.push(item)
//         });
//         setReqs(Req)
//     }, [request])

//     // function isBd(dateString) {
//     //     var today = new Date();
//     //     var birthDate = new Date(dateString);
//     //     if (today.getMonth == birthDate.getMonth && today.getDay == birthDate.getDay)
//     //         return true;
//     //     return false;
//     // }
//     // const b = isBd(user.BirthDate)
 
 
//     return (
//         <div>
//             <div className="accordion" dir="rtl">              
               
//                     <>
                    
                    
//                         <Accordion key={index} title={<div><img src={user.Imag} className="imgaco" /> <b>{user.UserName}|{always1}  {item.CurrentDate} | {always2}  {item.CurrentTime}</b></div>}
//                             content={
//                                 <div>
//                                     <h4> בקשתך אושרה בהצלחה!!! ניתן להתעדכן בפרטי הבקשה והמחליפ/ה בדף ההיסטוריה <br/><Link  to="/history " >להסטוריית הפעולות</Link> </h4>
                                    

//                                     <br></br>{item.status == true ? 'confirmed' : <Confirmb item={item} />} </div>} />:''}
                        
//                     </>
//                 ))
                   
   
//             </div>

//         </div>


//     );
// };

// export default connect(mapStateToProps)(A);



