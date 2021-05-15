import axios from 'axios'
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import {Button} from "reactstrap";

function LogoutBtn() {
    const { getLoggedIn } = useContext(AuthContext);
    const history = useHistory();

    async function logout() {
        await axios.get("http://localhost:5000/auth/logout");
        await getLoggedIn();
        history.push("/register");
    }
    return (
    
        <div style={{display:"flex"}}>
            <Button style={{marginLeft:"auto"}}  color="primary" onClick={logout}>
                Log Out
            </Button>   
        </div>
    )
}
export default LogoutBtn;