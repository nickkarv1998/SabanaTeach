import React, { useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import CourseContent from '../CourseContent/courseContent'
import '../../index.css'
// import { Redirect } from "react-router-dom";


const Central = ({ setShowMenu }) => {
    useEffect(() => {
        setShowMenu(true)

    }, [])
    // if (!this.props.logged) {
    //     return <Redirect to='/login' />
    // }
    return (

        [
            <SearchBar />,
            <CourseContent name="Introduccion a la Tecnología" />
        ]
    )
}

export default Central
