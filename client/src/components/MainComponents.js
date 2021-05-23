import React,{ Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import About from "./AboutComponent";
import Header from "./HeaderComponents";
import HomeComponent from "./HomeComponent";
import LoginComponent from "./LoginComponent";
import AddQuestion from "./Questions/AddQuestion";
import register from "./RegisterComponent";
import Footer from "./FooterComponent";
class Main extends Component {


    static contextType = AuthContext;
    render(){
        const {loggedIn} = this.context;
        return (
          <div
            className="app"
            style={{ position: "relative", minHeight: "77vh"}}
          >
            <Header />
              <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/aboutus" component={About} />
                {loggedIn === true && (
                  <>
                    <Route exact path="/addquestion">
                      <AddQuestion />
                    </Route>
                  </>
                )}
                {loggedIn === false && (
                  <>
                    <Route exact path="/login" component={LoginComponent} />
                    <Route exact path="/register" component={register} />
                  </>
                )}
                <Redirect to="/" />
              </Switch>
            <Footer />
          </div>
        );
    }
}

export default Main