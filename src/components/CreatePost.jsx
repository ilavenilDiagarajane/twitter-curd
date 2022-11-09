import React from "react";
import profile from "../images/woman.png";
import "../style/CreatePost.css";
import { useState } from "react";
import Postpage from "../components/Postpage"
const CreatePost = () => {
  const [data, setData] = useState([
    "P360 Ultra redefines the power of small in every way.",
    "it provides both performance and portability in the best forms, providing superb #productivity and #flexibility."
    ," With industry-first 4-liter chassis powered by 12th Gen Intel® Core™ processors"
  ]);
  const [message, setMessage] = useState();
  var addPost = () => {
    setData([...data, message]);
  };

  return (
    <>
      <div className="CreatePost-content">
        <div className="posthead">Home</div>
        <div className="postcontent">
          <img
            src={profile}
            alt="profile_image"
            className="profile_image"
          ></img>
          <input
            type="text"
            name="message"
            value={message}
            placeholder="What's happening?"
            className="message-box"
            onChange={(e) => setMessage(e.target.value)}
          ></input>
        </div>
        <div className="postcontent-btn">
          <button className="btn-tweet" type="button" onClick={addPost}>
            Tweet
          </button>
        </div>
      </div>
      <div className="postcontent-list">
       <Postpage data={data} setData={setData} message={message}  setMessage={setMessage}/>
      </div>
    </>
  );
};

export default CreatePost;
