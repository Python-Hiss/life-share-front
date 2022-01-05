import React from "react";
import axios from "axios";
import FormForPost from "./postComponents/FormForPost";
import PostElement from "./postComponents/PostElement";
import { useAuth } from "../contexts/auth";
import { useState, useEffect } from "react";
import Editpost from "./postComponents/Editpost";
import Header2 from "./layout/Header2";
import Footer from "./home_compnenet/Footer"
export default function Newsfeed() {
  const { tokens } = useAuth();
  const [showform, setshowform] = useState(false);
  const [itemupdate, setItemupdate] = useState("");
  const [result, setResult] = useState([]);
  useEffect(async () => {
    axios.get("https://lifeshareproject.herokuapp.com/blood/show/").then((res) => {
      setResult(res.data);
      console.log(res.data);
    });
  }, []);
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.title.value);
    let url = `https://lifeshareproject.herokuapp.com/blood/add/`;
    let data = {
      patient: tokens.username,
      title: e.target.title.value,
      text: e.target.content.value,
      publish: true,
    };
    axios.post(url, data).then((res) => {
      setResult((result) => [res.data, ...result]);
    });
    console.log(result);
  };

  const handledelete = async (item) => {
    let url = `https://lifeshareproject.herokuapp.com/blood/update-delete/${item.id}/`;
    axios.delete(url).then(() => {
      axios.get("https://lifeshareproject.herokuapp.com/blood/show/").then((res) => {
        setResult(res.data);
      });
      console.log(result);
    });
  };
  const handleform = (item) => {
    // e.preventDefault()
    setshowform(true);
    setItemupdate(item);
    // console.log(itemupdate);
  };
  const handleupdate = async (e) => {
    e.preventDefault();
    let url = `https://lifeshareproject.herokuapp.com/blood/update-delete/${itemupdate.id}/`;
    let data = {
      patient: itemupdate.patient,
      title: e.target.bloodtype.value,
      text: e.target.Content.value,
      publish: true,
    };
    axios.put(url, data).then(() => {
      axios.get("https://lifeshareproject.herokuapp.com/blood/show/").then((res) => {
        setResult(res.data);
      });
      console.log(result);
    });
    setshowform(false);
  };

  return (
    <>
      <Header2 />
      <div className="mt-28">
        {showform ? (
          <Editpost handleupdate={handleupdate} itemupdate={itemupdate} />
        ) : (
          <>
            <FormForPost handlesubmit={handlesubmit} />
            <PostElement
              result={result}
              handledelete={handledelete}
              handleform={handleform}
              showform={showform}
            />
          </>
        )}
      </div>
      <Footer/>
    </>
  );
}
