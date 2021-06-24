import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'jose_shmo',
        memberSince: '07/23/96',
      }
    }
  }

  mockLogin = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {

    const HomeComponent = () => (<Home accountBalance = {this.state.accountBalance} />);
    const UserProfileComponent = () => (
      <UserProfile userName = {this.state.currentUser.userName} memberSince = {this.state.currentUser.memberSince} />
    );
    const LogInComponent = () => (<LogIn user = {this.state.currentUser} mockLogin = {this.mockLogIn} />)
    return (
      <Router>
        <div>
          <Route exact path = "/" render = {HomeComponent} />
          <Route exact path = "/userProfile" render = {UserProfileComponent} />
          <Route exact path = "/login" render = {LogInComponent} />
        </div>
      </Router>
    );
  }

}



export default App;