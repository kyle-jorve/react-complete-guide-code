import { useState, useEffect } from 'react';

function useCounter(subtract = false) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => subtract ? prevCounter - 1 : prevCounter + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [subtract]);

    return counter;
}

export default useCounter;