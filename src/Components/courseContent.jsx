import React from 'react'
import Video from './Video'
import CourseBasicInfo from './CourseBasicInfo'

const CourseContent = (props) => {
    return (
        <div className="CourseContent">
            <div className="Title">
                <h1>{props.name}</h1>
            </div>
            <div className="VideoContainer">
                <Video/>
            </div>
            <CourseBasicInfo duration="2 hrs" teacher="Miguel Camacho" cert="Sí" />
            <div className="CourseDescription">
                <h2>Descripción</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quo numquam quasi perspiciatis nihil minus doloremque laudantium ipsa quam officia quibusdam dolor voluptas eum beatae ratione recusandae eaque corrupti voluptatem accusamus, voluptatibus, illum dignissimos consectetur nobis ex. Iusto architecto recusandae molestiae ab sapiente similique earum vero, necessitatibus doloribus molestias. Molestiae explicabo aspernatur ducimus labore odio aut dicta praesentium nobis aliquam eius nulla, exercitationem facere nesciunt voluptates ullam excepturi dolorum vero saepe dignissimos. Nesciunt possimus impedit dicta error rerum ducimus voluptates necessitatibus inventore et exercitationem. Impedit, nobis atque? Quae temporibus nemo saepe, expedita numquam consequuntur quidem ab sequi aperiam, aspernatur ex quas assumenda sed rem sit inventore molestias voluptatem maiores, impedit alias? Necessitatibus nemo eum quam ratione ut, quia et doloribus amet incidunt itaque quos illo iure tempore id sapiente voluptatibus nobis sed odio facilis! Suscipit maxime alias fuga neque libero a nemo et! Deserunt neque ullam minus, nulla velit deleniti esse! Sit, nulla? Optio reprehenderit eos quisquam eius architecto et voluptatum, dolorum deleniti impedit provident sint, reiciendis, praesentium nisi ex totam saepe dignissimos consequatur. Sint alias mollitia dolore, consectetur eius odit aperiam itaque nobis? Consectetur, et sapiente ut esse quis odit, facilis cumque blanditiis, nobis sunt debitis ullam molestias ea!</p>
            </div>
        </div>
    )
}

export default CourseContent