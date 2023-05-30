import React from "react";
import './nav.css'
import {  NavLink } from 'react-router-dom'

class Nav extends React.Component{

    render(){
        return(
            <div>
                <div class="topnav">
              <NavLink activeClassName="active" to='/'>Home</NavLink>
              <NavLink activeClassName="active" to='/todo'>Todo</NavLink>
              <NavLink activeClassName="active" to='/about'>About</NavLink>
              <NavLink activeClassName="active" to='/user'>User</NavLink>
              <NavLink activeClassName="active" to='/test'>User</NavLink>
  
</div>
            </div>
        )
    }
}

export default Nav