import * as React from 'react';
import * as firebase from 'firebase';
import Dropzone from 'react-dropzone';

export class Login extends React.Component<any, any>{

    state = {
        user: null,
        imagen: null,
        pagina: 'login'
    }

    getMetodos() {
        this.handleAuth = this.handleAuth.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    componentWillMount() {
        this.getMetodos();

        //Sincronizacion con autenticacion
        firebase.auth().onAuthStateChanged(user => {
            console.log('Ingreso al usuario');

            var params = new URLSearchParams();
            params.append('email', user.displayName);
            params.append('psw', user.email);

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

                        this.props.setData(res.user, res.projects);
                        this.props.cambioPagina('home');
                    }
                });
        });
    }
    handleAuth() {
        const proveedorGoogle = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(proveedorGoogle)
            .then(result => console.log(`${result.user.email} Ha iniciado sesión`), )
            .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    }
    handleLogout() {
        firebase.auth().signOut()
            .then(result => console.log(`${result.user.email} Ha cerrado sesión`), )
            .catch(error => console.log(`Error ${error.code}: ${error.message}`));
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
                    this.props.setData(res.user, res.projects);
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
                            <h4 className='subHeader'>Just design better.</h4>
                            <input id='usern' type="email" name="user" placeholder="email" required />
                            <input id='psw' type="password" name="psw" placeholder="contraseña" required />
                            <button id='entrada' type="submit" className="btnLogin btnLogin-primary btnLogin-block btnLogin-large">Entrar</button>
                            <p className="subTexto">¿Eres nuevo? <a className="registro" href='#' onClick={() => this.setState({ pagina: 'registro' })}  >Crear una cuenta</a></p>
                            <button id='entrada'
                                type="submit"
                                className="btnLogin btnLogin-primary btnLogin-block btnLogin-large google"
                                onClick={this.handleAuth}>Empezar con Google</button>
                        </form>
                    </div>
                </div>
            case 'registro':
                return <div id="register" className='landing'>
                    <div id="bodyRegister">
                        <form className='login' onSubmit={e => this.hacerRegistro(e)}>
                            <h4 className='subHeader'>Bienvenido a Prodoc</h4>
                            <p className='subText'>Documenta tus proyectos fácilmente para que hagas más lo que importa: Diseñar.</p>

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
                            <input id='name' type="text" name="newUser" placeholder="Nombre" required />
                            <input id='usern' type="email" name="email" placeholder="Email" required />
                            <input id='psw' type="password" name="psw" placeholder="Contraseña" required />
                            <button id='entrada' type="submit" className="btnRegister btnLogin-primary btnLogin-block btnLogin-large">Empezar</button>
                            <p className="subText">¿Ya eres usuario? <a className="registro" href='#' onClick={() => this.setState({ pagina: 'login' })}  >Accede a tu cuenta</a></p>
                        </form>


                    </div>
                </div>
        }
    }
}