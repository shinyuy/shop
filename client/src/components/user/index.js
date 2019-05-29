import React from 'react'
import UserLayout from '../../HOC/UserLayout';
import { Link } from 'react-router-dom';
import '../../HOC/userlayout.css';

function UserDashboard({user}) {
  return (
    <UserLayout user={user}>
      <div className='user_nfo_panel'>
          <h1> User Information</h1>
          <div>
              <span>{user.firstname}</span>
              <span>{user.lastname}</span>
              <span>{user.email}</span>
              <span>{user.phoneNumber}</span>
          </div>
          <button className='btn'>
              <Link to='/user/profile'>Edit Account Info</Link> 
          </button>
      </div>

      <div className='user_nfo_panel'>
          <h1>History of Purchases</h1>
          <div className='user_product_block_wrapper'>
              History
          </div>
      </div>

    </UserLayout>
  );
}

export default UserDashboard
