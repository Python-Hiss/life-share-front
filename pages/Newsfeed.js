import React from 'react'
import axios from 'axios'
import FormForPost from './postComponents/FormForPost'
import PostElement from './postComponents/PostElement'
import { useAuth } from '../contexts/auth'
import { useState, useEffect } from "react";
import Editpost from "./postComponents/Editpost";
export default function Newsfeed() {

    const { tokens } = useAuth();
    const [showform, setshowform] = useState(false);
    const [itemupdate, setItemupdate] = useState("");
    const [result, setResult] = useState([]);
    useEffect(async () => {
        axios.get('http://127.0.0.1:8000/blood/show/').then((res) => {
            setResult(res.data)
            console.log(res.data);
        }
        )
    }, []);
    const handlesubmit = async (e) => {
        e.preventDefault();
        console.log(e.target.title.value);
        let url = `http://127.0.0.1:8000/blood/add/`
        let data = {
            patient: tokens.username,
            title: e.target.title.value,
            text: e.target.content.value,
            publish: true
        }
        axios.post(url, data).then((res) => {
            setResult(result => [res.data, ...result]);
        });
        console.log(result);
    }

    const handledelete = async (item) => {
        let url = `http://127.0.0.1:8000/blood/update-delete/${item.id}/`
        axios.delete(url).then(()=>{
            axios.get('http://127.0.0.1:8000/blood/show/').then((res) => {
            setResult(res.data)
        });
        console.log(result);
    })
    }
    const handleform =  (item)=>{
        // e.preventDefault()
        setshowform(true)
        setItemupdate(item)
        // console.log(itemupdate);
      }
    const handleupdate = async (item) => {
        let url = `http://127.0.0.1:8000/blood/update-delete/${item.id}/`
        let data = {
            patient: item.patient,
            title: e.target.title.value,
            text: e.target.content.value,
            publish: true
        }
        axios.put(url, data).then(() => {
            axios.get('http://127.0.0.1:8000/blood/show/').then((res) => {
                setResult(res.data)
            });
            console.log(result);
        })
        setshowform(false)
    }

        return (
            <div>
                {showform ? 
                <Editpost
                handleupdate={handleupdate}
                itemupdate ={itemupdate}
                />
                :
                <>
                <FormForPost
                    handlesubmit={handlesubmit}
                />
                <PostElement
                    result={result}
                    handledelete={handledelete}
                    handleform = {handleform}
                    showform = {showform}   
                />
                </>
                }
            </div>
        )
    }