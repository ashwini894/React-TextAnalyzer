
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import './App.css';
import React , {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// import Aboutus from './components/Aboutus';
import Alert from './components/Alert';

function App() {
  const[mode,setMode] = useState('light');
  const [btnText, setBtnText] =  useState("Dark Mode");
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      message:message,
      type : type,
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  } 

  const toggleMode = () =>{
    if(mode=='light'){
      setMode('dark');
      setBtnText("Light Mode");
      document.body.style.backgroundColor= 'black';
      showAlert("Dark mode has been enabled.",'success');
       setInterval(() => {
        document.title = "This is Awesome";
       }, 1500);
     
    }else{
      setMode('light');
      setBtnText("Dark Mode");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.",'success');
      setInterval(() => {
        document.title = "This is Looking good!";
      }, 1500);
      
    }
  }

  return (
    <>
      <Navbar name="Text Analyzer" about="About Us" services="Our services" toggleMode={toggleMode} mode={mode} btnText={btnText} />
      <Alert alert={alert} /> 
      <Textform  mode={mode} showAlert={showAlert} /> 
     
      {/* <Aboutus /> */}
    </>
  );
}

export default App;
