import React  , {useEffect}  from 'react'
import SearchBar from '../SearchBar/SearchBar'
import CourseContent from '../CourseContent/courseContent'
import '../../index.css'


const Central = ({setShowMenu}) => {
    useEffect(() => {
        setShowMenu(true)
        
      }, [])
    return (
        [
            <SearchBar/>,
            <CourseContent name="Introduccion a la Tecnología"/>
        ]
    )
}

export default Central
