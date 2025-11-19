import './App.css';
import ALert from './components/ALert';
import Discord from './components/Discord';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  useEffect(() => {
  document.body.style.background =
    'linear-gradient(to left, #fdd1b7ff, #b2b9f5ff)';
  }, []);
  const [myStyle,setMyStyle] = useState({
    color:'black',
    // background:'linear-gradient(to left, #fdd1b7ff, #b2b9f5ff)'
  })
  const [btnText,setBtnText] = useState('Enable Dark Mode');

  let toggleMode = ()=>{
    if(myStyle.color === 'black'){
      setMyStyle({
        color:'white',
        // background:'linear-gradient(to left, #000000, #434343)'
      })
      document.body.style.background = 'linear-gradient(to left, #000000, #434343)';
      setBtnText('Enable Default Mode');
      showAlert("Dark Mode is Enabled Successfully","success");
    }
    else{
      setMyStyle({
        color:'black',
        // background:'linear-gradient(to left, #fdd1b7ff, #b2b9f5ff)'
      })
      document.body.style.background = 'linear-gradient(to left, #fdd1b7ff, #b2b9f5ff)';
      setBtnText('Enable Dark Mode');
      showAlert("Default Mode is Enabled Successfully","success");
    }
  }

  const [alert,SetAlert] = useState(null);

  const showAlert = (message,type)=>{
    SetAlert({
      msg:message,
      type: type
    })
  }

  setTimeout(() => {
    SetAlert(null);
  }, 3000);

  return (
    <Router>
    <div style={myStyle}>
    <div className="NavBar">
    <Navbar title="PRIME GAMING" link="Discord" toggleMode={toggleMode} btnText={btnText} />
    </div>
    <ALert alert={alert} />
    <br /><br />
    
    <Switch>
          {/* exact so it doesn't swallow /discord */}
          <Route exact path="/">
            <TextForm heading="Enter your Desired Inputs here !!!" showAlert={showAlert} />
          </Route>

          <Route path="/discord">
            <Discord />
          </Route>
    </Switch>
    
    <br /><br />
    </div>
    </Router>
  );
}

export default App;
