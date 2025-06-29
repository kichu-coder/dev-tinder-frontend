import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
import api from "../utils/axios";

const Login = () => {
  const [email, setEmail] = useState("salaar@gmail.com");

  const [password, setPassword] = useState("salaar@123");

  const [firstName, setFirstName] = useState("Salaar");

  const [lastName, setLastName] = useState("Prabhas");

  const [error, setError] = useState("");

  const [isLoginForm, setIsLoginForm] = useState(false);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post(BASE_URL + "auth/login", {
        emailId: email,
        password,
      });
      dispatch(addUser(res.data));
      navigate("/");
      setError("");
    } catch (err) {
      setError("Erorr : " + err?.response?.data || "Something went wrong!!!");
    }
  };

  const handleSignUp = async () =>{
    try {
      const response = await api.post("auth/signUp", {
        firstName,
        lastName,
        emailId : email,
        password
      })
      dispatch(addUser(response.data));
      navigate("/profile");
      setError("");
    } catch(err){
        setError("Erorr : " + err?.response?.data || "Something went wrong!!!");
    }
  }

  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-100 w-96 flex justify-center">
        <div className="card-body">
          <h2 className="card-title justify-center">{isLoginForm ? 'Login' : 'Sign Up'}</h2>
          <div>
            {!isLoginForm && <>
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
            </>}
            <fieldset className="fieldset py-4">
              <legend className="fieldset-legend">Email ID :</legend>
              <input
                type="text"
                className="input"
                value={email}
                placeholder="Type here"
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset py-4">
              <legend className="fieldset-legend">Password :</legend>
              <input
                type="password"
                className="input"
                value={password}
                placeholder="Type here"
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={isLoginForm ? handleLogin : handleSignUp}>
              {isLoginForm ? 'Login' : 'Register'}
            </button>
          </div>
          <p className="m-auto">{isLoginForm ? 'Create a new User' : `Is Already a Registered user`} ? <a className="text-blue-500 cursor-pointer underline" onClick={() => setIsLoginForm(!isLoginForm)}>Click here</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
