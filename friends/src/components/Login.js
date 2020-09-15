import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialValues = {
  username: "",
  password: "",
};

const Login = (props) => {
  const [credentials, setCredentials] = useState(initialValues);
  const history = useHistory();

  const changes = (e) => {
    setCredentials({
      credentials: {
        ...credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  const login = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("/api/login", credentials)
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("token", res.data.payload);
        history.push("/protected");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={login}>
        <label>
          Username: &nbsp;
          <input type="text" name="username" onChange={changes} />
        </label>
        &nbsp;
        <label>
          Password: &nbsp;
          <input type="password" name="password" onChange={changes} />
          &nbsp;
          <button>Log In</button>
        </label>
      </form>
    </div>
  );
};

export default Login;
