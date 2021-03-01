import React from 'react'
import { Search } from 'react-bootstrap-icons';

const BarraBusqueda = () => {
    return (
        <div className="barra">
            <Search/>
            <form style={{display: 'inline-block'}}>
                <input type="text" name="name" className="busqueda" placeholder="Search.." style={{display: 'inline-block'}}/>
             {/* <input type="submit" value="Submit" /> */}
            </form>
        </div>
    )
}

export default BarraBusqueda
