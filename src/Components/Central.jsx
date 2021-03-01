import React from 'react'
import BarraBusqueda from './BarraBusqueda'
import CourseContent from './courseContent'


const Central = () => {
    return (
        [
            <BarraBusqueda/>,
            <CourseContent name="Introduccion a la Tecnología"/>
        ]
    )
}

export default Central
