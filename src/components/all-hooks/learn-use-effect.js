import React, { useEffect, useState } from 'react';

function Timer(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(count => count+1)
        }, 1000)
    })

    return (
        <>
            <div>Render Time: {count}</div>
        </>
    )
}

export {Timer}