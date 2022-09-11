import React from 'react';
import profile_pic from '../images/profile_pic.png';

function User(){
    return(
        <div className="container mt-3">
        
        <div className="card bg-light" style={{width:'250px'}}>
        <div className="card-body">
          <img className="card-img-left" src={profile_pic} alt="Card image" style={{width:'50%'}}/>
          
            <h4 className="card-title">User Profile</h4>
            <p className="card-text">
             <p>Indu Kushwaha</p>
              <p>goforindu@gmail.com</p>
            </p>
            <a href="#" class="btn btn-primary">See Details</a>
           
          </div>
        </div>
        <br/>
        </div>
    )
}

export default User;