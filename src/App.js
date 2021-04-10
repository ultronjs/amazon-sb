import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import { useStateValue } from './StateProvider'
import { auth } from "./firbase"
import { useEffect } from "react"


function App() {
   const[{ user},dispatch] =  useStateValue();

   useEffect(() => {
     const unsubcribe = auth.onAuthStateChanged((authUser) => {
       if(auth){
         // the user is logged in
         dispatch({
           type:"SET_USER",
           user:authUser
         })
       }else{
         //the user is logged out
          dispatch({
           type:"SET_USER",
           user:null
         })
       }
     })
     return () => {
       //Any clean up operation go in here
       unsubcribe()
     }
   }, [])
  
  return (
    
      <Router>
        <div className="App">
          <Switch>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
      </div>

      </Router>

    
  );
}

export default App;
