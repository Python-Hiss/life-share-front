import React from 'react'
import axios from 'axios'
import FormForPost from './postComponents/FormForPost'
import PostElement from './postComponents/PostElement'
import { useAuth } from '../contexts/auth'
import { useState } from 'react'
export default function Newsfeed() {
    const { tokens } = useAuth();
    const [result, setResult] = useState([]);
    const handlesubmit = async (e) => {
        e.preventDefault();
        console.log(e.target.title.value);
        let url = `http://127.0.0.1:8000/blood/add/`
        let data = {
            patient: "yahialabib",
            title : e.target.title.value,
            text : e.target.content.value,
            publish: true
        }
        axios.post(url, data).then((res) => {
                setResult(res.data);
            });
    }
    return (
        <div>
            <FormForPost
                handlesubmit={handlesubmit}
            />
            <PostElement
            />
        </div>
    )
}