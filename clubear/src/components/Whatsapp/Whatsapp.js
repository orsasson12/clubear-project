import React from 'react';
import ReactWhatsapp from 'react-whatsapp';
import './Whatsapp.css'
import { FaWhatsapp } from 'react-icons/fa'
const Whatsapp = () => {
    return (
        <div>
        <span>לפרטים נוספים :</span>   <ReactWhatsapp className='icon' number="+972525723366" message="מה קורה דוב ? אני רוצה להזמין שולחן "> <FaWhatsapp className='what__icon' /> </ReactWhatsapp>
        </div>
    )
}

export default Whatsapp