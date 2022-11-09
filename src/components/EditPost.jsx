import React from "react";


function EditPost({message,setMessage}) {

  return (
    <>
      <input
        type="text"
        name="message"
      value={message}
        className="message-box"
        onChange={(e) => setMessage(e.target.value)}
      ></input>
       
    </>
  );
}

export default EditPost;
