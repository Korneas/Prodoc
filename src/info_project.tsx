import * as React from 'react';

export class InfoProject extends React.Component<any,any>{

    state = {
        
        info: this.props.info
    }

   
     render(){
       
         
         
        return <div id="infoProject" className="row col-3 col-l-4 col-m-6 col-s-12">
            
         <h1 className="row col-12 col-l-12 col-m-12 col-s-12">Info del proyecto</h1>
            
         <h2 className="row col-12 col-l-12 col-m-12 col-s-12">Autor:  {this.state.info.author}</h2> 
            
         <h4 className="row col-12 col-l-12 col-m-12 col-s-12">Fecha de creacion: {this.state.info.date}</h4>
        
        <div className="row col-12 col-l-12 col-m-12 col-s-12">
            <ul className="row col-12 col-l-12 col-m-12 col-s-12">
                {this.state.info.tags.map((tag,i)=>
                 <li key={i}>#{tag} </li>)}
            </ul>
        </div>
            
          
        
             
         <img className="row col-12 col-l-12 col-m-12 col-s-12" src={this.state.info.thumbnail} />
         <div className="row col-12 col-l-12 col-m-12 col-s-12">
             <p>{this.state.info.description}</p>     
         </div>
            
         <h2 className="row col-12 col-l-12 col-m-12 col-s-12">Cantidad de archivos: {this.state.info.documents.length}</h2>    
        <div className="row col-12 col-l-12 col-m-12 col-s-12">
            <ul id="nombres-docs"className="row col-12 col-l-12 col-m-12 col-s-12">
                {this.state.info.documents.map((doc,i)=>
                 <li key={i}><p>{doc.title} / {doc.type}</p></li>)}
            </ul>
        </div>
        
        
             
        </div>
    }

}
