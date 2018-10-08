import React, {Component} from 'react'

function UserGreeting(props){
  return <h1>Welcom back!</h1>
}

function GuestGreeting(){
  return <h1>Please sign up.</h1>
}


function LoginButton(props){
  return (
    <button onClick={props.onClick}>Login</button>
  )
}

function LogoutButton(props){
  return (
    <button onClick={props.onClick}>Logout</button>
  )
}

function Greeting(props){

  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting/>;
  }
  return <GuestGreeting/>;
}


class LoginCtrol extends Component{
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLogin:false}
  }

  handleLoginClick(){
    this.setState({isLogin:true});
  }

  handleLogoutClick(){
    this.setState({isLogin:false});
  }

  render(){
    const isLoggedIn = this.state.isLogin;
    let button = null;
    if(isLoggedIn){
      button = <LoginButton onClick={this.handleLogoutClick} />
    }else{
      button = <LogoutButton onClick={this.handleLoginClick}/>
    }
    return(
      <div>
        <span>{isLoggedIn}</span>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    )
  }
}
export default LoginCtrol;