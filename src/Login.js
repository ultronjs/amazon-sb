import React,{ useState } from 'react'
import './Login.css'
import {Link,useHistory} from "react-router-dom"
import { auth } from "./firbase"

function Login() {
    const history= useHistory();
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

    const login = (e) => {
        e.preventDefault();  //this stop the refresh
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) =>{
            //logged in ,redirect to homepage
            history.push("/")
        })
        .catch(error =>alert(error))

    }

    const register = (e) => {
         e.preventDefault();  //this stop the refresh
         auth.createUserWithEmailAndPassword(email,password)
         .then(auth => {
            //created a user and logged in, redirect to homepage
            history.push("/")
         })
         .catch(error =>alert(error))
        
    }

    function emailHandler(event){
        setEmail(event.target.value)
    }

      function passwordHandler(event){
        setPassword(event.target.value)
    }



    return (
        <div className="login">
            <Link to ="/">
              <img className="login_logo" 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""></img>  
            </Link>
            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" onChange={event => emailHandler(event)}></input>
                    <h5>Password</h5>
                    <input type="password" onChange={event => passwordHandler(event)}></input>
                    <button onClick={login} type="submit" className="login_signInButton">Sign In</button>


                </form>
                <p>
                    By signing-in you agree to Amazon's Condition of Use & Sale.Please see our Privacy Notice,our Cookies Notice and out Intereset-Based Ads Notice
                </p>
                <button onClick={register} className="login_signUpButton">Create your Amazon Account</button>
            </div>
            
        </div>
    )
}

export default Login
