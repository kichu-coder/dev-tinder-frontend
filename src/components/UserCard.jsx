import React from "react";
import api from "../utils/axios";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";

const UserCard = ({ user = {} }) => {

  const { firstName, lastName, age, gender, about, photoUrl , _id} = user;
  const dispatch = useDispatch();

  const sendRequests = async (status, _id) => {
    try {
      const response = await api.post("request/send/" + status + "/" + _id);
      dispatch(removeFeed(_id));
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={photoUrl} alt="Photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + " , " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center m-4">
          <button className="btn btn-primary" onClick={() => sendRequests("ignore", _id)}>Ignore</button>
          <button className="btn btn-secondary" onClick={() => sendRequests("interested", _id)}>Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
