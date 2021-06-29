import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debits from './components/Debits';
import SearchAPI from './components/SearchAPI';
import axios from 'axios';
// import Credits from './components/Credits';
class App extends Component {
  
  constructor() {
    super();

    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: '',
        memberSince: ''
      },
      debits: [],
      // credits: [],
    }


  }

  
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  addDebit = (transaction) => {
    let updatedDebits = [...this.state.debits].push(transaction);
    this.setState({debits: updatedDebits})
  }

  // addCredit = (amount) => {

  // }

  componentDidMount = async() => {
    let debitsAPI = "https://moj-api.herokuapp.com/debits"
    let creditsAPI = "https://moj-api.herokuapp.com/credits"

    try {
      let response = await axios.get(debitsAPI);
      this.setState({debits: response.data});
      response = await axios.get(creditsAPI);
      this.setState({credits: response.data});
    } catch (error) {
      if(error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
      }
    }
  }

  render() {

    const HomeComponent = () => (<Home accountBalance = {this.state.accountBalance} />);
    const UserProfileComponent = () => (
      <UserProfile userName = {this.state.currentUser.userName} memberSince = {this.state.currentUser.memberSince} />
    );
    const LogInComponent = () => (<LogIn user = {this.state.currentUser} mockLogIn = {this.mockLogIn} />)
    const DebitComponent = () => (<Debits debits = {this.state.debits} />)
    const searchAPIComponent = () => (<SearchAPI />)
    return (
      <Router>
        <div>
          <Route exact path = "/" render = {HomeComponent} />
          <Route exact path = "/userProfile" render = {UserProfileComponent} />
          <Route exact path = "/login" render = {LogInComponent} />
          <Route exact path = "/debits" render = {DebitComponent} />
          {/* <Route exact path = "/credits" render = {Credits} /> */}
          <Route exact path = '/test' render = {searchAPIComponent} />
        </div>
      </Router>
    );
  }

}



export default App;