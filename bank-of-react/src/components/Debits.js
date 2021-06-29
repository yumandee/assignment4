import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TransactionForm from './TransactionForm';

class Debits extends Component {

   showDebits = () => {
      let debits = this.props.debits;
      let list = debits.map(item => {
         return (
            <tr key = {item.id}> 
                  <td> {item.description} </td>
                  <td> ${item.amount} </td>
                  <td> {item.date.substring(0, 10)} </td> 
            </tr>
         );
      })
      
      return list;
   }

   addDebit = (transaction) => {
      this.props.addDebit(transaction);
   }

   render() {
      return(
         <div>
            <h1> Debits </h1>
            <table id = "debitsDisplay">  
               <tbody> 
                  <tr id = "labels">
                     <td> Description </td>
                     <td> Amount </td>
                     <td> Date </td>
                  </tr>
                  {this.showDebits()} 
               </tbody>
            </table>

            <div id = "newDebit"> 
               <h3> Add Debit </h3> 
               <TransactionForm />
            </div>
            


            <Link to = "/"> Return to Home </Link>
         </div>
      );
   }
}

export default Debits;