import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import api from "../utils/axios";
import Toast from "./Toast";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);

  const [error, setError] = useState("");

  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  const saveProfile = async () => {
    try {
      const response = await api.patch("profile/edit", {
        firstName,
        lastName,
        age,
        gender,
        about,
        photoUrl,
      });
      console.log(response.data)
      dispatch(addUser(response.data))
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      setError("");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <>
      {showAlert && <Toast />}
      <div className="flex justify-center my-10">
        <div className="flex justify-center mx-10">
          <div className="card card-border bg-base-100 w-96 flex justify-center">
            <div className="card-body">
              <h2 className="card-title justify-center">Edit Profile</h2>
              <div>
                <fieldset className="fieldset py-4">
                  <legend className="fieldset-legend">First Name :</legend>
                  <input
                    type="text"
                    className="input"
                    value={firstName}
                    placeholder="Type here"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset py-4">
                  <legend className="fieldset-legend">Last Name :</legend>
                  <input
                    type="text"
                    className="input"
                    value={lastName}
                    placeholder="Type here"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset py-4">
                  <legend className="fieldset-legend">Age :</legend>
                  <input
                    type="number"
                    className="input"
                    value={age}
                    placeholder="Type here"
                    onChange={(e) => setAge(e.target.value)}
                  />
                </fieldset>
                <select
                  defaultValue="Select Your Gender"
                  className="select"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option disabled={true}>Select Your Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">About :</legend>
                  <textarea
                    className="textarea h-24"
                    value={about}
                    placeholder="Bio"
                    onChange={(e) => setAbout(e.target.value)}
                  ></textarea>
                </fieldset>
                <fieldset className="fieldset py-4">
                  <legend className="fieldset-legend">PhotoUrl :</legend>
                  <input
                    type="text"
                    className="input"
                    value={photoUrl}
                    placeholder="Type here"
                    onChange={(e) => setPhotoUrl(e.target.value)}
                  />
                </fieldset>
              </div>
              <p className="text-red-500">{error}</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary" onClick={saveProfile}>
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <UserCard
          user={{ firstName, lastName, age, gender, about, photoUrl }}
        />
      </div>
    </>
  );
};

export default EditProfile;
