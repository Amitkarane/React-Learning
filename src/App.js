import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'


function App() {
  const [myStyle,setMyStyle] = useState({
    color:'black',
    background:'linear-gradient(to left, #fdd1b7ff, #b2b9f5ff)'
  })
  const [btnText,setBtnText] = useState('Enable Dark Mode');

  let toggleMode = ()=>{
    if(myStyle.color === 'black'){
      setMyStyle({
        color:'white',
        background:'linear-gradient(to left, #000000, #434343)'
      })
      setBtnText('Enable Default Mode')
    }
    else{
      setMyStyle({
        color:'black',
        background:'linear-gradient(to left, #fdd1b7ff, #b2b9f5ff)'
      })
      setBtnText('Enable Dark Mode')
    }
  }
  return (
    <div style={myStyle}>
    <div className="NavBar">
    <Navbar title="PRIME GAMING" link="Discord" toggleMode={toggleMode} btnText={btnText} />
    </div>
    <br /><br />
    <div className="container">
      <TextForm heading="Enter your Desired Inputs here !!!"/>
    </div>

    
    <br /><br />
    </div>
  );
}

export default App;
