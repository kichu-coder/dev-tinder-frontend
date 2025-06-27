import React, { useEffect } from "react";
import api from "../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();

  const connections = useSelector((store) => store.connection);

  const getConnections = async () => {
    try {
      const response = await api.post("user/connections");

      dispatch(addConnections(response?.data?.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0) return <h1>No connectiosn found</h1>;

  return (
    <div>
      <h1 className="font-bold text-center my-5 text-2xl">Connections</h1>
      {connections.map((connection) => {
        return (
          <div key={connection._id} className="card card-side bg-base-100 shadow-sm h-30 w-1/2 mx-auto">
            <figure className="rounded-full">
              <img src={connection.photoUrl} alt={connection.firstName} />
            </figure>
            <div className="card-body p-3">
              <h2 className="card-title">
                {connection.firstName + " " + connection.lastName}
              </h2>
              <p>{connection.age + "," + connection.gender}</p>
              <p>{connection.about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
