import React,{useEffect, useState} from 'react';
import axios from 'axios';
import DisplayQuestions from './Questions/displayQuestions';
import Container from "@material-ui/core/Container"
import {Grid,Button} from "@material-ui/core"

export default function HomeComponent() {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [category, setcategory] = useState("");
    async function data(){
        const UserData = await axios.get("http://localhost:5000/auth/user");
        setfirstName(UserData.data.firstName);
        setlastName(UserData.data.lastName);
    };
    useEffect(()=>{
        data();
    });
    function changeCategory(e) {
      const category = e.target.value;
      setcategory(category);
    }
    return (
      <div className="container">
        <Grid container spacing={2}>
          <Grid container sm={2}>
            <div>
              <h5 className="mt-4 ml-1">Categories</h5>
              <div className="mt-3 ml-3">
                <Button
                  value=""
                  className="mr-2 d-md-block"
                  onClick={changeCategory}
                >
                  All
                </Button>
                <Button
                  value="campus"
                  className="ml-2"
                  onClick={changeCategory}
                >
                  Campus
                </Button>
                <Button
                  value="academics"
                  className="ml-2"
                  onClick={changeCategory}
                >
                  Academics
                </Button>
                <Button
                  value="placemnets"
                  className="ml-2"
                  onClick={() => setcategory("placements")}
                >
                  Placements
                </Button>
                <Button
                  value="others"
                  className="ml-2"
                  onClick={() => setcategory("others")}
                >
                  Others
                </Button>
              </div>
            </div>
          </Grid>
          <Grid style={{maxWidth:'700px'}} xs={10}>
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
