import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import CourseContent from './courseContent'


const Central = () => {
    return (
        [
            <SearchBar/>,
            <CourseContent name="Introduccion a la Tecnología"/>
        ]
    )
}

export default Central
