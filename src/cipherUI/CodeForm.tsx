import React from "react";

const CodeForm = ({code,setCode}:{code:string,setCode:(n:string) => void}) => {
    const handleClick = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        if (value === '' || /^\d+$/.test(value)) setCode(value)
    }
    return (
        <div>
            <input
            type = "text"
            placeholder="skriv kode"
            value = {code}
            onChange = {handleClick}>
            </input>
        </div>
      );
}

export default CodeForm