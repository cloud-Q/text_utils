import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   // BrowserRouter,
//   Route,
//   Routes,
//   // createBrowserRouter,
//   // RouterProvider
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');// wherher dark mode is enabeled  or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabeled", "success");
      document.title = "TextUtils - Dark mode";
      setInterval(() => {
        document.title = "TextUtils is amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Download TextUtils Now";
      }, 1650);
    }
    else if(mode !== 'light'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabeled", "success");
      document.title = "TextUtils - light mode";
    }
  }
  const themeChange = () => {
    if (document.getElementById('greenMode').checked === true){
      document.body.style.backgroundColor = '#00A86B';
      document.querySelector(".dropDownContent").style.backgroundColor = '#689268';
  
    }
    else if (document.getElementById('redMode').checked === true){
      document.body.style.backgroundColor = '#EA3B52';
      document.querySelector(".dropDownContent").style.backgroundColor = '#BA110C';
    }
    else if (document.getElementById('blueMode').checked === true){
      document.body.style.backgroundColor = '#4169E1';
      document.querySelector(".dropDownContent").style.backgroundColor = '#ADD8E6';
    }
    else if (document.getElementById('normalMode').checked === true){
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
    else{
      document.body.style.backgroundColor = 'white';
    }
  }


  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar firstElement="Home" title="About" mode={mode} toggleMode={toggleMode} themeChange={themeChange}/>
      <Alert alert={alert}></Alert>
      <br /> 
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
      {/* <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} />
        <Route path="/about" element={<About />} />
      </Routes> */}
      
      {/* </BrowserRouter> ----Brouser router is commented here cause; it is already encoded in index.js directly */}
    </>

  );
}

export default App;


// in new react router version switch feature has been updated:
//   in Harry's react course swirch is explained through old version
//   to refer to new documentation through which this app's code is written = "https://reactrouter.com/en/main/upgrading/v5#remove-redirects-inside-switch"