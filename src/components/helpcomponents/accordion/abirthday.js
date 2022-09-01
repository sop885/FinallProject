import React  from 'react'
import Message from '../../helpcomponents/accordion/a'
// import Accordion from 'react-bootstrap/Accordion'
// import React, { useState } from 'react';
import './a.css'
import Accordion from './aa';
import P from '../../img/bday.png'

import { connect } from 'react-redux'



// const mapStateToProps = (state) => {
//     debugger
//     return {
//         request: state.requests.Requests,
//         user: state.users.user
//     }
// }


const C = (props) => {
 
    const always1 = " מזל טוב ליום הולדתך :) "
    var current = new Date();
    const always2 =`${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear() }`;
    const Req = [];

   
    return (
        <>
            <div className="accordion" dir="rtl">                                
                        <Accordion  title={<div><img src={P} className="imgaco" /> <b>{always2} || {always1}</b></div>}
                         content={<h7>אנו מאחלים לך המון אושר ובריאות עד 120!!!<br/> צוות אתר switch</h7>}
                          />    
                                      <Message></Message>                               
            </div>
        </>

    );
};

export default C;



