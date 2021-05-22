import React,{Component} from 'react';
import { Navbar ,Nav ,NavbarToggler ,NavItem ,Collapse , NavbarBrand} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import LogoutBtn from './Auth/LogoutBtn';
import {Divider} from "@material-ui/core"

class Header extends Component {

    constructor(props){
        super(props);
        this.state={
            isNavOpen : false,
        }
        this.toggleNav = this.toggleNav.bind(this)
    }
    static contextType = AuthContext;
    toggleNav(){
        this.setState({
            isNavOpen:!this.state.isNavOpen
        })

    }
    render(){
       const {loggedIn} = this.context;
        return (
          <div>
            <Navbar dark expand="md">
              <div className="container">
                <NavbarToggler className="mr-2" onClick={this.toggleNav} />
                <NavbarBrand className="mr-auto" href="/">
                  <h4>
                    <strong>
                      College Discussion
                      <br />
                      <div className="text-center">Forum</div>
                    </strong>
                  </h4>
                </NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav className="container-fluid justify-content-end" navbar>
                    <NavItem>
                      <NavLink
                        className="nav-link"
                        exact
                        to="/"
                        activeStyle={{
                          color: "black",
                        }}
                      >
                        <h4>Home</h4>
                      </NavLink>
                    </NavItem>
                    {loggedIn === true && (
                      <>
                        <NavItem>
                          <NavLink
                            className="nav-link"
                            to="/addquestion"
                            activeStyle={{
                              color: "black",
                            }}
                          >
                            <h4>Add Question</h4>
                          </NavLink>
                        </NavItem>
                      </>
                    )}
                    {loggedIn === false && (
                      <>
                        <NavItem>
                          <NavLink
                            className="nav-link"
                            to="/register"
                            activeStyle={{
                              color: "black",
                            }}
                          >
                            <h4>Register</h4>
                          </NavLink>
                        </NavItem>                        
                        <Divider orientation="vertical" flexItem  style={{height:"45px"}} className="d-none d-md-block"/>
                        <NavItem>
                          <NavLink
                            className="nav-link"
                            to="/login"
                            activeStyle={{
                              color: "black",
                            }}
                          >
                            <h4>Login</h4>
                          </NavLink>
                        </NavItem>
                      </>
                    )}
                    <NavItem>
                      <NavLink
                        className="nav-link"
                        to="/aboutus"
                        activeStyle={{
                          color: "black",
                        }}
                      >
                        <h4> About Us</h4>
                      </NavLink>
                    </NavItem>
                    {loggedIn === true && (
                      <>
                        <NavItem>
                          <LogoutBtn />
                        </NavItem>
                      </>
                    )}
                  </Nav>
                </Collapse>
              </div>
            </Navbar>
          </div>
        );
    }
}

export default Header;