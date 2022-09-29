import React from 'react'

const MapLocation = ({ clubLocation }) => {
   const src = `https://maps.google.com/maps?q=${clubLocation}&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;&output=embed`
    return (
        <div id="#location">
            <iframe src={src} title={clubLocation} style={{ width: "97%", height: "50vh" }} allowFullScreen></iframe>
        


        </div>
    )
}

export default MapLocation