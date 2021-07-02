import React, {Component} from 'react';

class AccountBalance extends Component {
   render() {
      return (
         <div id = "accBalance"> Balance: ${this.props.accountBalance} </div>
      );
   }
}

export default AccountBalance;