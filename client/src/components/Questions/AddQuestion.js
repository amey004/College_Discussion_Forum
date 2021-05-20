import React,{ useEffect, useState} from 'react'
import {Form,Button,FormGroup, Label, Col,Input} from 'reactstrap';
import axios from "axios";
import { useHistory } from 'react-router';


export default function AddQuestion(props) {

        const history = useHistory();

        const [firstName, setfirstName] = useState("");
        const [question,setQuestion] = useState("");
        const[userId,setuserId]=useState("");
        const[type,setType] =useState("");

        async function data() {
          const UserData = await axios.get("http://localhost:5000/auth/user");
          setfirstName(UserData.data.firstName);
          setuserId(UserData.data._id);
        }
        async function addquestion(e) {
          e.preventDefault();
          const data = {
            UserName:firstName,
            userId:userId,
            que:question, 
            type:type
          }
          await axios.post("http://localhost:5000/addquestion/",data);
          history.push("/");
        }
        useEffect(()=>{
          data();
        },[])
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12 mt-4 mb-3">
            <h5>{firstName} add your question : </h5>
          </div>
          <div className="col-12 col-md-9">
            <Form onSubmit={(e)=>addquestion(e)}>
              <FormGroup row>
                <Label htmlFor="Question" md={3}>
                  Question
                </Label>
                <Col md={9}>
                  <Input
                    type="textarea"
                    id="question"
                    name="question"
                    placeholder="Ask your question here"
                    autoComplete="off"
                    className="mb-2"
                    onChange={(e) => {
                      setQuestion(e.target.value);
                    }}
                    value={question}
                  />
                </Col>
                <Label htmlFor="type" md={3}>
                  Type
                </Label>
                <Col md={9}>
                  <select onChange={(e)=> setType(e.target.value)}>
                    <option value="campus">Campus</option>
                    <option value="campus">Academics</option>
                    <option value="placements">Placements</option>
                    <option value="other">Other</option>
                  </select>
                </Col>
                <FormGroup row>
                  <Col md={{ size: 10, offset: 2 }} className="mt-3">
                    <Button type="submit" color="primary">
                      Add
                    </Button>
                  </Col>
                </FormGroup>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
}