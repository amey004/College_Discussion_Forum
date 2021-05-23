import React,{Component} from "react";
import logo from "../images/logo1.png"
import {Grid} from "@material-ui/core"
import {Slide} from "@material-ui/core"
export default class About extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return (
          <Slide direction="left" in>
            <div className="container">
              <h3 className="text-center mt-2 aboutus">About Us</h3>
              <hr />
              <Grid container>
                <Grid className="text-right m-2" item xs={3}>
                  <img src={logo} height="80px" alt="Logo" />
                </Grid>
                <Grid item className="mt-2 aboutcontent" xs={8}>
                  <p style={{ fontSize: "18px", textAlign: "center" }}>
                    College Discussion Forum is a Q&A platform where students
                    can ask question and have their doubts cleared by
                    experienced people.
                  </p>
                </Grid>
              </Grid>
            </div>
          </Slide>
        );
    }
}


