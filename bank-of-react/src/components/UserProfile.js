import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component {

   render() {
      return (
         <div>
            <div id = "title"> <h1> User Profile </h1></div>

            <ul id = "navbar"> 
               <li><Link to = "/"> Home </Link></li>
               <li><Link class = "active"to = "/userProfile"> User Profile </Link></li>
               <li><Link to = "/debits"> Debits </Link></li>
               <li><Link to = "/credits"> Credits </Link></li>
            </ul>
            
            <div id = "userProfile"> 
               <div> <p> Username: </p> {this.props.userName} </div>
               <div> <p> Member Since: </p> {this.props.memberSince} </div>
            </div>
            

         </div>


      );
   }

}

export default UserProfile;