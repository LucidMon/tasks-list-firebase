import React from 'react';

import ImageLogo  from '../assets/images/portapapeles-icon.jpg'

export const LogoApp = ({size}: {size: number}) => {
    return(
        <div className="LogoApp" style={{display:'flex', alignItems:'center', fontSize:`${size*0.3571}px`, fontStyle:'italic'}}>
            <span style={{textDecoration:'line-through', textDecorationThickness:'4px', textDecorationColor:'#EA4235'}}>To</span>
            <img style={{width:`${size*0.7142}x`, height:`${size}px`, marginRight:'10px', marginLeft:'10px'}} src={ImageLogo} alt="ImageLogo" />
            <span>Do</span>
        </div>
    )
}