import axios from "axios";
import {useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import {  addUser , removeUser } from '../utils/userSlice'
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";

const Login = () => {

    const [email , setEmail] = useState('balaya@gmail.com');

    const [password , setPassword] = useState('Balaya@123');

    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleLogin = async () => {
        try {
            const res = await axios.post(BASE_URL + "auth/login", {
                 emailId : email,
                 password
            } , {withCredentials : true})
            dispatch(addUser(res.data))
            navigate("/")
        }catch(err) {
            console.log("Error : " + err)
        }
    }


  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-100 w-96 flex justify-center">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset py-4">
              <legend className="fieldset-legend">Email ID :</legend>
              <input type="text" className="input" value={email} placeholder="Type here" onChange={(e) => setEmail(e.target.value)}/>
            </fieldset>
            <fieldset className="fieldset py-4">
              <legend className="fieldset-legend">Password :</legend>
              <input type="text" className="input" value={password} placeholder="Type here" onChange={(e) => setPassword(e.target.value)}/>
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
