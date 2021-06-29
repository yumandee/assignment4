import React, {Component} from 'react';

class TransactionForm extends Component {

   constructor(...props) {
      super(...props);

      this.state = {
         transaction: {
            id: "",
            description: "",
            amount: 0,
            date: ""
         }
      }
   }   

   handleChange = (e) => {
      const updatedTransaction = {...this.state.transaction};
      updatedTransaction[e.target.name] = e.target.value;
      
      this.setState({transaction: updatedTransaction})
   }

   handleSubmit = (e) => {
      e.preventDefault();
      var today = new Date(); 
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0');
      var yyyy = today.getFullYear();

      today = yyyy + '-' + mm + '-' + dd;
      const updatedTransaction = {...this.state.transaction};
      updatedTransaction.date = today;
      this.setState({transaction: updatedTransaction})
      // this.props.addDebit(this.state.transaction);
   }

   render() {
      return(
         <form onSubmit = {this.handleSubmit}>
            <div>
               <label htmlFor = "description"> Description: </label>
               <input required type = "text" name = "description" onChange = {this.handleChange} />
            </div>
            <div>
               <label htmlFor = "amount"> Amount: </label>
               <input type = "number" name = "amount" onChange = {this.handleChange}  />
            </div>
            <button type = "submit"> Add Debit </button>
         </form>

      );
   }

}

export default TransactionForm;