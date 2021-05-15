import React,{ Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Header from "./HeaderComponents";
import HomeComponent from "./HomeComponent";
import LoginComponent from "./LoginComponent";
import AddQuestion from "./Questions/AddQuestion";
import register from "./RegisterComponent";
class Main extends Component {


    static contextType = AuthContext;
    render(){
        const {loggedIn} = this.context;
        return (
          <div className="app">
            <Header />
            <Switch>
              <Route exact path="/" component={HomeComponent}/>
              {loggedIn === true && <>
              <Route eaxct path="/addquestion">
                <AddQuestion/>
              </Route>
              </>}
              {loggedIn === false && (
                <>
                  <Route exact path="/login" component={LoginComponent} />
                  <Route exact path="/register" component={register} />
                </>
              )}
              <Redirect to="/" />
            </Switch>
          </div>
        );
    }
}

export default Main