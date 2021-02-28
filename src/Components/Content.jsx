import React from 'react'
import BarraLatera from './BarraLatera'
import Central from './Central'

import Menu from './Menu'


 const Content = () => {
    return (
        <div className="principal">
            <div className="left">
                
                <Menu />
            </div>
            <div className="center">
             <Central/>
            </div>
            <div className="right">
                <BarraLatera/>
                 
            </div>
        </div>
    )
}

export default Content

