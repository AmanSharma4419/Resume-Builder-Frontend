import './App.css';
import {useState,useEffect} from "react"
import { Route, BrowserRouter, Switch,} from "react-router-dom"
import { getRequest } from "../src/api/Axios";
import {ViewCv} from "./components/ViewCv"
import {SignIn} from "./components/SignIn"
import {SignUp} from "./components/SignUp"
// import { NotFound } from './components/NotFound';
import { DashBoard } from './components/DashBoard';
import {EditCV} from "./components/EditCv"
import { CreateCv } from './components/CreateCv';

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
    <Route path="/view/:id" component={ViewCv} />
    <Route path="/create/:id" component={CreateCv} />
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
