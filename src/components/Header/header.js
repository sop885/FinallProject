import React from 'react'
import { Button,ButtonToolbar,ButtonGroup } from 'react-bootstrap'
import './header.css'
import p1 from '../pictures/p1.png'

const Header = (props) => {
  let { head } = props
  return (
    <div className="header">
      <img src={p1} ></img>
      <ButtonToolbar aria-label="navigation bar">
        <ButtonGroup className="headerb" aria-label="home page">
           <Button className="buttond">מידע כללי</Button><Button className="buttond"> לוח השנה שלי</Button><Button className="buttond">הודעות ממתינות</Button><Button className="buttond">היסטוריית פעולות</Button><Button className="buttond">פתיחת בקשה</Button><Button className="buttond">איזור אישי</Button><Button className="buttond">דף הבית</Button>
        </ButtonGroup>      
      </ButtonToolbar>
     
     
    </div>
  )
}

export default Header;