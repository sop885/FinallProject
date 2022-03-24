import React, { useState } from 'react'
// import Accordion from 'react-bootstrap/Accordion'
// import React, { useState } from 'react';
import './a.css'
import Accordion from './aa';




// const A = (props) => {

//     return (
//         <div className="accs">

//             <div className="center" >
//                 <Accordion  className="accordiond" >
//                 <Accordion.Item eventKey="0" className="accordiond" >
//                     <Accordion.Header className="accordions"  style={{textAlign:"center"}}>הבקשה אושרה בשעה 12:00 ע"י </Accordion.Header>
//                     <Accordion.Body className="accordions" >
//                        פרטים...
//                     </Accordion.Body>
//                 </Accordion.Item>              
//             </Accordion>
//             </div>            

//             <div className="center"><Accordion className="accordiond" >
//                 <Accordion.Item eventKey="0" className="accordiond">
//                     <Accordion.Header className="accordions">הבקשה אושרה בשעה 12:00 ע"י </Accordion.Header>
//                     <Accordion.Body className="accordions">
//                        פרטים...
//                     </Accordion.Body>
//                 </Accordion.Item>              
//             </Accordion></div>
//         </div>
//     )

// }
// export default A;








// const Accordion = ({ title, content }) => {
//     const [isActive, setIsActive] = useState(false);

//     return (
//       <div className="accordion-item">
//         <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
//           <div>{title}</div>
//           <div>{isActive ? '-' : '+'}</div>
//         </div>
//         {isActive && <div className="accordion-content">{content}</div>}
//       </div>
//     );
//   };

//   export default Accordion;

// 

const A = () => {
    const [isActive, setIsActive] = useState(false);
    const always="הבקשה התקבלה בתאריך"

    const arr = [{
        title: `${always} 1`,
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum cupiditate possimus labore, hic temporibus velit dicta earum
        suscipit commodi eum enim atque at? Et perspiciatis dolore iure
        voluptatem.`
    },{
        title: `${always} 2`,
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum cupiditate possimus labore, hic temporibus velit dicta earum
        suscipit commodi eum enim atque at? Et perspiciatis dolore iure
        voluptatem.`
    }];

    const { title, content } = arr;

    return (

        <div>
            <h1>React Accordion Demo</h1>
            <div className="accordion">
                {arr.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
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

export default A;



