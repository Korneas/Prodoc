import * as React from 'react';
import { HomeBar } from './home_bar';
import { ProjectPreview } from './project_preview';

export class Home extends React.Component<any, any>{

    state = {
        user: null,
        projects: [],
        filterProjects: [],
        openFilter: false
    }

    getProjects() {
        this.setState({ 
            user: this.props.currentUser,
            projects: this.props.currentProjects, 
            filterProjects: this.props.currentProjects            
        });
    }

    componentWillMount() {
        this.getProjects();
    }

    render() {
        return <div id="home" style={{ left: this.props.moveRight ? '100%' : 0, right: this.props.moveLeft ? '100%' : 0 }}>
            <HomeBar numberOfProjects={this.state.projects.length} profilePicture={this.state.user.photo_url} onOpenFilter={(getOpenFilter) => { this.setState({ openFilter: getOpenFilter }); }} />
            
            <div className="filterDropdown" style={{ height: this.state.openFilter ? '8vh' : 0, opacity: this.state.openFilter ? 1 : 0 }}>
                <select name="filterByTag" id="filterByTag" onChange={(e) => { this.setState({ selectedTag: e.target.value, filterProjects: this.state.projects.filter( x => { if (e.target.value != 'none') { return x.tags.find((y) => {return y.indexOf(e.target.value) > -1}) != null } else { return true } }) }); console.log(this.state.filterProjects); }}>
                    <option value="none" disabled selected>Elige un tag</option>
                    <option value="none">Todos</option>
                    <option value="ui">UI</option>
                    <option value="ux">UX</option>
                    <option value="art">Art</option>
                    <option value="design">Design</option>
                    <option value="iot">IoT</option>
                </select>
            </div>

            
            
            {this.state.filterProjects.map((x, index) => {
                return <ProjectPreview key={index} title={x.title} thumbnail={x.thumbnail} tags={x.tags} onClicking={() => { this.props.onProject(index); console.log("OMG") }}/>
            })}
        </div>
    }
}