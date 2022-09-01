import React, { useState } from 'react'
import './a.css'
import Accordion from './aa';
import P2 from '../../img/bday.png'

const B = () => {
    const [isActive, setIsActive] = useState(false);
    const always1="  הבקשה נשלחה בתאריך"  
    const always2="  בשעה"
    const image={}
    const username="  abc  "
    const date="01/01/2020"
    const hour="08:40"
    const fromDate="MinD"
    const untilDate="MaxD"
    const area="Elad"
    const address="Raavad"
    const herkev="Girls"
    const fromHour="MinH"
    const untilHour="MaxH"

    const arr = [{
        title: <div><img src={P2} className="imgaco" /> <b>{username}|{always1}  {date} | {always2}  {hour}</b></div>,  },
    ];

    const { title, content } = arr;

    return (

        <div>
           
            <div className="accordion" dir="rtl">
                {arr.map(({ title, content }) => (
                    <Accordion title={title}  />
                ))}
            </div>
            
        </div>
        // <React.Fragment>
        //         <div className="accordion">
        //         {accordionData.map(({ title, content }) => (
        //   <Accordion title={title} content={content} />
        // ))}
        //                 <div className="accordion-title"
        //                     onClick={() => setIsActive(!isActive)}>
        //                     <div>{title}+{item}</div>
        //                     <div>{isActive ? '-' : '+'}</div>
        //                 </div>
        //                 {isActive && <div className="accordion-content">{content}</div>}
        //             </div>
        //     ))}
        // </React.Fragment>


    );
};

export default B;