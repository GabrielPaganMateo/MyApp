import { useState} from "react";

function FunctionalComponentWithState() {
    const [text, setText] = useState('');
    
    return (
        <>
            <label>Current State: {text}</label><br/>
            <input type="text" value={text} onInput={(event) => {setText(event.target.value)}}></input>
        </>
    )

}

export default FunctionalComponentWithState