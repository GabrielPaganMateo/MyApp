import { useState, useEffect } from "react";

function useCustomHook() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId); // cleanup
    }, []);

    return time;
}

function ComponentWithCustomHook() {
    const time = useCustomHook();

    return (
        <>
            <label>Current Time: {time}</label><br/>
        </>
    )
}

export default ComponentWithCustomHook


