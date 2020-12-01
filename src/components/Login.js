import React from 'react';
import { login } from '../repository';

export default class Login extends React.Component{

  constructor() {
    super();
    this.state = { name: '', password: '' };
    this.handleInputChange =this.handleInputChange.bind(this);
    this.submitLogin =this.submitLogin.bind(this);
    
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  submitLogin(event){
    event.preventDefault();
    login(this.state)
      .then(token => window.location = '/')
      .catch(err => alert(err));
  }

  render() {
     return (
      <div className="container">
      <hr/>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="panel panel-primary">
          
            <div className="panel-body">
              <form onSubmit={this.submitLogin}>
                <div className="form-group">
                  <label>Email address</label>
                  <input type="text" style={{
        width: '220px',
        height: '40px'
      }} className="form-control" data-e2e="username" name="name" onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" style={{
        width: '220px',
        height: '40px'
      }} className="form-control" data-e2e="password" name="password" onChange={this.handleInputChange}/>
                </div>
                <button type="submit" style={{
        backgroundColor: 'gray',
        width: '110px',
        height: '40px'
      }} data-e2e="login" className="btn btn-default">Log In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
