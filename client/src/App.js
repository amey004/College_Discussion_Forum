import './App.css'
import React,{Component} from 'react';
import Main from './components/MainComponents';
import {BrowserRouter} from 'react-router-dom';
import axios from "axios";
import { AuthContextProvider } from './context/AuthContext';


axios.defaults.withCredentials = true;

class App extends Component {
  render(){
    return (
      <AuthContextProvider>
      <BrowserRouter>
          <Main />
      </BrowserRouter>
      </AuthContextProvider>
    );
  }
}
export default App;
