import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router";
import Footer from "./Footer";
import { BASE_URL } from "../utils/constants";
import {  addUser , removeUser } from '../utils/userSlice'
import { useDispatch, useSelector } from "react-redux";
import api from "../utils/axios";

const Body = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(!user){
      fetchUser();
    }
  },[])

  const fetchUser = async () => {
    try {
      const res = await api.post(BASE_URL + "profile/view" ,{});
      dispatch(addUser(res.data));
    } catch (err) {
      if(err.status === 401){
        navigate("/login");
      }
      console.log(err)
    }
  };

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
