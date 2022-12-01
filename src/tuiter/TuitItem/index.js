import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunks";
import TuitStats from "../TuitStats";

const PostListItem = ({ tuits }) => {
  console.log("The post items are" + JSON.stringify(tuits));
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    console.log("The id to be deleted is id" + id);
    dispatch(deleteTuitThunk(id));
  };
  console.log(tuits.icon);
  return (
    <li className="list-group-item" style={{ backgroundColor: "white" }}>
      <div className="row">
        <div className="col-1">
          {tuits.icon && (
            <img
              src={`/images/${tuits.icon}`}
              style={{ borderRadius: "50%", height: "50px", width: "50px" }}
            />
          )}

          {!tuits.icon && <i class="fa-solid fa-user fa-2xl"></i>}
        </div>
        <div className="col-11">
          <p
            style={{
              color: "black",
              fontSize: "14px",
              fontWeight: "bold",
              marginBottom: 0,
            }}
          >
            {tuits.userName}&nbsp;
            <i className="fa fa-check-circle" style={{ color: "blue" }}></i>
            &nbsp;
            <span style={{ marginBottom: 0, color: "gray", fontSize: "12px" }}>
              {tuits.handle}&nbsp;
              <span
                style={{
                  display: "inline",
                  fontWeight: "normal",
                  fontSize: "12px",
                }}
              >
                -{tuits.time}
              </span>
            </span>
          </p>
          <i
            className="bi bi-x-lg float-end"
            onClick={() => {
              console.log("THEE" + tuits._id);
              deleteTuitHandler(tuits._id);
            }}
          ></i>

          <p>
            {tuits.tuit} <span style={{ color: "blue" }}>{tuits.link}</span>
          </p>

          {tuits.image && (
            <img
              src={`/images/${tuits.image}`}
              style={{ height: "60%", width: "100%", borderRadius: "3%" }}
            />
          )}
          <TuitStats tuit={tuits} />
        </div>
      </div>
    </li>
  );
};

export default PostListItem;
/*
 tuitstat={{
              replies: tuits.replies,
              retuits: tuits.retuits,
              likes: tuits.likes,
              liked: tuits.liked,
            }}*/
