import React, { useRef } from "react"
import Table from 'react-bootstrap/Table'
import './table.css'
const Tablet = (props) => {

    const checkBoxRef=useRef(null)
    const arr = [
        { id: 0, name: "tzofia" },
        { id: 1, name: "tzofia" },
       
    ]
    function chooseAll(){
        debugger
        // let list=checkBoxRef.current.checked=true
        let list=document.getElementsByClassName('inputi');
        let b=document.getElementsByClassName('chooseAll');
        
      for (let i = 0; i < list.length; i++) {
          const element = list[i];
          element.checked=b[0].checked
      }
    }
function Resert(){
   
    let list=document.getElementsByClassName('inputi');
        
        
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        element.checked=false
    }
    let b=document.getElementsByClassName('chooseAll');
    b[0].checked=false;
}

function check(){

    let list=document.getElementsByClassName('inputi');
     let flag=true;   
        
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if(element.checked==false)
        flag=false;
    }
    let b=document.getElementsByClassName('chooseAll');
    if(flag==true)
    b[0].checked=true;
    else
    b[0].checked=false;

}
    return (
        <div>
            {/* <h6 className="head">:להלן המחליפים הנמצאו מתאימים לבקשתך</h6> */}
            <Table striped bordered hover className="table">
                <thead>
                    <tr className="head">
                        <th>פלאפון</th>
                        <th>גיל</th>
                        <th>שם</th>
                        <th>תמונת פרופיל</th>
                        <th>בחר הכל <input type="checkbox" className="chooseAll" onClick={chooseAll}></input> </th>
                    </tr>
                </thead>
                <tbody>
                    { arr.map((item,index)=>
                     <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td></td>
                        <td> <input type="image"></input></td>
                        <td><input type="checkbox" className="inputi" ref={checkBoxRef} onClick={check}></input></td>
                    </tr>
                    
                    )}
                   
                </tbody>
            </Table>
            <button onClick={Resert} className="buttond">Resert</button>
        </div>

    );
}
export default Tablet