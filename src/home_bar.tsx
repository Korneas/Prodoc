import * as React from 'react';

export class HomeBar extends React.Component<any, any>{

    constructor(props) {
        super(props);
    }

    state = {
        filterOpen: false
    }

    handleOpener(filterOpen) {
        this.props.onOpenFilter(filterOpen);
    }

    render() {

        return <div id="homeBar">
            <div className="profilePic" style={{ background: (this.props.profilePicture == '') ? 'url(https://komarketing.com/images/2014/08/linkedin-default.png) center center / cover' : 'url(' + this.props.profilePicture + ') center center / cover'}}></div>
            <div className="homeBarInfo">
                <h2>Proyectos</h2>
                <p id="numberOfProjects">{this.props.numberOfProjects} en total</p>
            </div>
            <div className="filterTag" onClick={() => {this.setState({ filterOpen: !this.state.filterOpen }); this.handleOpener(!this.state.filterOpen)}}>
                <svg width="64" version="1.1" id="tagHome" style={{ fill: this.state.filterOpen ? '#fabb05' : '#a7a7a7'}} xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 0 64 64">
                    <g>
                        <path d="m63.406,39.309l-38.714-38.717c-0.42-0.418-0.994-0.629-1.597-0.578l-19.283,1.718c-0.956,0.086-1.715,0.838-1.813,1.791l-1.995,19.563c-0.061,0.599 0.15,1.193 0.576,1.617l38.714,38.717c0.391,0.391 0.902,0.586 1.415,0.586 0.512,0 1.023-0.195 1.414-0.586l21.283-21.283c0.377-0.375 0.588-0.883 0.588-1.414s-0.211-1.039-0.588-1.414zm-22.697,19.867l-36.628-36.629 1.732-16.975 16.708-1.49 36.642,36.641-18.454,18.453z" />
                        <path d="m13.974,13.711c-1.318,1.318-2.042,3.07-2.042,4.932-0.002,1.863 0.724,3.615 2.04,4.932 1.32,1.318 3.072,2.045 4.937,2.045 1.863,0 3.613-0.725 4.931-2.043 2.719-2.721 2.719-7.145-0.002-9.865-2.635-2.636-7.23-2.636-9.864-0.001zm7.036,7.037c-1.123,1.123-3.083,1.123-4.206-0.002-0.561-0.562-0.869-1.309-0.869-2.104 0-0.793 0.309-1.539 0.869-2.102s1.307-0.871 2.103-0.871c0.795,0 1.541,0.309 2.102,0.871 1.157,1.161 1.157,3.048 0.001,4.208z" />
                    </g>
                </svg>
            </div>
        </div>
    }
}