import React,{Component} from 'react';
import {Form,Button,FormGroup,Col,Input,Label,Breadcrumb,BreadcrumbItem,Alert} from 'reactstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import AuthContext from '../context/AuthContext';
import {Slide} from"@material-ui/core"


export default class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorMessage:"",
      touched: {
        email: false,
        password: false,
      },
    };
    this.login = this.login.bind(this);
  }

  static contextType = AuthContext;

  async login(e) {
    e.preventDefault();

    const {getLoggedIn} = this.context; 

    try {
      const loginData = {
        email: this.state.email,
        password: this.state.password,
      };

      await axios.post("http://localhost:5000/auth/login", loginData);
      await getLoggedIn();
      this.props.history.push("/")
    } catch (error) {
      console.error(error.response.data.errorMessage);
      this.setState({errorMessage:error.response.data.errorMessage});
    }
  }
  render() {
    return (
      <Slide direction="left" in>
        <div className="container">
          <div className="row mt-2">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Login</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="row row-content">
            <div className="col-12">
              <h3>Login</h3>
            </div>
            <div className="col-12 col-md-9">
              <Form onSubmit={this.login}>
                <FormGroup row>
                  <Label htmlFor="email" md={3}>
                    Email*
                  </Label>
                  <Col md={9}>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter email"
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
                      placeholder="Enter password"
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                      value={this.state.password}
                    />
                  </Col>
                </FormGroup>
                <Col md={{ size: 9, offset: 3 }}>
                  {this.state.errorMessage !== "" ? (
                    <Alert
                      style={{
                        height: "30px",
                        padding: "0",
                        paddingLeft: "20px",
                      }}
                      color="danger"
                    >
                      {this.state.errorMessage}
                    </Alert>
                  ) : (
                    <div></div>
                  )}
                </Col>
                <FormGroup row>
                  <Col className="mt-4" md={{ size: 9, offset: 3 }}>
                    <Link to="/register">New User?Create account</Link>
                  </Col>
                </FormGroup>
                <FormGroup className="mt-4" row>
                  <Col md={{ size: 9, offset: 3 }} xs={{ size: 8, offset: 4 }}>
                    <Button type="submit" color="primary">
                      Sign In
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

