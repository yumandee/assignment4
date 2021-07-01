import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {

   render() {
      return(
         <div>
            <img src = "https://www.reipropertymanagement.net/wp-content/uploads/2019/11/bank-getty.jpg" alt = "bank" height = "450" width = "600" />
            <h1> Bank of React </h1>

            <Link to = "/userProfile"> User Profile </Link>
            <AccountBalance accountBalance = {this.props.accountBalance} />

            
            <div> <Link to = "/debits"> Debits </Link></div>

            <div> <Link to = "/credits"> Credits </Link> </div>

         </div>
      );
   }

}

export default Home;