import React, { useState } from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import jsPDF from "jspdf"
import html2canvas from "html2canvas"
import domtoimage from 'dom-to-image';
import RightBar from './RightBar/RightBar'
import Central from './Central/Central'
import Menu from './Menu/Menu'
import Index from './Index/Index';
import Login from './Login/Login';
import CourseLibrary from './CourseLibrary/CourseLibrary';
import LoginRightBar from './LoginRightBar/LoginRightBar';
import IndexRightBar from './IndexRightBar/IndexRightBar';
import SingUp from './SignUp/SignUp';
import Home from './Home/Home';
import Homerb from './HomeRightBar/HomeRightBar';
import Class from './Class/Class'
import CourseContent from "./CourseContent/courseContent";
import PDF from './PDF/PDF.jsx';
import SectionClass from './SectionClass/SectionClass';


const Content = () => {
   const [showMenu, setShowMenu] = useState(true);

   const printDocument =()=> {
        const input = document.getElementById('Certificado');
        const pdf = new jsPDF("l", "mm", "a5");
        if (pdf) {
          domtoimage.toPng(input)
            .then(imgData => {
              pdf.addImage(imgData,'PNG',-10, 0);
              pdf.save('download.pdf');
            });
        }
    }
    return (

        <div className="principal">

            {showMenu ? (null
                // <div className="left">
                //     <Menu />
                // </div>
            ) : null}
            <BrowserRouter>
                <div className="left">
                    <Menu />
                </div>
                <div className="center">
                    <Route path="/CourseContent" exact render={() =>
                        <Central
                            setShowMenu={setShowMenu} />}
                    />
                    <Route path="/" exact render={() =>
                        <Index
                            setShowMenu={setShowMenu} />}
                    />
                    <Route path="/Login" exact render={() =>
                        < Login
                            setShowMenu={setShowMenu} />}
                    />
                    <Route path="/CourseLibrary" exact render={() =>
                        < CourseLibrary
                            setShowMenu={setShowMenu} />}
                    />
                    <Route path="/SignUp" exact render={() =>
                        < SingUp
                            setShowMenu={setShowMenu} />}
                    />
                    <Route path="/Home" exact render={() =>
                        < Home
                            setShowMenu={setShowMenu}
                        />}
                    />
                    <Route path="/Class" exact render={() =>
                        < Class
                            setShowMenu={setShowMenu}
                        />}
                    />
                    <Route path="/CourseContent/:courseId" exact render={
                        (routeParams) => <CourseContent courseId={routeParams.match.params.courseId} />
                    }
                    />
                     <Route path="/pdf/:courseId" exact render={(routeParams) =>
                        < PDF
                            courseId={routeParams.match.params.courseId}
                            setShowMenu={setShowMenu}
                            printDocument={printDocument}
                            
                        />}
                    />                   
                </div>
                <div className="right">

                    <Route path="/Class" exact render={() =>
                        <RightBar
                        />}
                    />
                    <Route path="/Login" exact render={() =>
                        <LoginRightBar />}
                    />

                    <Route path="/" exact render={() =>
                        <IndexRightBar />}
                    />

                    <Route path="/Home" exact render={() =>
                        < Homerb
                            setShowMenu={setShowMenu} />}
                    />
                     <Route path="/CourseContent"  render={() =>
                       <RightBar />                }
                    />                   



                     

                </div>
            </BrowserRouter>
        </div>
    )
}

export default Content
