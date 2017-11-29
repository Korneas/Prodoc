import * as React from 'react';
import { BottomBar } from './bottom_bar';
import { Home } from './home';
import { MenuHome } from './menu_home';
import { Login } from './login';
import { CreateProject } from './create_project';
import { Project } from './project';
import { DocumentPrev } from './document_prev';
import { Document } from './document';
import * as firebase from 'firebase';

export class Root extends React.Component<any, any>{

    state = {
        projects: [],
        user: null,
        openMenu: false,
        openNotify: false,
        addProject: false,
        expoProject: -1
    }

    componentWillMount() {
        if (localStorage.getItem('user')) {
            this.setState({
                user: JSON.parse(localStorage.getItem('user')),
                projects: JSON.parse(localStorage.getItem('projects'))
            });
        }
    }

    renderInicio() {
        return (
            <div className='banner'>
                <div id='container'>
                    <h4 className='subHeader'>Hola, {this.state.user.displayName}</h4>
                    <img width='100' src={this.state.user.photoURL} alt={this.state.user.displayName} />
                    <br />
                </div>
            </div>
        )
    }

    setData(user, projects) {
        this.setState({
            user: user,
            projects: projects
        });

        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    onLogOut(cmd) {
        if (cmd.includes('logout')) {
            this.setState({
                user: null,
                projects: [],
                openMenu: false
            });
            localStorage.clear();
        }
    }

    onCreateProject = (addProject) => {
        this.setState({
            addProject: addProject
        });
    }

    onViewProject = (actualProject) => {
        this.setState({
            expoProject: actualProject
        });
    }

    render() {
        //Si el usuario NO esta logueado
        if (!this.state.user) {
            return (
                <Login setData={(u, p) => this.setData(u, p)} />
            )
        } else {
            //Si esta logueado
            if (this.state.expoProject == -1) {
                return (
                    <div className='main'>
                        <BottomBar onOpenWindow={(getOpenMenu, getOpenNotify) => { this.setState({ openMenu: getOpenMenu, openNotify: getOpenNotify }); }} onCreateProject={this.onCreateProject} />
                        <MenuHome move={this.state.openMenu} currentUser={this.state.user} currentProjects={this.state.projects} onLogOut={(cmd) => this.onLogOut(cmd)} />
                        <Home moveRight={this.state.openMenu} moveLeft={this.state.openNotify} currentUser={this.state.user} currentProjects={this.state.projects} onProject={(num) => {this.onViewProject(num); console.log("Estoy en el proyecto: " + num)}}/>

                        {this.state.addProject ? (
                            <CreateProject creatingProject={this.state.addProject} />
                        ) : null}
                    </div>
                )
            } else {
                return <Project  project={this.state.projects[this.state.expoProject]}/>;
            }
        }
    }
}