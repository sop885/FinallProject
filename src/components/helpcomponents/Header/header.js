import React from 'react'
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap'
import './header.css'
import p1 from '../../pictures/p1.png'
import { Link , useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

const Header = (props) => {

  useEffect(()=>{
    debugger
    window.addEventListener("locationchange",()=>{
      document.getElementById(window.location.pathname).classList.add('active')
    console.log(document.getElementById(window.location.pathname))
    })
  },[])
  let navigate = useNavigate()
  function linkh(){
navigate("/home")
  }
  let { head } = props;
  function checkActive(current) {
    let allButtons=document.getElementsByClassName("link")
    for (let i = 0; i < allButtons.length; i++) {
      allButtons[i].classList.remove('active')
    }
    console.log(allButtons)
setTimeout(() => {
  if(window.location.pathname=="/"+current){
    document.getElementById(current).classList.add('active')
    console.log(document.getElementById(current))
   }
}, 200);

    
  }

  
  return (
    <div class="container-fluid" className="header">
      <div row>

        <div col><button className="l" onClick={linkh}><img src={p1} className="p" ></img></button></div>
        <div col>
          <ButtonToolbar aria-label="navigation bar">
            <ButtonGroup className="headerb" aria-label="home page" style={{fontSize: "14px",height:"45px"}}>
            <Link className="link buttond" id="information" to="/information" onClick={()=>checkActive("information")}>מידע כללי</Link>
            <Link className="link buttond" id="history" to="/history" onClick={()=>checkActive("history")}>היסטוריה</Link>
              <Link className="link buttond" id="calender" to="/calender" onClick={()=>checkActive("calender")}>לוח השנה שלי</Link>
              <Link className="link buttond" id="formFillRequest" to="/formFillRequest" onClick={()=>checkActive("formFillRequest")}>פתיחת בקשה</Link>
              <Link className="link buttond" id="formMessages" to="/formMessages" onClick={()=>checkActive("formMessages")}>הודעות</Link>
              <Link className="link buttond" id="form" to="/form" onClick={()=>checkActive("form")}>איזור אישי</Link>
              <Link className="link buttond" id="home" to="/home" onClick={()=>checkActive("home")}>דף הבית </Link>
              {/* <Button className="buttond">דף הבית</Button> */}
            </ButtonGroup>
          </ButtonToolbar>
        </div>
      </div>

      <div row>


      </div>

    </div>
  )
}

export default Header;