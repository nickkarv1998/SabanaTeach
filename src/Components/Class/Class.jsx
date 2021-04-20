import React , {useEffect} from 'react'
import Video from '../Video'
import './Class.css'


const Class = ({ setShowMenu }) => {

    useEffect(() => {
        setShowMenu(true)
    }, [])

    return (
        <div className="Course">
            <div className="Title1">
                <h1>Como Funciona el computador</h1>
            </div>
            <div className="VideoContainer">
                <Video/>
            </div>
            <div className="CourseDescription">
                <h2>Descripción</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. s cumque blanditiis, nobis sunt debitis ullam molestias ea!</p>
            </div>
            <div className="CourseDescription">
                <h2>Transcripción</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit earum perferendis unde laborum totam enim est ea nemo tempora.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eveniet mollitia adipisci! Ab voluptatibus, iste exercitationem sint similique doloremque tenetur, tempore cupiditate illum fuga dolor ipsam eaque, aut aperiam consectetur.</p>
            </div>
        </div>
    )
}

export default Class