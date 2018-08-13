import React from 'react';
import Tab from './tab';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className='tabs-container'>
    <Tab>
        <NavLink activeClassName='active' to="/contacts">
          <p className='tabs'>Contacts</p>
        </NavLink>
    </Tab>
    <Tab>
        <NavLink activeClassName='active' to="/sentMessages">
          <p className='tabs'>Sent Messages</p>
        </NavLink>
    </Tab>
  </div>
)

export default Navbar
