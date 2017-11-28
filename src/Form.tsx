import * as React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    });
    this.props.onChange({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <form>

        <TextField
          name='email'
          hintText="Escribe tu email"
          floatingLabelText="Email"
          type="email"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <br />
        <TextField
          hintText="Crea una contraseña"
          floatingLabelText="Contraseña"
          type="password"
          value={this.state.username}
          onChange={e => this.change(e)}
        />
        <br />
        <br />
        <RaisedButton label="Entrar" onClick={e => this.onSubmit(e)} />
        {/* <button onClick={e => this.onSubmit(e)}>Submit</button> */}
      </form>
    );
  }
}

