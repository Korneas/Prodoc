import * as React from 'react';
import { DocumentPrev } from './document_prev';
import { Document } from './document';
import { InfoProject } from './info_project';
import { InfoEditores } from './info_editores';

export class Project extends React.Component<any,any>{

    state = {
        project: this.props.project,
        lista: true,
        index: null,
        open: false,
        info:false,
        editors:false,
    }

//======================================================metodo para abrir un documento
    openDocument(open,index){
        const ref = this.state.project.documents;
        if(open){
            this.setState({
                lista:false,
                index:index,
                open:open
            });
        }
    }

    closeDocument(open){
        if(!open){
            this.setState({
                lista:true,
                open:open
            });
           
        }
    }

    onGroup(editors){
        
         if(editors==false){
            this.setState({
                lista:false,
                editors:true,
                info:false
            });
           }else{
                this.setState({
                lista:true,
                editors:false,
                info:false
            });
           }
        
    }

    onUpload(e){
        
           }

    onInfo(info){
       
        if(info==false){
            this.setState({
                lista:false,
                editors:false,
                info:true
            });
           }else{
                this.setState({
                lista:true,
                editors:false,
                info:false
            });
           }
    }
  
//======================================================
//====================================================== Metodo para ver el documento
    getDocumentView(){
        const ref = this.state.project.documents;
        
         if(this.state.open==true){
             console.log("entra a getDocumentView");
             return <div className="col-4 col-l-4 col-m-6 col-s-12" id="opendDocument">
               <Document document={ref[this.state.index]} closeDocument={p => this.closeDocument(p)} />
              
             </div>
         }
    }
//======================================================
//====================================================== Metodo para ver las previews
    getDocumentsPreview(){
        const ref = this.state.project.documents;
        if(this.state.lista==true){
        if(this.state.project.documents.length > 0){
             return <div className="col-3 col-l-4 col-m-6 col-s-12" id="documentos">
                    <p id="no-more-project">Tienes {ref.length} documentos</p>
                 {ref.map((r,i) =>
                    <DocumentPrev key={i} open={false} openDocument={p => this.openDocument(p,i)} title={r.title} author={r.author} date={r.date} type={r.type}/> )}
                    <p id="no-more-project">No tienes más documentos</p>
                  </div>
        }
       }
    }
//======================================================
//====================================================== Crear filtro
    getFilter(){
        return <div className="col-12 col-l-12 col-m-12 col-s-12">
                <select className="col-3 col-l-4 col-m-6 col-s-10" id="filter-type" name="type">
                  <option value="">Filtrar por formato</option>    
                  <option value="jpg">Imagen</option>
                  <option value="png">Video</option>
                  <option value="pdf">PDF</option>
                  <option value="mov">3D</option>
                </select>
                </div>
    }
//======================================================
//====================================================== Crear Infro del proyecto

    getInfo(){
        const ref = this.state.project;
        
        if(this.state.info==true){
            return <div>
                    <InfoProject info={ref}/>
                    </div>
        }
        
    }
   getEditores(){
        const ref = this.state.project;
        
        if(this.state.editors==true){
            return <div>
                    <InfoEditores info={ref}/>
                    </div>
        }
        
    }


    getProjectBar(){
        if(this.state.open==false){
            return  <div className="row col-12 col-l-12 col-m-12 col-s-12" id="project-bar">
                
                <button className="col-4 col-l-4 col-m-4 col-s-4" onClick={ e => this.onGroup(this.state.editors)}>
                <svg  className="group" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" >
                <path d="m53.368,22.262c2.395-1.436 4.022-4.043 4.022-7.048 0-4.538-3.662-8.229-8.164-8.229-4.5,0-8.16,3.691-8.16,8.229 0,3.044 1.67,5.68 4.118,7.101-0.788,0.266-1.548,0.596-2.271,1.019-1.088-5.091-5.583-8.918-10.952-8.918-5.306,0-9.752,3.743-10.904,8.745-0.672-0.365-1.373-0.661-2.1-0.895 2.4-1.434 4.031-4.043 4.031-7.052 0-4.538-3.662-8.229-8.162-8.229s-8.162,3.691-8.162,8.229c0,3.055 1.684,5.695 4.143,7.113-7.125,2.418-10.153,10.772-10.764,15.54-0.074,0.576 0.104,1.155 0.482,1.592 0.379,0.436 0.928,0.686 1.504,0.686h17.757c-7.263,5.334-8.899,14.357-8.919,14.485-0.098,0.587 0.064,1.185 0.445,1.639 0.38,0.454 0.939,0.716 1.53,0.716h38.236c0.014-0.002 0.025-0.002 0.039,0 1.107,0 2.003-0.902 2.003-2.02 0-0.266-0.051-0.519-0.145-0.752-0.381-1.941-2.234-9.41-8.447-14.068h17.494c0.567,0 1.111-0.242 1.49-0.67 0.38-0.426 0.562-0.994 0.502-1.564-0.514-4.824-3.414-13.314-10.646-15.649zm-4.141-11.239c2.291,0 4.157,1.879 4.157,4.19 0,2.308-1.866,4.185-4.157,4.185s-4.154-1.877-4.154-4.185c-0.001-2.311 1.863-4.19 4.154-4.19zm-17.266,7.431c3.97,0 7.199,3.255 7.199,7.257s-3.229,7.258-7.199,7.258c-3.967,0-7.197-3.256-7.197-7.258s3.23-7.257 7.197-7.257zm-17.135-7.431c2.291,0 4.156,1.879 4.156,4.19 0,2.308-1.865,4.185-4.156,4.185-2.293,0-4.154-1.877-4.154-4.185 0-2.311 1.861-4.19 4.154-4.19zm.156,14.649c2.244,0 4.121,0.684 5.734,2.094 0.076,0.067 0.173,0.094 0.257,0.146 0.728,3.695 3.247,6.748 6.604,8.193h-23.077c0.98-3.658 3.71-10.433 10.482-10.433zm33.574,27.273h-33.13c1.375-4.224 5.521-12.605 16.768-12.605 11.191,0 15.105,8.409 16.362,12.605zm-13.267-16.447c0.014-0.004 0.025-0.01 0.037-0.014-0.008,0.006-0.016,0.012-0.023,0.016-0.004,7.10543e-15-0.008,7.10543e-15-0.014-0.002zm1.141-.393c-0.062,0-0.113,0.03-0.176,0.036 3.357-1.408 5.889-4.413 6.663-8.069 0.274-0.074 0.536-0.191 0.767-0.385 1.634-1.357 3.498-2.016 5.701-2.016 6.834,0 9.367,6.788 10.236,10.434h-23.191z"/>
                </svg>
                </button>
                
                <button className="col-4 col-l-4 col-m-4 col-s-4" onClick={this.onUpload}>
                <svg className="upload" version="1.1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64">
                <path d="m17.181,58.816c0.101,0.015 0.188,0.059 0.293,0.059h33.286c0.046,0 0.084-0.023 0.129-0.026 0.044,0.003 0.081,0.026 0.128,0.026 7.165,0 12.996-6.027 12.996-13.435 0-7.309-5.944-13.255-13.253-13.255-0.021,0-0.036,0.011-0.057,0.011-1.643-4.602-6.034-7.91-11.193-7.91-1.137,0-2.056,0.919-2.056,2.054 0,1.134 0.919,2.054 2.056,2.054 4.294,0 7.787,3.494 7.787,7.789 0,1.135 0.919,2.055 2.053,2.055 1.077,0 1.93-0.833 2.021-1.882 4.753,0.321 8.532,4.251 8.532,9.084 0,5.143-3.985,9.326-8.887,9.326-0.047,0-0.084,0.023-0.128,0.026-0.045-0.003-0.083-0.026-0.129-0.026h-32.41c-7.853,0-14.24-6.387-14.24-14.239s6.388-14.241 14.24-14.241c1.354,0 2.691,0.189 3.981,0.563 1.09,0.314 2.229-0.312 2.544-1.4 0.316-1.089-0.309-2.229-1.401-2.545-1.658-0.482-3.384-0.726-5.124-0.726-10.119-3.55271e-15-18.349,8.231-18.349,18.349 0,9.723 7.607,17.682 17.181,18.289z"/>
                <path d="M32.006,45.879c1.136,0,2.054-0.919,2.054-2.054V11.888l5.227,5.227c0.401,0.401,0.928,0.602,1.453,0.602    c0.524,0,1.051-0.201,1.452-0.602c0.802-0.803,0.802-2.103,0-2.905L33.33,5.348c-0.803-0.802-2.104-0.802-2.905,0l-8.86,8.861    c-0.803,0.802-0.803,2.103,0,2.905c0.4,0.401,0.927,0.602,1.452,0.602s1.051-0.201,1.452-0.602l5.483-5.484v32.194    C29.952,44.959,30.87,45.879,32.006,45.879z"/>
                </svg></button>
                
                <button className="col-4 col-l-4 col-m-4 col-s-4" onClick={ e => this.onInfo(this.state.info)}>
                <svg  className="info" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" >
                <circle cx="33.301" cy="12.434" r="2.25"/>
                <path d="M32,0C14.355,0,0,14.355,0,32s14.355,32,32,32s32-14.355,32-32S49.645,0,32,0z M32,60    C16.561,60,4,47.439,4,32S16.561,4,32,4s28,12.561,28,28S47.439,60,32,60z"/>
                <path d="m36.691,47.554c-4.176,4.728-7.225,3.191-7.312,3.146-0.094-0.056-0.193-0.104-0.295-0.144-0.27-0.105-0.67-0.337-1.016-1.126-2.43-5.55 3.109-22.257 5.447-28.227 0.258-0.657 0.15-1.401-0.283-1.959-0.436-0.557-1.137-0.85-1.83-0.755l-4.07,.519c-1.096,0.14-1.871,1.142-1.732,2.237 0.141,1.095 1.162,1.869 2.236,1.731l.793-.102c-2.381,6.691-7.082,21.63-4.225,28.158 0.67,1.529 1.746,2.636 3.117,3.205 0.447,0.225 1.646,0.732 3.328,0.732 2.281,0 5.449-0.934 8.838-4.77 0.732-0.828 0.654-2.092-0.174-2.823-0.825-0.728-2.089-0.65-2.822,0.178z"/>
                </svg>
                </button>
                
            </div>
        }
    }


    render(){
       
        return <div id="project">
            {/*{this.props.user.name}*/}
            
            <div className="row col-12 col-l-12 col-m-12 col-s-12" id="project-header">
                
                <div className="row col-12 col-l-12 col-m-12 col-s-12">
                <button className="col-2 col-l-2 col-m-2 col-s-2">
                <svg className="back" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" >
                <path d="m38.719,14.973c-0.781-0.781-2.046-0.781-2.828,0l-15.879,15.88c-0.207,0.204-0.375,0.481-0.477,0.755-0.266,0.73-0.086,1.551 0.465,2.102l15.879,15.879c0.391,0.392 0.902,0.586 1.414,0.586s1.023-0.194 1.415-0.586c0.78-0.781 0.78-2.046 0-2.827l-14.473-14.477 14.483-14.484c0.782-0.781 0.782-2.047 0.001-2.828z"/>
                <path d="m32,.021c-17.645,0-32,14.354-32,32 0,17.645 14.355,32 32,32s32-14.355 32-32c0-17.645-14.355-32-32-32zm0,60c-15.438,0-28-12.561-28-28s12.562-28 28-28c15.439,0 28,12.561 28,28s-12.561,28-28,28z"/>
                </svg>
                </button>
                <h1 className="col-10 col-l-10 col-m-10 col-s-10" >{this.state.project.title}</h1>
                   
                </div>
                 {this.getFilter()}
                
            </div>
               
            {this.getDocumentsPreview()}
            {this.getDocumentView()}
            {this.getProjectBar()}
            {this.getInfo()}
            {this.getEditores()}
           
            
        </div>
    }
}
