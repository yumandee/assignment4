import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';
class Credits extends Component {
   constructor() {
      super();
      let today = new Date(); 
      today = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');

      this.state = {
         newTransaction: {
            id: '',
            amount: 0,
            description: '',
            date: today
         }
      }
   }

   showCredits = () => {
      let table = this.props.credits.map( (item, index) =>  {
         if(item.id === '') item.id = index;
         item.amount = parseFloat(item.amount).toFixed(2);
         return (
            <tr key = {item.id}>
               <td> {item.description} </td>
               <td> ${item.amount} </td>
               <td> {item.date.substring(0,10)} </td>
            </tr>
         );
      })

      return table;
   }

   resetState = () => {
      let transaction = {...this.state.newTransaction};
      transaction.id = '';
      transaction.description = '';
      transaction.amount = 0;
      this.setState({newTransaction: transaction});
   }

   newTransaction = (e) => {
      e.preventDefault();
      document.getElementById("newCreditForm").reset();
      this.props.addCredit(this.state.newTransaction);

      this.resetState();
   }

   handleChange = (e) => {
      let updatedTransaction = {...this.state.newTransaction};
      let inputField = e.target.name;
      let inputValue = e.target.value;
      if(inputField === "amount") inputValue = parseFloat(inputValue).toFixed(2);

      updatedTransaction[inputField] = inputValue;
      
      this.setState({newTransaction: updatedTransaction})
   }


   render() {
      return(
         <div id = "credits">  
            <div id = "title"> <h1> Credits </h1> </div>

            <ul id = "navbar"> 
               <li><Link to = "/"> Home </Link></li>
               <li><Link to = "/userProfile"> User Profile </Link></li>
               <li><Link to = "/debits"> Debits </Link></li>
               <li><Link to = "/credits"> Credits </Link></li>
            </ul>

            <div id = "displayTable">
               <table id = "creditsDisplay">
                  <tbody>
                     <tr id = "labels">
                        <th> Description </th>
                        <th> Amount </th>
                        <th> Date </th>
                     </tr>
                        {this.showCredits()}
                  </tbody>
               </table>
            </div>

            <div id = "newTransactionForm"> 
               <h3> New Credit </h3> 
               <form id = "newCreditForm" onSubmit = {this.newTransaction}>
                  <div>
                     <label htmlFor = "description"> Description </label>
                     <input required type = "text" name = "description" onChange = {this.handleChange} />
                  </div>
                  <div>
                     <label htmlFor = "amount"> Amount </label>
                     <input required type = "number" min = "0" name = "amount" placeholder = "$0" step = "any" onChange = {this.handleChange}  />
                  </div>
                  <div> 
                     <label htmlFor = "date"> Date </label>
                     <input type = "date" name = "date" value = {this.state.newTransaction.date} onChange = {this.handleChange}  />
                  </div>
                  <button type = "submit"> Add Credit </button>
               </form>
            </div>

            <div>
               <h3> Account Balance </h3>
               <AccountBalance accountBalance = {this.props.accountBalance} />
            </div>


         </div>
      );
   }
}

export default Credits;