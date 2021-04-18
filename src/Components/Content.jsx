import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import RightBar from './RightBar/RightBar'
import Central from './Central'

import Menu from './Menu/Menu'
import Index from './Index/Index';
import Login from './Login/Login';
import CourseLibrary from './CourseLibrary/CourseLibrary';
import LoginRightBar from './LoginRightBar/LoginRightBar';
import IndexRightBar from './IndexRightBar/IndexRightBar';
import SingUp from './SignUp/SignUp';
import Home from './Home/Home';
import Homerb from './HomeRightBar/HomeRightBar';



const Content = ({ showMenu, setShowMenu }) => {
    return (

        <div className="principal">

            {showMenu ? (
                <div className="left">
                    <Menu />
                </div>
            ): null}
            <BrowserRouter>
                {/* <Switch>
                <Route path="/CourseContent" exact render={() =>
                    <div className="left">

                        <Menu />
                    </div>}
                />
                <Route path="/CourseLibrary" exact render={() =>
                    <div className="left">

                        <Menu />
                    </div>}
                />
                  <Route path="/Home" exact render={() =>
                    <div className="left">

                        <Menu />
                    </div>}
                />

                </Switch> */}
                <div className="center">
                    <Route path="/CourseContent" exact render={() =>
                        <Central
                        setShowMenu={setShowMenu} />}
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
                        setShowMenu={setShowMenu}/>}
                    />
                    
                </div>
                <div className="right">
                    <Route path="/CourseContent" exact render={() =>
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
                        setShowMenu={setShowMenu}/>}
                    />




                </div>


            </BrowserRouter>
        </div>
    )
}

export default Content
