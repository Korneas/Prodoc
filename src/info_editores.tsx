import * as React from 'react';

export class InfoEditores extends React.Component<any,any>{

    state = {
        
        info: this.props.info
    }

   
     render(){
         
        return <div id="infoEditores" className="row col-3 col-l-4 col-m-6 col-s-12">
     
        <h1 className="row col-12 col-l-12 col-m-12 col-s-12">Claboradores</h1>
            
        <p className="row col-12 col-l-12 col-m-12 col-s-12">Las siguientes personas tienen permisos de edicion del proyecto</p>
             
        <h2 className="row col-12 col-l-12 col-m-12 col-s-12">Cantidad de Editores: {this.state.info.documents.length}</h2>    
        <div className="row col-12 col-l-12 col-m-12 col-s-12">
            <ul id="nombres-docs"className="row col-12 col-l-12 col-m-12 col-s-12">
                {this.state.info.editors.map((editor,i)=>
                                             
                 <li key={i} className="row col-12 col-l-12 col-m-12 col-s-12">
                
                  
                  <img className="row col-3 col-l-3 col-m-3 col-s-3" src={editor.photo_url} />    
                    
                                                 
                   <div className="row col-9 col-l-9 col-m-9 col-s-9">
                       
                  <h4 className="row col-12 col-l-12 col-m-12 col-s-12">{editor.name}</h4>
                 <p className="row col-12 col-l-12 col-m-12 col-s-12"> {editor.email}</p>
                       
                   </div>                              
                 
                                                 
                  </li>)
                                             
                                             }
            </ul>
        </div>
            
        </div>
    }

}