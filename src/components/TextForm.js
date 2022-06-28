import React, { useState } from 'react'
import '../App.css'

export default function TextForm(props) {
  const [text, settext] = useState('');
  const [wordCount, setWordCount] = useState(0)
  const [characterCount, setcharacterCount] = useState(0)
  const [visibility, setvisibility] = useState(true)
  const upperCaseClicked= () => {
    settext(text.toUpperCase())
  }
  const lowerCaseClicked= () => {
    settext(text.toLowerCase())
  }
  const textChanged = (event) => {
    settext(event.target.value)
    setvisibility(false)
    let chars = event.target.value.split('').length ;
    setcharacterCount(chars)
    let words = 0;
    if(chars != 0){
        words = event.target.value.split(' ').length;
    }
    else{
        setvisibility(true) 
    }
    setWordCount(words)
    
  }

  const copyClicked = () => {
    navigator.clipboard.writeText(text)
  }
  const clearAll = () => {
    settext('')
    setvisibility(true) 
  }
  return (
    <div className='container Form'>
        <div className="mb-3">
        <label for="myBox" className="form-label">{props.title}</label>
        <textarea className="form-control myBox" id="myBox " rows="10" placeholder={'Enter the text'} value={text} onChange={textChanged}></textarea>
        <p className='overView' hidden={visibility}><b>Your Text Overview : </b> <i>Words Count : </i>{wordCount} , <i>Character Count : </i>{characterCount}</p>
        {/* <button type="button" onClick={lowerCaseClicked} className="btn btn-primary btn2">Convert To Lowercase</button>
       <button type="button" onClick={upperCaseClicked}  className="btn btn-primary btn1" >Convert To Uppercase</button> */}
         <button type="button" onClick={copyClicked} className="btn btn-primary btn3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Copy Text Box Content</button>
        <button type="button" onClick={clearAll} className="btn btn-danger btn4" >Clear Text Box Content</button>

        <h3 hidden={visibility} className='preview :'>Preview :</h3>
        <p hidden={visibility} className='previewText'>{text}</p>

        {/* <!-- Modal --> */}

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                Text Copied 
            </div>
            <div class="modal-body">
                Your Text Was Copied To Clipboard Successfully !!!!
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}
