import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostListItem from "../TuitItem";
import { findTuitsThunk } from "../../services/tuits-thunks";

function TuitList() {
  //console.log(useSelector((state) => state.hometuits));
  const { tuits, loading } = useSelector((state) => state.hometuits);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
  }, []);

  //console.log("The tuits are" + JSON.stringify(tuits));

  return (
    <ul className="list-group">
      {loading && <li className="list-group-item"> Loading... </li>}

      {tuits.map((Items) => (
        <PostListItem key={Items._id} tuits={Items} />
      ))}
    </ul>
  );
}

export default TuitList;
