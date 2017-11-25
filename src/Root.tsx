import * as React from 'react';

export class Root extends React.Component<any,any>{
    
    state = {
        projects: []
    }

    getProjects() {

    }
    
    componentWillMount(){
        //Metodos a ejecutar antes

    this.getProjects();
    }

    render(){        
        return <div>
            <h1>Holi mundo how are you</h1>
        </div>
    }
}