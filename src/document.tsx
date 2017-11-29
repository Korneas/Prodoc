import * as React from 'react';

export class Document extends React.Component<any,any>{

    state = {
        
        document: this.props.document
    }

    
    getDocument(){
        const typeRef = this.state.document.type.toLowerCase();
        if(typeRef=="jpg" || typeRef=="pgn" || typeRef=="jpeg" ){
            return <div id="media-container">
            <img className="col-3 col-l-4 col-m-6 col-s-12" src={this.state.document.url}/>
            </div>
        }else if(typeRef=="mov" || typeRef=="mp4" || typeRef=="wav" || typeRef=="ogg") {
            return <div id="media-container">
                <video className="col-3 col-l-4 col-m-6 col-s-12"  src={this.state.document.url}  controls />
                 
            </div> 
        }else if(typeRef=="pdf"){
            return <div id="media-container">
                               
                 <iframe src={this.state.document.url} />
               
            </div> 
        }
    }
   
    close(){
        this.props.closeDocument(false);
    }

    render(){
       
        return <div id="document" className="row col-12 col-l-12 col-m-12 col-s-12">
            <div className="row">
                <div className="col-2 col-l-2 col-m-2 col-s-2">
                    <button onClick={e => this.close()}>
                    <svg className="back" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" >

                      <path d="m38.719,14.973c-0.781-0.781-2.046-0.781-2.828,0l-15.879,15.88c-0.207,0.204-0.375,0.481-0.477,0.755-0.266,0.73-0.086,1.551 0.465,2.102l15.879,15.879c0.391,0.392 0.902,0.586 1.414,0.586s1.023-0.194 1.415-0.586c0.78-0.781 0.78-2.046 0-2.827l-14.473-14.477 14.483-14.484c0.782-0.781 0.782-2.047 0.001-2.828z"/>
                      <path d="m32,.021c-17.645,0-32,14.354-32,32 0,17.645 14.355,32 32,32s32-14.355 32-32c0-17.645-14.355-32-32-32zm0,60c-15.438,0-28-12.561-28-28s12.562-28 28-28c15.439,0 28,12.561 28,28s-12.561,28-28,28z"/>

                    </svg>
                    </button>
                </div>
                <div className="col-10 col-l-10 col-m-10 col-s-10">
                    <h1>{this.state.document.title}</h1>
                    <h3>{this.state.document.author}</h3>
                    <h4>{this.state.document.date}</h4>
                </div>
            </div>
            
            {this.getDocument()}
            
            <p>{this.state.document.descripcion}</p>
         
                                  
        </div>
    }

}
