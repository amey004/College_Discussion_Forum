import axios from 'axios';
import React,{createContext,useState,useEffect} from 'react';

const AuthContext = createContext();

function AuthContextProvider(props) {
    const [loggedIn,setloggedIn]=useState(undefined);

    async function getLoggedIn(){
        const loggedInres = await axios.get("http://localhost:5000/auth/loggedIn");
        setloggedIn(loggedInres.data);
    }
    
    useEffect(() => {
            getLoggedIn();
    }, [])

    return (
        <AuthContext.Provider value={{loggedIn,getLoggedIn}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
export {AuthContextProvider}