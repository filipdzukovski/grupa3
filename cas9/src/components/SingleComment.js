import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { API_URL } from '../utils/constants';

export const SingleComment = () => {
    
    const {id} = useParams();
    const [comment,setComment] = useState(undefined);
    
    useEffect(()=>{
        fetch(`${API_URL}/comments/${id}`)
            .then(res=>res.json())
            .then(element=>setComment(element))
            .catch(err=>alert(err))
    },[id])
    return(
        comment && 
        <div>
            <p>ID:{comment.id}</p>
            <p>Name:{comment.name}</p>
            <p>Email:{comment.email}</p>
            <p>Body:{comment.body}</p>
        </div>
        
    )
}