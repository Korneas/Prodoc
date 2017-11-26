import * as React from 'react';
import * as firebase from 'firebase';

export class Root extends React.Component<any,any>{
    

    state = {
        projects: [],
        user:null,
        nombre: 'Prueba'
    }

    getProjects() {
        
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

    }
    
    componentWillMount(){
        //Sincronizacion con autenticacion
        firebase.auth().onAuthStateChanged(user => {
            console.log('Ingreso al usuario');
            this.setState({ user });
          });
          
          //Sincronizacion con realtime database
      const rootRef = firebase.database().ref();
      const nombreRef = rootRef.child('nombre');
      
      nombreRef.on('value', snap => {
        this.setState({
          nombre: snap.val()
        });
      });

    this.getProjects();
    }

    handleAuth(){
        const proveedorGoogle = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(proveedorGoogle)
          .then(result => console.log(`${result.user.email} Ha iniciado sesión`),)
          .catch(error => console.log(`Error ${error.code}: ${error.message}`));
      }
    
      handleLogout(){
        firebase.auth().signOut()
        .then(result => console.log(`${result.user.email} Ha cerrado sesión`),)
        .catch(error => console.log(`Error ${error.code}: ${error.message}`));
      }

      renderIntro(){
        return(
          <div className='banner'>
            <div id='container'>
              <h1 className='titleHeader'>Notes</h1>
              <h4 className='subHeader'>Hola, {this.state.user.displayName}</h4>
              <img width='100' src={this.state.user.photoURL} alt={this.state.user.displayName}/>
              <br/>
              <button className='logoutButton' onClick={this.handleLogout}>Salir</button>
            </div>
          </div>
        )
      }

      renderLogin(){
        //Si el usuario NO esta logueado
        if(!this.state.user){
          return(
            <div className='landing'>
            <div id='container'>
              <h4 className='subHeader'>Note, la aplicación para agilizar tu vida.</h4>
              <button className='loginButton' onClick={this.handleAuth}>Empezar</button>
            </div>
          </div>
          );
        }else{
          //Si esta logueado
          return(
            <div className='main'>
                {this.renderIntro()}          
            </div>
          )
        }
      }

    render(){        
        return <div className="App">
        <header className="App-header">
            
          <h1 className="App-title">Bienvenido a Prodoc</h1>
        </header>

        <div className='login container'>
          {this.renderLogin()}
        </div>
        <h1>{this.state.nombre}</h1>
      </div>
    }
}