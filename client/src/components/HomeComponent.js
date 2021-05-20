import React,{useEffect, useState} from 'react';
import axios from 'axios';
import DisplayQuestions from './Questions/displayQuestions';
import Container from "@material-ui/core/Container"
import {Grid,Button} from "@material-ui/core"

export default function HomeComponent() {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [category, setcategory] = useState("");
    const [click,setClick]=useState("");
    async function data(){
        const UserData = await axios.get("http://localhost:5000/auth/user");
        setfirstName(UserData.data.firstName);
        setlastName(UserData.data.lastName);
    };
    useEffect(()=>{
        data();
    });
    function buttonclick(e){
      setcategory(e);
      setClick(e);
    };
    return (
      <div className="container">
        <Grid container spacing={2}>
          <Grid container sm={2}>
            <div>
              <h5 className="mt-4 ml-1">Categories</h5>
              <div className="mt-3 ml-3">
                <Button
                  value=""
                  className="ml-2 d-md-block"
                  onClick={() => buttonclick("")}
                  variant={click === "" ? "outlined" : {}}
                >
                  All
                </Button>
                <Button
                  value="campus"
                  className="ml-2"
                  onClick={() => buttonclick("campus")}
                  variant={click === "campus" ? "outlined" : {}}
                >
                  Campus
                </Button>
                <Button
                  value="academics"
                  className="ml-2"
                  onClick={() => buttonclick("academics")}
                  variant={click === "academics" ? "outlined" : {}}
                >
                  Academics
                </Button>
                <Button
                  value="placemnets"
                  className="ml-2"
                  onClick={() => buttonclick("placements")}
                  variant={click === "placements" ? "outlined" : {}}
                >
                  Placements
                </Button>
                <Button
                  value="others"
                  className="ml-2"
                  onClick={() => buttonclick("other")}
                  variant={click === "other" ? "outlined" : {}}
                >
                  Others
                </Button>
              </div>
            </div>
          </Grid>
          <Grid style={{ maxWidth: "700px" }} xs={10}>
            <div className="row mt-3 ml-1">
              <Container>
                {firstName === "" ? (
                  <div></div>
                ) : (
                  <h4>
                    Welcome, {firstName} {lastName}!
                  </h4>
                )}

                <h5 className="m-2">Questions:</h5>
                <div className="m-4">
                  <DisplayQuestions name={firstName} category={category} />
                </div>
              </Container>
            </div>
          </Grid>
        </Grid>
      </div>
    );
}
