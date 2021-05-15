import React,{useEffect, useState} from 'react';
import axios from 'axios';
import DisplayQuestions from './Questions/displayQuestions';
import Container from "@material-ui/core/Container"

export default function HomeComponent() {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    async function data(){
        const UserData = await axios.get("http://localhost:5000/auth/user");
        setfirstName(UserData.data.firstName);
        setlastName(UserData.data.lastName);
    };
    useEffect(()=>{
        data();
    });
    return (
        <div className="container">
            <div className="row mt-3">
            {firstName==="" ?<div></div>  :  <h4> Welcome, {firstName} {lastName}! 
            </h4>}
            <Container maxWidth="lg">
                <h5 className="m-2">Questions:</h5>
                <div className="m-4">
                    <DisplayQuestions name={firstName}/>
                </div>
            </Container>
            </div>
        </div>
    )
}
