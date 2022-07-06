import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

const fetcher = async (...args) => {
    const res = await fetch(...args);
    const data = await res.json();

    return data;
}

export default function FetchDataBySwr(){
    // const {data, error} = useSWR('http://api.quotable.io/random', fetcher, {suspense:true,});
    const {data, error} = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher, {suspense:true,});

    if(error){
        return <h2>There was an error!</h2>;
    }

    return(
        <div>
            <h1>Get quotes using SWR fetch API</h1>
            <div>
                {/* {data.content} */}
                <ul>
                {
                    data.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
            </div>
        </div>
    )

}