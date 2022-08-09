const CipherButton = ({text,handleClick}:{text:string,handleClick:() => void}) => (
    <div>
        <button onClick={handleClick}>{text}</button>
    </div>);

export default CipherButton;