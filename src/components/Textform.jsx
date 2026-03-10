import React,{useState} from 'react'



export default function Textform(props) {
  
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const handleChangeFontClick = () => {
    setIsItalic((prev) => !prev);
    props.showAlert("Toggled font style!", "success");
  };
  const [text, setText] = useState('');
  const [isItalic, setIsItalic] = useState(false);

  const handleCopy = () => {
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard!", "success");
  }

  const handleHandleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }

  //text = "new text"; //wrong way to change the state
  //setText("new text"); //correct way to change the state
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1 className='mb-4'>{props.heading}</h1>
<div className="mb-3">
{/* <label htmlFor="myBox" className="form-label fontSize-lg">Example textarea</label> */}
<textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8" style={{fontStyle: isItalic ? 'italic' : 'normal', backgroundColor: props.mode === 'dark'?'#c7c7c7':'white', color: props.mode === 'dark'?'white':'black'}}></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
   
   <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
   {/* <button className="btn btn-primary mx-2" onClick={handleChangeFontClick}>Clear Text</button> */}
   <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleChangeFontClick}>Italic</button>
   <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
   <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleHandleExtraSpaces}>Remove Extra Spaces</button>
   
    </div>
    <div className="container my-2" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
