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



const Content = () => {
    return (

        <div className="principal">
            <BrowserRouter>
                <Switch>
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

                </Switch>
                <div className="center">
                    <Route path="/CourseContent" exact render={() =>
                        <Central />}
                    />
                    <Route path="/" exact render={() =>
                        <Index />}
                    />
                    <Route path="/Login" exact render={() =>
                        < Login />}
                    />
                    <Route path="/CourseLibrary" exact render={() =>
                        < CourseLibrary />}
                    />
                    <Route path="/SingUp" exact render={() =>
                        < SingUp/>}
                    />
                </div>
                <div className="right">
                    <Route path="/CourseContent" exact render={() =>
                        <RightBar />}
                    />
                    <Route path="/Login" exact render={() =>
                        <LoginRightBar />}
                    />

                    <Route path="/" exact render={() =>
                        <IndexRightBar />}
                    />
                  



                </div>


            </BrowserRouter>
        </div>
    )
}

export default Content
