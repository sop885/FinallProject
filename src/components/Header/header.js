import React from 'react'
import { Button,ButtonToolbar,ButtonGroup } from 'react-bootstrap'
import './header.css'


const Header = (props) => {
  let { head } = props
  return (
    <div className="header">
      <ButtonToolbar aria-label="navigation bar">
        <ButtonGroup className="headerb" aria-label="home page">
           <Button>מידע כללי</Button><Button> לוח השנה שלי</Button><Button>הודעות ממתינות</Button><Button>היסטוריית פעולות</Button><Button>פתיחת בקשה</Button><Button>איזור אישי</Button><Button >דף הבית</Button>
        </ButtonGroup>      
      </ButtonToolbar>
     
     
    </div>
  )
}

export default Header;