import React, { Component } from 'react'
import { Logo } from '../Logo/Logo'
import MenuButton from '../MenuButton/MenuButton'
import styles from './MenuStyle.module.css';
import { connect } from "react-redux";
import * as actionTypes from "../../Store/actions";



class Menu extends Component {

    constructor(props) {
        super()
    }

    render() {
        if (this.props.logged) {
            return (
                <div className={styles.menu}>
                    <div className={styles.logo}>
                        <Logo
                            urlImg='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMDcgNTEyLjAwNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMzkzLjQ2OCAyODEuMjU1Yy00LjA3OS0uNjE4LTcuOTE5IDIuMTkzLTguNTM5IDYuMjkxLTUuNDQzIDM1Ljg5OS0yNS45MzkgNjguMTU5LTU2LjIzMSA4OC41MDktNy44OCA1LjI5My0xMi41ODUgMTQuMDk0LTEyLjU4NSAyMy41NDJ2MTIuNTEzaC01Mi40NTR2LTgzLjI0YzE2LjYzMi0zLjQ3MSAyOS4xNjQtMTguMjQzIDI5LjE2NC0zNS44OSAwLTQuMTQzLTMuMzU3LTcuNS03LjUtNy41cy03LjUgMy4zNTctNy41IDcuNWMwIDExLjk0NS05LjcxOSAyMS42NjQtMjEuNjY0IDIxLjY2NHMtMjEuNjYzLTkuNzE5LTIxLjY2My0yMS42NjRjMC00LjE0My0zLjM1Ny03LjUtNy41LTcuNXMtNy41IDMuMzU3LTcuNSA3LjVjMCAxNy42NDcgMTIuNTMyIDMyLjQxOSAyOS4xNjMgMzUuODl2ODMuMjM5aC01Mi40NTR2LTEyLjUxMWMwLTkuNDQ2LTQuNzE2LTE4LjI1NS0xMi42MTUtMjMuNTY0LTM2Ljg4OS0yNC43OTUtNTguNDQ4LTY2LjEwOC01Ny42NzEtMTEwLjUxNS4zOTItMjIuNDE5IDYuNjUzLTQ0LjQ2MyAxOC4xMDYtNjMuNzUgOC43ODEtMTQuNzg2IDIwLjQ3MS0yNy43NSAzNC4yMTItMzguMDcxdjUuNjUyYzAgNy40NzUgNC40NjYgMTQuMTczIDExLjM3NiAxNy4wNjQgMjIuMDgxIDkuMjQxIDQ0LjMxIDEzLjg2IDY2LjU0NyAxMy44NTkgMjIuMjMtLjAwMSA0NC40Ny00LjYyMSA2Ni41NDUtMTMuODU5IDYuOTExLTIuODkyIDExLjM3Ny05LjU5IDExLjM3Ny0xNy4wNjR2LTUuODY4YzMwLjM1MiAyMi42ODIgNDkuNTM3IDU3LjU1NCA1Mi4wNDUgOTUuNjkzLjI2MSAzLjk2NiAzLjU1OCA3LjAwOCA3LjQ3NiA3LjAwOC4xNjYgMCAuMzMzLS4wMDUuNS0uMDE3IDQuMTMzLS4yNzEgNy4yNjQtMy44NDIgNi45OTEtNy45NzYtMy4wMzYtNDYuMTkyLTI3Ljk4Ny04OC4wOTUtNjcuMDEyLTExMi45Mzl2LTQ4LjAzbDM0Ljc5OS0xOS4xNDljMy4xODEtMS43NSA1LjE1Ni01LjA5MiA1LjE1Ni04LjcyM3MtMS45NzYtNi45NzMtNS4xNTUtOC43MjNsLTEwNy45MjctNTkuMzg4Yy0zLjAwMi0xLjY1LTYuNTg5LTEuNjUxLTkuNTk3LjAwMWwtNDkuMDYzIDI2Ljk5OWMtMy42MjkgMS45OTctNC45NTEgNi41NTktMi45NTUgMTAuMTg4IDEuOTk4IDMuNjI4IDYuNTU3IDQuOTUxIDEwLjE4OCAyLjk1NWw0Ni42MzEtMjUuNjYxIDk3LjQ1OSA1My42M2MtNi42NjMgMy42NjctNDkuMDg1IDI3LjAxMS01NC42NzggMzAuMDg5bC0zNy42MzEtMzUuNTQxYy0zLjAxMS0yLjg0NC03Ljc1OC0yLjcxLTEwLjYwMi4zMDMtMi44NDUgMy4wMTEtMi43MDkgNy43NTguMzAzIDEwLjYwMmwzNC4xMjggMzIuMjMyLTI4Ljk3NyAxNS45NDZjLTEwLjAyNy01LjUxOC04Ni4zODQtNDcuNTM2LTk3LjQ1OS01My42M2wyNC4wMjItMTMuMjE5YzMuNjI5LTEuOTk3IDQuOTUxLTYuNTU5IDIuOTU1LTEwLjE4OC0xLjk5Ny0zLjYyOC02LjU1Ni00Ljk1Mi0xMC4xODgtMi45NTVsLTMyLjA1MyAxNy42MzljLTMuMTgxIDEuNzUtNS4xNTYgNS4wOTItNS4xNTYgOC43MjNzMS45NzYgNi45NzMgNS4xNTUgOC43MjNsMzQuOCAxOS4xNDl2NDguMjE3Yy0xOS4yMjkgMTIuMzA1LTM1LjQ2IDI5LjA1NS00Ny4xMDggNDguNjcxLTEyLjc4MyAyMS41MjQtMTkuNzcxIDQ2LjEyNy0yMC4yMDggNzEuMTQ3LS44NjYgNDkuNTE1IDIzLjE3MiA5NS41OCA2NC4zMDIgMTIzLjIyNiAzLjc0NiAyLjUxOCA1Ljk4MiA2LjY3MyA1Ljk4MiAxMS4xMTV2NjEuNzk0YzAgMjcuOTA5IDIyLjcwNiA1MC42MTQgNTAuNjE1IDUwLjYxNGgxMS4yMjdjNC4xNDMgMCA3LjUtMy4zNTcgNy41LTcuNXMtMy4zNTctNy41LTcuNS03LjVoLTExLjIyN2MtMTkuNjM5IDAtMzUuNjE1LTE1Ljk3Ny0zNS42MTUtMzUuNjE0di0zNC4yODNoMTE5LjkwOXYzNC4yODNjMCAxOS42MzgtMTUuOTc3IDM1LjYxNC0zNS42MTQgMzUuNjE0aC03LjQ2NmMtNC4xNDMgMC03LjUgMy4zNTctNy41IDcuNXMzLjM1NyA3LjUgNy41IDcuNWg3LjQ2NmMyNy45MDkgMCA1MC42MTQtMjIuNzA1IDUwLjYxNC01MC42MTR2LTQxLjc4M2MwLS4wMDctLjAwMS0uMDEzLS4wMDEtLjAxOXYtMTkuOTkzYzAtNC40NDIgMi4yMjQtOC41ODkgNS45NDktMTEuMDkxIDMzLjc3My0yMi42ODggNTYuNjI2LTU4LjY2NiA2Mi42OTctOTguNzEyLjYyMS00LjA5Ni0yLjE5Ni03LjkxOS02LjI5MS04LjU0em0tMTQyLjEwNi0xNDMuNzk0YzEuNTAxLjgyNSAzLjE0OCAxLjIzOCA0Ljc5NiAxLjIzOCAxLjY0NyAwIDMuMjk3LS40MTMgNC44MDEtMS4yMzlsMjkuMzA2LTE2LjEyN3YzOS45ODFjMCA0LjE0MyAzLjM1NyA3LjUgNy41IDcuNXM3LjUtMy4zNTcgNy41LTcuNXYtNDguMjM1bDEzLjgxNi03LjYwM3Y2My44NzVjMCAxLjQwOS0uODUxIDIuNjc2LTIuMTY3IDMuMjI3LTQwLjMxNSAxNi44NzQtODEuMTk2IDE2Ljg3NC0xMjEuNTEyIDAtMS4zMTUtLjU1MS0yLjE2Ni0xLjgxNy0yLjE2Ni0zLjIyN3YtNjMuODc1eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yODYuMjU0IDQ2NS43NGMwLTQuMTQzLTMuMzU3LTcuNS03LjUtNy41aC00NS4xOWMtNC4xNDMgMC03LjUgMy4zNTctNy41IDcuNXMzLjM1NyA3LjUgNy41IDcuNWg0NS4xOWM0LjE0MiAwIDcuNS0zLjM1NyA3LjUtNy41eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+'
                        />
                        <aside>SabanaTeach</aside>
                    </div>
                    <nav className={styles.navbar}>
                        <MenuButton name="Perfil" link="/home" />
                        <MenuButton name="Cursos" link="/courselibrary" />
                        <MenuButton name="About Us" link="#About US" />
                        <MenuButton name="Log Out" clicked={() => this.props.onLogout()}/>
                    </nav>
                </div>
            )
        }
        else{
            return null
        }
    }
}

const mapStateToProps = (state) => {
    return {
        logged: state.sesionStore.IsUserLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch({ type: actionTypes.LOGOUT}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
