import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="left-side">
          <div className="nav-link-wrapper">            
            <NavLink exact to="/" activeClassName="nav-link-active">
             Home
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/stats" activeClassName="nav-link-active">
              Stats
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/hall_of_fame" activeClassName="nav-link-active">
              HOF
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/blog" activeClassName="nav-link-active">
              Blog
            </NavLink>
          {false ? <button>Add Blog</button> : null}
        </div>  
      </div>   
      </div> 
    );
  }
}