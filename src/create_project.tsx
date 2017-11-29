import * as React from 'react';
import Dropzone from 'react-dropzone';

export class CreateProject extends React.Component<any, any>{

    state = {
        imagen: null
    }

    initProject = (event) => {

    }

    cargarImagen(accepted, rejected) {
        console.log(accepted)
        this.setState({
            imagen: accepted[0]
        })
    }

    render() {
        return <div id="createProject" style={{ opacity: this.props.creatingProject ? 1 : 0 }}>
            <form className='fromProject' onSubmit={e => this.initProject(e)}>
                <h4 className='subHeaderProject'>Crear proyecto</h4>
                <p className='subTextProject'>Inicia con un thumbnail del proyecto y una descripción básica de este</p>

                {!this.state.imagen && <Dropzone
                    className='cargarFotoUsuario' activeClassName='overCargarFoto'
                    onDrop={(accepted, rejected) => this.cargarImagen(accepted, rejected)}
                />
                }
                {
                    this.state.imagen && <div>
                        <img className='preImagen' style={{ height: 150, textAlign: 'center', display: 'block' }} src={this.state.imagen.preview} />
                    </div>
                }
                <input id='titleProject' type="text" name="newTitle" placeholder="Titulo" required />
                <input id='descriptionProject' type="text" name="newDescription" placeholder="Descripcion" required />
                <button id='btnCreateProject' type="submit" className="btnRegister btnLogin-primary btnLogin-block btnLogin-large">Crear</button>
            </form>
        </div>
    }
}