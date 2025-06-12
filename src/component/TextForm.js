import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.alert("Converted to uppercase!", "success");
    }
    const handleClearClick = () => {
        console.log("Clear was text"+ text);
        let newText = "";
        setText(newText);
        props.alert("Text cleared!", "success");
    }
    const handleLoClick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.alert("Converted to lowercase!", "success");
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
        props.alert("Text changed!", "success");
    }
    const handleCopy= () => {
        console.log("Copy was clicked" + text);
        navigator.clipboard.writeText(text);
        props.alert("Text copied to clipboard!", "success");
    }
    const handleRemovSpace = () =>{
        console.log("Remove space was clicked" + text);
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.alert("Extra spaces removed!", "success");
    }
    
    const [text, setText] = useState("Enter your text here");
    return (
        <>
        <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? '#758af3 ' : 'white', color: props.mode === 'dark' ? 'white' : 'gray' }}></textarea>
            </div>
            <button className="btn btn-primary  mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary  mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary  mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary  mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary  mx-2" onClick={handleRemovSpace}>Remov Space Text</button>
            
        </div>
       <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}  >
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
            </div>
        </>
    )
}
