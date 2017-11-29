import * as React from 'react';

export class MenuHome extends React.Component<any, any>{

    state = {
        user: null
    }

    componentWillMount() {
        this.setState({
            user: this.props.currentUser
        });
    }

    render() {
        return <div id="menu-home" style={{ right: this.props.move ? 0 : '100%' }}>
            <div id="menu-container">
                <div id="menu-profilePic" style={{ background: (this.state.user == null) ? 'url(https://komarketing.com/images/2014/08/linkedin-default.png) center center / cover' : 'url(' + this.state.user.photo_url + ') center center / cover' }}></div>
                <h2 id="menu-userName">{this.state.user.name}</h2>
                <p id="menu-userEmail">{this.state.user.email}</p>
                <div id="logOut" onClick={() => this.props.onLogOut('logout')}>
                    <p>Cerrar Sesión</p>
                </div>
            </div>
        </div>
    }
}