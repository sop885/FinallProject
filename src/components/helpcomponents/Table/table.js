import React, { useRef, useState } from "react"
import Table from 'react-bootstrap/Table'
import './table.css'
import Submitb from '../button/submitb'
import Resetb from '../button/resetb'
const Tablet = (props) => {
    let { users } = props;
    console.log(users);
    const [selectedUsers, setSelectedUsers] = useState([])
    const checkBoxRef = useRef(null)
    // const arr = [
    //     { id: users.UserId, name: users.UserName },
    //     { id: 1, name: "tzofia" },

    // ]
    function chooseAll() {
        debugger
        // let list=checkBoxRef.current.checked=true
        let list = document.getElementsByClassName('inputi');
        let b = document.getElementsByClassName('chooseAll');

        for (let i = 0; i < list.length; i++) {
            const element = list[i];
            element.checked = b[0].checked
        }
    }
    function Resert() {

        let list = document.getElementsByClassName('inputi');


        for (let i = 0; i < list.length; i++) {
            const element = list[i];
            element.checked = false
        }
        let b = document.getElementsByClassName('chooseAll');
        b[0].checked = false;
    }

    function check() {

        let list = document.getElementsByClassName('inputi');
        let flag = true;
        let selected=[]
        for (let i = 0; i < list.length; i++) {
            const element = list[i];
            if (element.checked == false)
                flag = false;
            if (element.checked == true)
                selected.push(users[i])
        }
        setSelectedUsers(selected)
        let b = document.getElementsByClassName('chooseAll');
        if (flag == true)
            b[0].checked = true;
        else
            b[0].checked = false;

    }

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
        <div>
            {/* <h6 className="head">:להלן המחליפים הנמצאו מתאימים לבקשתך</h6> */}
            <Table striped bordered hover className="tableFilter">
                <thead>
                    <tr className="head">
                        {/* <th>userID</th> */}
                        <th>מין</th>
                        <th>תעודת הוראה</th>                        
                        <th>גיל</th>
                        <th>פלאפון</th>
                        <th>שם</th>
                        <th>תמונת פרופיל</th>
                        <th >בחר הכל <input type="checkbox" className="chooseAll" onClick={chooseAll}></input> </th>


                    </tr>
                </thead>
                <tbody>
                    {users && users.length && users.map((item, index) =>
                        <tr key={index}>
                            {/* <td>{item.UserId}</td>  */}
                            <td>{item.Gender}</td>                            
                            <td>{item.Diploma}</td>
                            <td>{getAge(item.BirthDate)}</td>
                            <td>{item.PhoneNumber}</td>
                            <td>{item.UserName}</td>
                            <td>{item.Imag&&<img src={`http://localhost:3000/${item.Imag?.path}`}  className="imgaco"/>}</td>
                            <td><input type="checkbox" className="inputi" ref={checkBoxRef} onClick={check}></input></td>
                        </tr>

                    )}

                </tbody>
            </Table>
            {/* <button   ><b>שלח בקשה</b></button>  
            <button onClick={Resert}  style={{width:"10%",}}>לאיפוס</button> */}
            {/* <button  className="buttond">Resert</button> */}
            <Submitb selectedUsers={selectedUsers}/>
            {/* <Resetb /> */}

        </div>

    );
}
export default Tablet