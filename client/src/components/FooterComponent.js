import { Grid } from "@material-ui/core";
import React,{Component} from "react"
import {Link} from "react-router-dom"
import Icon from "@material-ui/core/Icon"
class Footer extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        const mystyles = {
          position: "absolute",
          bottom: "0",
          width: "100%",
          height:"0px",
        };
        const IconStyle={fontSize:"20px",marginRight:"0.7rem",marginTop:"1rem"}
        return (
          <div style={mystyles} className="">
            <div style={{ backgroundColor: "#c1a7ff",opacity:"0.8" }}>
              <Grid container style={{ marginTop: "50px" }}>
                <Grid item xs={4} className="text-center mt-2 mb-4">
                  <h5>Links</h5>
                  <Link to="/">Home</Link>
                  <br />
                  <Link to="/register">Register</Link>
                  <br />
                  <Link to="/login">Login</Link>
                  <br />
                  <Link to="/aboutus">AboutUs</Link>
                </Grid>
                <Grid item xs={4} className="text-center mt-2 mb-4">
                  <h5>Contact Us</h5>
                  <Icon className="fa fa-twitter" style={IconStyle}></Icon>
                  <Icon className="fa fa-facebook-square" style={IconStyle}></Icon>
                  <Icon className="fa fa-instagram" style={IconStyle}></Icon>
                  <Icon className="fa fa-envelope" style={IconStyle}></Icon>
                </Grid>
                <Grid item xs={4} className="text-center mt-2 mb-4">
                  <h5>Address</h5>
                  <p>
                    <Icon className="fa fa-map-marker"/>
                    PICT, Dhankawadi, Pune, Maharashtra 411043<br/>
                  </p>  
                  <p className="d-none d-sm-block">amey.bhattad72@gmail.com</p>
                </Grid>
              </Grid>
            </div>
            <div
              className=""
              style={{ backgroundColor: "LightGray", opacity: "0.7" }}
            >
              <p className="text-center" style={{ fontSize: "15px" }}>
                &copy;2021 Copyright : College Discussion Forum Inc.
              </p>
            </div>
          </div>
        );
    }
}

export default Footer