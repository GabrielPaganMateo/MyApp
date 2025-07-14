import { useEffect } from "react";

function HookComponent() {
    useEffect(() => { alert("useEffect activated!")}, [text]);
    let text = '';
    return (
        <>
            <input type="text" value={text} 
                onInput={(event) => 
                    text = event.target.value
                }>
            </input>
        </>
    )
}

export default HookComponent