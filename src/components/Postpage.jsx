import React from "react";
import profile from "../images/woman.png";
import "../style/PostList.css";
import PostList from "../components/PostList.jsx";
import { useState } from "react";
import EditPost from "../components/EditPost.jsx";
const Postpage = ({ data, setData, message }) => {
  const [editpage, setEditpage] = useState(false);

  return (
    <div>
      {data.map((mesg, index) => (
        <div className="PostList-content" key={index}>
          <img
            src={profile}
            alt="profile_image"
            className="profile_image"
          ></img>
          <div className="PostList-main">
            <div>Ilavenil Diagarajane</div>
            <div className="PostList-content">
              <Editandsave
                postdata={mesg}
                index={index}
                setData={setData}
                data={data}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
function Editandsave({ postdata, index, data, setData }) {
  const [editpage, setEditpage] = useState(false);
  const [message, setMessage] = useState(postdata);
  function remove(i) {
    const dataCopy = [...data];
    dataCopy.splice(i, 1);
    setData(dataCopy);
  }
  function edit() {
    setEditpage(true);
  }
  var save = (i) => {
    const dataCopy = [...data];
    dataCopy.splice(i, 1, message);
    setData(dataCopy);

    setEditpage(false);
  };
  return (
    <>
      {" "}
      {editpage ? (
        <EditPost
          postdata={postdata}
          message={message}
          setMessage={setMessage}
        />
      ) : (
        <PostList postdata={postdata} />
      )}
      <div className="PostList-btn">
        {editpage ? (
          <button
            className="btn-tweet"
            type="button"
            onClick={() => save(index)}
          >
            save
          </button>
        ) : (
          <>
            {" "}
            <button
              className="btn-remove"
              type="button"
              onClick={() => edit(index)}
            >
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </button>
            <button
              className="btn-remove"
              type="button"
              onClick={() => remove(index)}
            >
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
          </>
        )}
      </div>
    </>
  );
}
export default Postpage;
