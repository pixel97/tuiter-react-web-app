import React, { useState } from "react";
import { useDispatch } from "react-redux";
//import hometuits from "../tuits/tuits.json";
import { updateTuitThunk } from "../../services/tuits-thunks";
const TuitStats = (
  { tuit } /*{

  tuitstat = { replies: 200, retuits: 400, likes: "4k", liked: true },
}*/
) => {
  console.log("Tuit details " + JSON.stringify(tuit));
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(tuit.liked);

  const onClickHandler = () => {
    setIsLiked(true);
    console.log("Heart Clicked");
    dispatch(
      updateTuitThunk({
        ...tuit,
        likes: tuit.likes + 1,
      })
    );
  };

  const onClickDislikeHandler = () => {
    console.log("Heart Clicked");
    dispatch(
      updateTuitThunk({
        ...tuit,
        dislikes: tuit.dislikes + 1,
      })
    );
  };
  return (
    <div className="row justify-content-start">
      <div className="col-3" style={{ color: "black" }}>
        <i className="fa fa-comment"></i>
        &nbsp;{tuit.replies}
      </div>
      <div className="col-3" style={{ color: "black" }}>
        <i className="fa fa-retweet"></i>
        &nbsp;{tuit.retuits}
      </div>
      <div className="col-3" style={{ color: "black" }}>
        <div>
          Likes: {tuit.likes}
          <i
            onClick={onClickHandler}
            className={`bi bi-${
              isLiked ? "heart-fill me-2 text-danger" : "suit-heart"
            }`}
          ></i>
        </div>
      </div>

      <div className="col-2" style={{ color: "black" }}>
        <div>
          Dislikes: {tuit.dislikes}
          <i onClick={onClickDislikeHandler} className="fas fa-thumbs-down"></i>
        </div>
      </div>

      <div className="col-1" style={{ color: "black" }}>
        <i className="fa fa-share-alt"></i>
      </div>
    </div>
  );
};
export default TuitStats;
