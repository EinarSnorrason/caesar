import React,{useState}from "react";
import caesarCipher from "./cipher";
import CipherButton from "./CipherButton";
import CodeForm from "./CodeForm";
import "./CipherUI.css"

const CipherUI = () => {
    const [input,setInput] = useState('')
    const [code,setCode] = useState('')
    const [output,setOutput] = useState('')
    const handleEncode = () => {
        setOutput(caesarCipher(input,code))
    }
    const handleDecode = () => {
      setOutput(caesarCipher(input,code,true))
  }
    return (
        <div className="cipherGrid">
          <textarea 
            value = {input}
            onInput = {e => setInput(e.currentTarget.value)}
            placeholder="skriv melding">
          </textarea>
          <CodeForm code = {code} setCode = {setCode}/>
          <CipherButton text="krypter" handleClick={handleEncode}/>
          <CipherButton text="dekrypter" handleClick={handleDecode}/>
          <textarea
            name = "output"
            value = {output}
            readOnly = {true}
          ></textarea>
        </div>

    );
  }

 
export default CipherUI;