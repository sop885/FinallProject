import React from 'react'
import Form from 'react-bootstrap/Form'
import './information.css'

const InformationForm = (props) => {

    return (
        <div style={{ marginRight: "20%" }} className="myformc">
            <Form>
                <h1><u>אופן השימוש באתר</u></h1>
                <h2><b>איזור אישי</b></h2>
                <h3>.ניתן לשנות את פרטייך בכל עת ע"י לחיצה על "שמור" לאחר ביצוע השינויים<br />
                    יש לשים לב למצב הסטטוס שלך,
                    במקרה שהסטטוס עומד על "ממלא/ת מקום" הינך מוגדר/ת במערכת כמחפש עבודה וישלחו אלייך התראות
                    בקשה למילוי מקום אך אם הינך מוגדר/ת כ"מחפש/ת ממלא/ת מקום" לא יישלחו אלייך בקשות למילוי מקום עד לשינוי הסטטוס ל"ממלא/ת מקום".
                </h3>
                <h2><b>הודעות</b></h2>
                <h3> במידה והינך ממלא/ת מקום- כאן יופיעו בקשות למילוי מקום שנשלחו אלייך,
                    באפשרותך לראות את פרטי הבקשה ובמידה והינך מעוניין
                    .לחץ על "אישור הבקשה", לאחר מכן פרטי בקשה זו יופיעו בהסיטוריית הפעולות שלך
                    <br />  ע"י לא מקום כולשהו, במידה והינך מחפש/ת ממלא/ת מקום- כאן יופיעו לך הודעות על בקשות שביצעת ואושרו
                    באפשרותך לראות את פרטי ממלא/ת המקום וליצור קשר.
                </h3>
                <h2><b>פתיחת בקשה</b></h2>
                <h3>כאן תוכל/י לפתוח בקשה למילוי מקום, לאחר הכנסת כל הפרטים הנדרשים לחץ על "המשך", אז יופיעו לך כל המחליפים הזמינים לבקשתך לאחר סינון הנתונים,
                    לאחר מכן עלייך לבחור את מחליפים שלהם הינך מעוניין לשלוח את הבקשה וללחוץ על "שלח בקשה".
                    <br /> פרטי הבקשה יופיעו לך בדף ה"הסטוריה"
                    באפשרותך להתעדכן בסטטוס הבקשה, האם אושרה או שעדיין ממתינה לאישור.
                </h3>
                <h2><b>לוח השנה שלי</b></h2>
                <h3> .כאן תוכל/י לראות את הימים שבהם את/ה ממלא/ת מקום או שבהם מחליפים אותך, ימים אלו יסומנו באפור
                </h3>

                <h2><b>קישורים יעילים למילוי טפסים עבור ממלאי מקום</b></h2>
                
                <a className="a" href="https://poh.education.gov.il/merhavminhali/sacharleovdeimedina/pages/teummas.aspx">לחצ/י כאן למילוי טופס 101 ותיאום מס מטעם משרד החינוך</a><br />                   
                <a className="a"  href="https://meyda.education.gov.il/files/Hashavut/tfasim/2-%20Shelonlmm.pdf"> לחצ/י כאן לשאלון וכללים לממלא/ת מקום בבית ספר/גן ילדים מטעם משרד החינוך </a><br /> 
                <a className="a"  href="https://mosdot.education.gov.il/education-hr/teachers-assigning/online_teacher_file">  לחצ/י כאן לטופס פתיחת תיק מקוון לעובדי הוראה חדשים במשרד החינוך</a>   
                <br /> <br /> <br />                               
            </Form>
        </div>
    )
}
export default InformationForm;