import React from 'react'
import { Ilustracion } from './Ilustracion'
import SectionClass from './SectionClass'

const BarraLatera = ({ urlImg }) => {
    return (
        <div className="BarraLatera">
            <div className="ilustracion">
                <Ilustracion
                    urlImg='https://blush.design/api/download?shareUri=cOP92rrhr&c=skin_0.1%7E9f91ca-0.4%7E604891-0.5%7E9f91ca&w=800&h=800&fm=png'
                />
            </div>
            <div className="title">
                <h1>Introduccion a la Tecnología</h1>
            </div>
            <div className="sections">
                <SectionClass class="selected" name="Resumen" link="#resumen"/>
                <SectionClass name="Clase 1" link="#clase1"/>
                <SectionClass name="Clase 2" link="#clase2"/>
                <SectionClass name="Evaluación 1" link="#test1"/>
                <SectionClass name="Clase 3" link="#clase3"/>
                <SectionClass name="Clase 3" link="#clase4"/>
                <SectionClass name="Evaluación 2" link="#test2"/>
                <SectionClass name="Final" link="#final"/>
            </div>
        </div>

    )
}

export default BarraLatera
