import React, {Component} from 'react';
// import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import '../css/Bank.css'

class Home extends Component {
   render() {
      return(
         <div id = "home">
            <img id = "logo" src = "https://www.reipropertymanagement.net/wp-content/uploads/2019/11/bank-getty.jpg" alt = "bank" height = "450" width = "600" />
            <h1> Bank of React </h1>

            <ul id = "navbar"> 
               <li><Link to = "/"> Home </Link></li>
               <li><Link to = "/userProfile"> User Profile </Link></li>
               <li><Link to = "/debits"> Debits </Link></li>
               <li><Link to = "/credits"> Credits </Link></li>
            </ul>
            
            <div id = "welcome"> Welcome, {this.props.user.userName}. </div>
            <div id = "login"> Not you? <Link to = "/login"> Login </Link> </div>
         </div>
      );
   }

}

export default Home;