import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';

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


const Content = ({showMenu, setShowMenu}) => {
    return (

        <div className="principal">

            {showMenu ? (
                <div className="left">
                    <Menu/>
                </div>
            ) : null}
            <BrowserRouter>
                <div className="center">
                    <Route path="/CourseContent" exact render={() =>
                        <Central
                            setShowMenu={setShowMenu}/>}
                    />
                    <Route path="/" exact render={() =>
                        <Index
                            setShowMenu={setShowMenu}/>}
                    />
                    <Route path="/Login" exact render={() =>
                        < Login
                            setShowMenu={setShowMenu}/>}
                    />
                    <Route path="/CourseLibrary" exact render={() =>
                        < CourseLibrary
                            setShowMenu={setShowMenu}/>}
                    />
                    <Route path="/SignUp" exact render={() =>
                        < SingUp
                            setShowMenu={setShowMenu}/>}
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
                        (routeParams) => <CourseContent courseId={routeParams.match.params.courseId}/>
                    }
                    />
                </div>
                <div className="right">

                    <Route path="/Class" exact render={() =>
                        <RightBar
                        />}
                    />
                    <Route path="/Login" exact render={() =>
                        <LoginRightBar/>}
                    />

                    <Route path="/" exact render={() =>
                        <IndexRightBar/>}
                    />

                    <Route path="/Home" exact render={() =>
                        < Homerb
                            setShowMenu={setShowMenu}/>}
                    />
                     
                </div>


            </BrowserRouter>
        </div>
    )
}

export default Content
