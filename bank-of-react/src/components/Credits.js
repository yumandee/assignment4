import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
         <div> 
            <h1> Credits </h1>
            <table id = "creditsDisplay">
               <tbody>
                  <tr id = "labels">
                     <td> Description </td>
                     <td> Amount </td>
                     <td> Date </td>
                  </tr>
                     {this.showCredits()}
               </tbody>
            </table>

            <div id = "newCredit"> 
               <h3> Add Credit </h3> 
               <form id = "newCreditForm" onSubmit = {this.newTransaction}>
                  <div>
                     <label htmlFor = "description"> Description: </label>
                     <input required type = "text" name = "description" onChange = {this.handleChange} />
                  </div>
                  <div>
                     <label htmlFor = "amount"> Amount: </label>
                     <input required type = "number" min = "0" name = "amount" step = "any" onChange = {this.handleChange}  />
                  </div>
                  <div> 
                     <label htmlFor = "date"> Date: </label>
                     <input type = "date" name = "date" value = {this.state.newTransaction.date} onChange = {this.handleChange}  />
                  </div>
                  <button type = "submit"> Add Credit </button>
               </form>
            </div>
            <Link to =  "/"> Return to Home </Link>
         </div>
      );
   }
}

export default Credits;