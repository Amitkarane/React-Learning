import React, {useState} from 'react'



export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpClick= ()=>{
      let newText= text.toUpperCase();
      setText(newText);
    }
  
  const handleLowClick= ()=> {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange= (event)=>{
      setText(event.target.value);
    }
  
  const handleCapital= ()=> {
    let newText = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    setText(newText);
  }

  const handleClear= ()=> {
    setText("");
  }

  return (
    <div>
        <h1>{props.heading}</h1>
    <div className="mb-3">
</div>
<div className="mb-3">
  <textarea className="form-control" value={text} id="myBox" rows="3" onChange={handleOnChange} placeholder="Enter your text here..."></textarea>
  <br />
  <button className="btn btn-primary" onClick={handleUpClick} >To UpperCase</button>&nbsp;
  <button className="btn btn-primary" onClick={handleLowClick} >To LowerCase</button>&nbsp;
  <button className="btn btn-primary" onClick={handleCapital} >Captilize Word</button>&nbsp;
  <button className="btn btn-danger" onClick={handleClear} >Clear Box</button>

  
<br /><br />
  <h2>Your Text Summary : </h2>
  <p>your text conatains {text.length} characters and {text.split(" ").length} words</p>
  <p>{0.008 * text.split(" ").length} Minutes Required to read</p>
  <h3>Preview : </h3>
  <p className="text-justify">{text}</p>
</div>
    </div>
  )
}
