import './App.css';
import {useState,useEffect} from "react"
import { Route, BrowserRouter, Switch,} from "react-router-dom"
import { getRequest } from "../src/api/Axios";

import {SignIn} from "./components/SignIn"
import {SignUp} from "./components/SignUp"
// import { NotFound } from './components/NotFound';
import { DashBoard } from './components/Dashboard';
import {EditCV} from "./components/EditCV"

function App() {
const [tokenVerification,setTokenVerification] =  useState(false)

const handleTokenVerification = () => {
  getRequest("verify/").then(response => {
    setTokenVerification(response.data.isVerify)
  })
}
const privateRoutePath = () => {
  return (
    <>
    <Route path="/dashboard/:id" component={DashBoard} />
    <Route path="/editCv/:id" component={EditCV} />
    </>
  )
}

const publicRoutePath = () => {
  return(
    <>
    <Route exact path="/" component={SignUp} />
    <Route path="/login" component={SignIn} />
    </>
  )
}

useEffect(() => {
  handleTokenVerification()
})

  return (
    <div className="App">
       <BrowserRouter>
       <Switch>
        {tokenVerification ? privateRoutePath() : publicRoutePath() }
        </Switch>             
       </BrowserRouter>
    </div>
  );
}

export default App;
