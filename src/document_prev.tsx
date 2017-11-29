import * as React from 'react';

export class DocumentPrev extends React.Component<any,any>{

    state = {
        
        title: null,
        author: null,
        date: null,
        type: null,
        id: null,
        open: null
          
    }

    componentWillMount(){
        console.log(":v");
        this.setState({
            title: this.props.title,
            author: this.props.author,
            date: this.props.date,
            type: this.props.type,
            id: this.props.key,
            open: this.props.open
        })
    }

    opener(){
     
      this.props.openDocument(true, this.state.id);
      
    }

   
    render(){
       
        return <div className="row conteiner-document" onClick={e => this.opener()}>
            <div className="col-12 col-l-12 col-m-12 col-s-12">         
            <h2>{this.state.title}</h2>
            <h4>{this.state.author}</h4>
            </div>  
            <div className="col-12 col-l-12 col-m-12 col-s-12">
                <p className="col-6 col-l-6 col-m-6 col-s-6">{this.state.type}</p>
                <p className="col-6 col-l-6 col-m-6 col-s-6 date">{this.state.date}</p>
            </div>  
                                  
        </div>
    }
}
