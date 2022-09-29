import React from 'react'
import './About.css'
import aboutUsImg from '../../assets/Images/about.jpeg'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
const About = () => {
  return (
    <>
    <Navbar/>
    
    <div className='aboutUsContainer'>
    <div className='about__right__side'>
        <h2>Welcome to CLUBEAR</h2>
        <p>הכל התחיל שהזענו בתור בכניסה לאחד המועדונים הגדולים בישראל, אני יודע מה אתם רוצים להגיד, למה הוא לא הזמין שולחן? אז זה בדיוק הקטע, הזמנו שולחן גדול אבל היחצן והסלקטורית משחקים אותה לא שומעים את הצעקות. 
אתם כבר מכירים את הסיטואציה מיותר להמשיך…
אנחנו בקלאבר הולכים לתת לך שירות מדהים, בלי להתווכח עם יחצנים או להיות תלויים באנשים, תקבעו עם החברים, תזמינו מהדוב, מה שנשאר לכם זה רק לעצום עיניים, להקשיב לצלילים, ולשתות כאילו מחר אין בשביל מה לקום בבוקר. 
אוהבים מכבדים ומעריכים צוות CLUBEAR</p>
<span>!ואיך הדוב תמיד אומר: ומי שלא רוקד שלא תהיה לו פרנסה</span>
    </div>
    <div className='about__left__side'>
    <img src={aboutUsImg}  alt='bear'/>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default About