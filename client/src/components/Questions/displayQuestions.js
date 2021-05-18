import React, { Component} from 'react'
import axios from"axios";
import { Card, CardBody,Input,Button,Form } from "reactstrap";
import "../../App.css"

class displayQuestions extends Component{

    constructor(props){
      super(props);
      this.state={
        questions:[],
        answer:""
      }
      this.getQuestions = this.getQuestions.bind(this);
      this.rederQuestions = this.rederQuestions.bind(this);

    }
    async getQuestions(){
        const category = this.props.category;
        const questionsRes = await axios.get("http://localhost:5000/addquestion",{category});
        this.setState({
          questions:questionsRes.data,
        })
    };
    componentDidMount(){
      this.getQuestions();
    }

  rederQuestions(){
      const questionsArr = this.state.questions;
      const ans = this.state.answer;
      const Name = this.props.name;
      async function AddAnswer(e,{id}){
        await axios.post("http://localhost:5000/addquestion/ans",{id,answer:ans,Name})
      }
      return questionsArr.map((question, i) => {
          return (
            <Card
              style={{
                backgroundImage:
                  "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
                  
              }}
              className="w-100 mt-2 mr-2"
              key={i}
            >
              <strong className="ml-2">{question.que}</strong>
              <CardBody>
                {question.answer ? (
                  <div>
                    Answer : {question.answer}
                    <div className="mt-2">
                      <small>Answered by {question.ansBy}</small>
                    </div>
                  </div>
                ) : (
                  <Form
                    onSubmit={(e) => {
                      AddAnswer(e, { id: question._id });
                    }}
                  >
                    <Input
                      type="textarea"
                      placeholder="Enter your answer here"
                      onChange={(e) => {
                        this.setState({
                          answer: e.target.value,
                        });
                      }}
                    />
                    <Button type="submit" className="m-2" color="primary">
                      Add
                    </Button>
                  </Form>
                )}
              </CardBody>
            </Card>
          );
        });
    }

    render(){
      return(
        <>
          {this.rederQuestions()}
        </>
      )
    }

}

export default displayQuestions;