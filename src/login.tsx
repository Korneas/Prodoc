import * as React from 'react';
import Dropzone from 'react-dropzone';

export class Login extends React.Component<any, any>{

    state = {
        user: null,
        imagen: null,
        pagina: 'login',
    }
    getMetodos() {
    }
    componentWillMount() {
        this.getMetodos();
    }
    hacerLogin(evento) {
        evento.preventDefault();
        var form: any = evento.target;
        var params = new URLSearchParams();
        params.append('email', form.user.value);
        params.append('psw', form.psw.value);

        fetch('http://localhost:5000/login', {
            method: 'post',
            body: params
        })
            .then(e => e.json())
            .then(res => {
                this.setState({
                    mensaje: res.mensaje
                });
                console.log(res);
                if (res.response == 'valid') {
                    localStorage.setItem('user', JSON.stringify(res.user));
                    this.props.setUsuario(res.user);
                }
            });
    }
    hacerRegistro = (evento) => {
        evento.preventDefault();
        var form: any = evento.target;
        var params = new FormData();
        params.set('email', form.email.value);
        params.set('psw', form.psw.value);
        params.set('name', form.newUser.value);
        params.set('file', this.state.imagen);
        console.log(this.state.imagen);

        fetch('http://localhost:5000/register', {
            method: 'POST',
            body: params
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    mensaje: res.mensaje
                });
                console.log(res);
                if (res.response == 'valid') {
                    localStorage.setItem('user', JSON.stringify(res.user));
                    this.props.setUsuario(res.user);
                }
            });
    };
    cambioPagina(nuevaPagina) {
        this.setState({
            pagina: nuevaPagina
        });
    }
    cargarImagen(accepted, rejected) {
        console.log(accepted)
        this.setState({
            imagen: accepted[0]
        })
    }
    render() {
        switch (this.state.pagina) {
            case 'login':
                return <div id="login" className='landing'>
                    <div id="bodyLogin">
                        <form className='login' onSubmit={e => this.hacerLogin(e)}>
                            <img className="logo" src="public/img/logo.png" />
                            <input id='usern' type="email" name="user" placeholder="CORREO ELECTRONICO" required />
                            <input id='psw' type="password" name="psw" placeholder="CONTRASEÑA" required />
                            <button id='entrada' type="submit" className="btnLogin btnLogin-primary btnLogin-block btnLogin-large">INGRESAR</button>
                            <p className="subTexto">¿No tienes una cuenta?</p>

                            <p><a className="registro" href='#' onClick={() => this.setState({ pagina: 'registro' })}>CREAR CUENTA</a></p>
                        </form>
                    </div>
                </div>
            case 'registro':
                return <div id="login">
                    <div id="bodyLogin" className='landing'>
                        <form className='login' onSubmit={e => this.hacerRegistro(e)}>
                            <img className="logo" src="public/img/logo.png" />
                            <input id='name' type="text" name="newUser" placeholder="NOMBRE" required />
                            <input id='usern' type="email" name="email" placeholder="CORREO ELECTRONICO" required />
                            <input id='psw' type="password" name="psw" placeholder="CONTRASEÑA" required />
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
                            <button id='entrada' type="submit" className="btnLogin btnLogin-primary btnLogin-block btnLogin-large">REGISTRARSE</button>
                            <p className="subTexto">¿Ya tienes una cuenta?</p>
                            <p><a className="registro" href='#' onClick={() => this.setState({ pagina: 'login' })}  >INICIAR SESIÓN</a></p>
                        </form>
                    </div>
                </div>
        }
    }
}