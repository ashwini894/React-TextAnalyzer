import React ,{useState} from 'react'

export default function Textform(props) {
  const [text, setText] = useState("Enter text here.");
  const [previousInput, setPreviousInput] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setPreviousInput(text); 
    setText(newText);
  }

  const handleOnchange = (event) => {
    setText(event.target.value);
  }

  const handleLowClick = () => {
    setPreviousInput(text); 
    let lowerText = text.toLowerCase();
    setText(lowerText)
  }

  const handleclear = () => {
    setText('')
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      setText(text); // Update the state after copying
      setPreviousInput(text); 
      props.showAlert('Text copied to clipboard!','success');
    });
  };

  const removeBlankLines = () => {
    const lines = text.split('\n'); // Split into lines
    const nonBlankLines = lines.filter(line => line.trim() !== ''); // Filter out blank lines
    const newText = nonBlankLines.join('\n'); // Join non-blank lines
    setText(newText);
    setPreviousInput(text); 
    props.showAlert("Removed unwanted lines",'success')
  };

  const cleanUpText = () => {
    // Implement the logic to remove extra spaces and formatting here
    const cleaned = text.replace(/\s+/g, ' ').trim(); // Example: Replace multiple spaces with single space
    setText(cleaned);
    setPreviousInput(text); 
  };

  const handleUndo = () => {
    setText(previousInput); // Set the user input back to the previous state
  };


  return (
    <div className="container" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#154387', color: props.mode === 'light' ? 'black' : 'white' }}>
      <div className="mb-3 my-2">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1"  style={{ backgroundColor: props.mode === 'light' ? 'white' : '#C5C5C5' }}  rows="10" value={text} onChange={handleOnchange} ></textarea>
       </div>
       <button type="button" className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
       <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>LowerCase</button>
       <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleclear}>Clear</button>
       <button type="button" className="btn btn-primary my-2 mx-2" onClick={copyToClipboard}>Copy to clipboard</button>
       <button type="button" className="btn btn-primary my-2 mx-2" onClick={removeBlankLines}>Remove Blank lines</button>
       {/* <button type="button" className="btn btn-primary my-2 mx-2" onClick={cleanUpText}>Remove extra space & Format Text</button> */}
       <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleUndo}>Undo</button>

       <div style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h3>Text Summary</h3>
        <p>Words: {text.split(" ").length}</p>
        <p>characters:{text.length}</p>

        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter text in above textarea to preview here'}</p>
      </div>
    </div>
  )
}
