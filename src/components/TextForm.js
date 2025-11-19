import React, {useState} from 'react'



export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpClick= ()=>{
      let newText= text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to UpperCase Successfully!!!","success")
    }
  
  const handleLowClick= ()=> {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase Successfully!!!","success")
  }
  const handleOnChange= (event)=>{
      setText(event.target.value);
    }
  
  const handleCapital= ()=> {
    let newText = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    setText(newText);
    props.showAlert("Converted to Capitalized Format Successfully!!!","success")
  }

  const handleClear= ()=> {
    setText("");
    props.showAlert("Text Box is Cleared!!!","success")
  }

  const handleCopy= ()=>{
    let text= document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied!!!","success")
  }

  return (

    <div className='container'>
        <h1>{props.heading}</h1>
    <div className="mb-3">
</div>
<div className="mb-3">
  <textarea className="form-control" value={text} id="myBox" rows="3" onChange={handleOnChange} placeholder="Enter your text here..."></textarea>
  <br />
  <button className="btn btn-primary my-3" onClick={handleUpClick} >To UpperCase</button>&nbsp;
  <button className="btn btn-primary my-3" onClick={handleLowClick} >To LowerCase</button>&nbsp;
  <button className="btn btn-primary my-3" onClick={handleCapital} >Captilize Word</button>&nbsp;
    <button className="btn btn-primary my-3" onClick={handleCopy} >CopyText</button>&nbsp;
  <button className="btn btn-danger my-3" onClick={handleClear} >Clear Box</button>


  
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
