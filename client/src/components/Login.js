import React, { useState } from "react";
import { axiosWithAuth } from "../utilities/axiosWithAuth"

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route


  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", credentials) // My post request retrieving the  token form  the api  
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubblepage") // Using history to navigate to the bubble route 
      })
  }






  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>

      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange} />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange} />
        <button>Login</button>
      </form>
    </>
  );
};
export default Login;


