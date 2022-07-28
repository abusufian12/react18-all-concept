import React, { useState, createContext, useContext} from 'react';

const UserContext = createContext();

function LearnContext(){
    const [user, setUser] = useState('sufian');
    return(
        <UserContext.Provider value={user}>
            <h2>Component1</h2>
            <h2>{`Hello ${user} `}</h2>
            <Component2 />
        </UserContext.Provider>
    );
}

function Component2(){
    return(
        <>
            <h2>Component2</h2>
            <Component3 />
        </>
    )
}

function Component3(){
    return(
        <>
            <h2>Component3</h2>
            <Component4 />
        </>
    )
}

function Component4(){
    return(
        <>
            <h2>Component4</h2>
            <Component5 />
        </>
    )
}

function Component5(){
    const user = useContext(UserContext)
    return(
        <>
            <h2>Component5</h2>
            <h3>{`Hello ${user} again`}</h3>
        </>
    )
}


export {LearnContext};