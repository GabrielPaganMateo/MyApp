import { useState } from "react";

function useCustomHook() {
    return useState(1);
}

function ComponentWithCustomHook() {
    const [count, setCount] = useCustomHook();

    return (
        <>
            <label>Current State: {count}</label><br/>
            <button onClick={setCount(count + 1)}></button>
        </>
    )
}

export default ComponentWithCustomHook