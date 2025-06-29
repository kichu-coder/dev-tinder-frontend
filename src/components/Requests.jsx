import React, { useEffect } from "react";
import api from "../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();

  const requests = useSelector((store) => store.request);

  const reviewRequest = async (status, _id) => {
    try {
      const response = await api.post("request/review/" + status + "/" + _id);

      dispatch(removeRequest(_id));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchRequests = async () => {
    try {
      const response = await api.post("user/requests/received");

      dispatch(addRequest(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0) return <h1 className="flex justify-center my-10">No Requests found</h1>;

  return (
    <div>
      <h1 className="font-bold text-center my-5 text-2xl">Requests</h1>
      {requests.map((request) => {
        const { firstName, lastName, photoUrl, age, gender, about, _id } =
          request.fromUserId;
        return (
          <div
            key={_id}
            className="card card-side bg-base-100 shadow-sm h-30 w-1/2 mx-auto"
          >
            <figure className="rounded-full">
              <img src={photoUrl} alt={firstName} />
            </figure>
            <div className="card-body p-3">
              <h2 className="card-title">{firstName + " " + lastName}</h2>
              <p>{age + "," + gender}</p>
              <p>{about}</p>
            </div>
             <div className="card-actions justify-center flex items-center mx-4">
                <button className="btn btn-primary" onClick={() => reviewRequest("rejected", request._id)}>Reject</button>
                <button className="btn btn-secondary" onClick={() => reviewRequest("accepted", request._id)}>Accept</button>
              </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
