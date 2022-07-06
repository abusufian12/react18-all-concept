import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../mystyle.module.css'; 

function FetchDataByAxios(){
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setPosts(res.data)
            } 
        )
        .catch(err => {
                //console.log(err);
            }
        )
    }, [])

    return (
        <div className="style.postStyle">
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}

export default FetchDataByAxios;