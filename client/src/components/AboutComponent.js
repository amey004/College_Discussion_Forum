import React,{Component} from "react";
import logo from "../images/logo1.png"
import {Grid} from "@material-ui/core"
export default class About extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return (
        
          <div className="container">
            <h2 className="text-center mt-2">About Us</h2>
            <hr />
            <Grid container>
              <Grid className="text-right m-2" item xs={3}>
                <img src={logo} height="80px" alt="Logo" />
              </Grid>
              <Grid className="mt-2" xs={8}>
              <p style={{fontSize:"18px",textAlign:"center"}} >
                College Discussion Forum is a Q&A platform where students can ask question and have their
                doubts cleared by experienced people. 
              </p>
              </Grid>
            </Grid>
          </div>
        );
    }
}


