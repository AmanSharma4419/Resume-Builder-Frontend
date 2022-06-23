import './App.css';
import {DashBoard} from "./components/Dashboard";
import { SignIn } from './components/SignIn';
import {Signup} from './components/Signup';

function App() {
  return (
    <div className="App">
      {/* <DashBoard/> */}
      <Signup/>
      <SignIn/>
    </div>
  );
}

export default App;
