import React,{Component} from 'react';
import {Form,Button,FormGroup,Col,Input,Label,Breadcrumb,BreadcrumbItem,Alert} from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import {Slide} from "@material-ui/core"

class register extends Component {

    constructor(props){
        super(props);

        this.state={
            firstName:'',
            lastName:'',
            email:'',
            agree:'',
            password:'',
            verifyPassword:"",
            errorMessage:"",
            touched:{
                firstName:false,
                lastName:false,
                email:false,
                agree:false,
                password:false,
            }
        }
        this.register = this.register.bind(this);
    }
    static contextType =AuthContext;
    async register(e) {
      e.preventDefault();
      const {getLoggedIn} = this.context;
      try {
        const registerData = {
          firstName:this.state.firstName,
          lastName:this.state.lastName,
          email:this.state.email,
          password:this.state.password,
          passwordVerify:this.state.verifyPassword
        };

        await axios.post("http://localhost:5000/auth/",registerData);
        await getLoggedIn();
        this.props.history.push("/");
      } catch (error) {
        console.error(error.response.data.errorMessage);
        this.setState({ errorMessage: error.response.data.errorMessage });
      }
    }

render(){

    return (
      <Slide direction="left" in>
        <div className="container">
          <div className="row mt-2">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Signup</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="row row-content">
            <div className="col-12">
              <h3>Sign Up</h3>
            </div>
            <div className="col-12 col-md-9">
              <Form onSubmit={this.register}>
                <FormGroup row>
                  <Label htmlFor="firstName" md={3}>
                    First Name*
                  </Label>
                  <Col md={9}>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Enter First Name"
                      onChange={(e) =>
                        this.setState({ firstName: e.target.value })
                      }
                      value={this.state.firstName}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="lastName" md={3}>
                    Last Name*
                  </Label>
                  <Col md={9}>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Enter Last Name"
                      onChange={(e) =>
                        this.setState({ lastName: e.target.value })
                      }
                      value={this.state.lastName}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="email" md={3}>
                    Email*
                  </Label>
                  <Col md={9}>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Email"
                      onChange={(e) => this.setState({ email: e.target.value })}
                      value={this.state.email}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="password" md={3}>
                    Password*
                  </Label>
                  <Col md={9}>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter Password"
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                      value={this.state.password}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="password" md={3}>
                    Confirm Password*
                  </Label>
                  <Col md={9}>
                    <Input
                      type="password"
                      id="confirmpassword"
                      name="confirmpassword"
                      placeholder="Confirm Password"
                      onChange={(e) =>
                        this.setState({ verifyPassword: e.target.value })
                      }
                      value={this.state.verifyPassword}
                    />
                  </Col>
                </FormGroup>
                <Col className="mt-4" md={{ size: 9, offset: 3 }}>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" required={true} name="agree" />
                      <strong>Agree to terms and condtion</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col className="mt-4" md={{ size: 9, offset: 3 }}>
                  {this.state.errorMessage !== "" ? (
                    <Alert color="danger">{this.state.errorMessage}</Alert>
                  ) : (
                    <div></div>
                  )}
                </Col>
                <Col className="mt-4" md={{ size: 9, offset: 3 }}>
                  <Link to="/login">Already have an account?</Link>
                </Col>
                <FormGroup className="mt-4" row>
                  <Col md={{ size: 9, offset: 3 }} xs={{ size: 8, offset: 4 }}>
                    <Button type="submit" color="primary">
                      Sign Up
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
      </Slide>
    );
}
}

export default register;