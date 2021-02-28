import React from 'react'

const BarraBusqueda = () => {
    return (
        <div className="barra">
            <form >
            <label>
                <input type="text" name="name" className="busqueda" />
            </label>
             {/* <input type="submit" value="Submit" /> */}
            </form>
        </div>
    )
}

export default BarraBusqueda
