import React, {useState} from 'react'



export default function TextForm(props) {

    const handleUpCase = () => {
        console.log("Upper Case was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to Upper Case", "success");
    }; 
    const handleLowCase = () => {
        console.log("Lower Case was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to Lower Case", "success");
    }; 
    
    const handelOnChange = (event) => {
        console.log("OnChange");
        setText(event.target.value);
    }; 
    
    const handleCopy = ()=> {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied to Clipboard", "success");
    }

    const [text, setText] = useState('Enter text here 2');
    // text = "new Text"; wrong way to change the text
    // setText = (new text) // correct way to change text

    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8">

                </textarea>
            </div>
            <button className="btn btnPrimry m-1" onClick={handleUpCase} style={{backgroundColor: "#448EE4", color: "white"}}>Convert to Uppercase</button>
            <button className="btn btnPrimry m-1" onClick={handleLowCase} style={{backgroundColor: "#448EE4", color: "white"}}>Convert to Lowercase</button>
            <button className="btn btnPrimry m-1" onClick={handleCopy} style={{backgroundColor: "#448EE4", color: "white"}}>Copy text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h3>Prewview</h3>
            <p>{text.length>0?text:"Enter somthing in TextBox above to preview here"}</p>
        </div>
        </>   
    )
}
