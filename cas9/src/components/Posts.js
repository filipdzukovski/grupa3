import React, { useState, useEffect } from 'react';
import { API_URL } from '../utils/constants';
export const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/posts`)
            .then(res => res.json())
            .then(json => setPosts(json))
            .catch(err => alert(err))
    }, [])
    return (
        <div id="posts">
            {posts.length > 0 ?
                <div>
                    {posts.map(post => {
                        return (
                            <div key={post.id}>
                                <p>Id: {post.id}</p>
                                <p>Title: {post.title}</p>
                                <p>Body: {post.body}</p>
                                <hr />
                            </div>
                        )
                    })}
                </div>
                : <h2>Loading...</h2>}
        </div>
    )
}
