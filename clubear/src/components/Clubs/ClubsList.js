import React from 'react'
import ReactWhatsapp from 'react-whatsapp';
import { FaWhatsapp } from 'react-icons/fa'
import Club from './Club';
const ClubsList = ({ clubs }) => {
    return (
        <>
            <div className='sasik'>
                <ReactWhatsapp className='whatsappIcon' number="+972525723366" message='מה קורה דוב ? אני רוצה להזמין שולחן '><span className='whatsappText'>דברו איתנו</span><FaWhatsapp style={{ color: 'white', padding: '0.2rem', backgroundColor: 'green', borderRadius: '50px' }} className='what__icon__home' /></ReactWhatsapp>
                <div className='gridContainer' id='#clubs'>
                    {clubs?.map((club) => {
                        return <Club
                            key={club._id}
                            clubId={club._id}
                            clubName={club.clubName}
                            description={club.description}
                            openingTime={club.openingTime}
                            phoneNumber={club.phoneNumber}
                            clubImg={club.clubImg}
                        />
                    })}
                </div>
            </div>
        </>
    )
}

export default ClubsList


