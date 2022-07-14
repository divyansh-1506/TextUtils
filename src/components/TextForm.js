import React , {useState} from 'react'

export default function TextForm(props) {
    const[text, setText] = useState("");


// Utility functions

    // Uppercase click
    const upperClick = ()=> { 

        let c = text.toUpperCase();
        setText(c);

    }

    // Lowercase click logic
    const lowerClick = ()=> { 

        let c = text.toLowerCase();
        setText(c);
        
    }
    const clearText = () => {
        setText("");
    }

    const wordCount = () => {
        if(text == '')
        return 0;
        else return text.split(" ").length;
   }
    
    //Onchange function is mandatory in textbox to notice and reflect changes or typed text
    const handleOnChange = (event)=>{
        setText(event.target.value);

    }

  return (
      <>
    <div className="container my-5">
        <h1>Enter text to analyze</h1>
        <div className="mb-3">
            {/* <label htmlFor="MyForm" className="form-label"></label> */}
            <textarea className="form-control" onChange = {handleOnChange} value = {text} id="exampleFormControlTextarea1" placeholder = "Start Typing" rows="10"></textarea>
        </div>

        <button className="btn btn-primary" onClick={upperClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={lowerClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
        {/* <button className="btn btn-primary" onClick={handleOnClick}>Convert to Uppercase</button> */}
        
        <h4 className='my-4'>Text Summary</h4>
        <p>{wordCount()} word(s) and {text.length} character(s)</p>
        <p>{(wordCount() * 0.004)} minutes read </p>

        <h4 className='my-4'>Preview Text</h4>
        {/* <div</div> */}
        <p>{text}</p>

    </div>
    

      </>
  )
}
