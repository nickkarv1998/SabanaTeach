import React from 'react'
import './IlustrationStyle.css';

export const Ilustracion = ({urlImg}) => {
    return (
        <div>
            <img className="ilustracion" src={urlImg}    alt=""/>
        </div>
    )
}


