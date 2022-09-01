import React, { useRef } from "react"
import Table from 'react-bootstrap/Table'
import './table.css'
import According from '../accordion/a'
const Tablet = (props) => {

    const checkBoxRef=useRef(null)
    const arr = [
        { id: 0, name: "tzofia" ,hour:"09:09",date:"01/01/2020"},
        { id: 1, name: "tzofia" ,hour:"09:15",date:"05/03/2020"},
       
    ]
    const always1="הבקשה התקבלה בתאריך"
    const always2="בשעה"
    return (
        <div>
            <h6 className="head">:הודעות מהמערכת</h6>
            <Table striped bordered hover className="tableWaiting">
                {/* <thead>
                    <tr className="head">
                        
                    </tr>
                </thead> */}
                <tbody>
                    { arr.map((item,index)=>
                     <tr>
                        <td><According></According></td>
                        <td>{always2} {item.hour}</td>
                        <td>{always1} {item.date}</td>
                        <td>{item.name}</td>
                        <td><input type="image"></input></td>
                    </tr>
                    
                    )}
                   
                </tbody>
            </Table>
            
        </div>

    );
}
export default Tablet

